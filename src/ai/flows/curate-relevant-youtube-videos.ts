'use server';
/**
 * @fileOverview A flow that curates relevant YouTube videos for a given heritage site.
 *
 * - curateRelevantYouTubeVideos - A function that curates YouTube videos based on site information.
 * - CurateRelevantYouTubeVideosInput - The input type for the curateRelevantYouTubeVideos function.
 * - CurateRelevantYouTubeVideosOutput - The return type for the curateRelevantYouTubeVideos function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateRelevantYouTubeVideosInputSchema = z.object({
  siteName: z.string().describe('The name of the heritage site.'),
  siteDescription: z.string().describe('A detailed description of the heritage site.'),
  youtubeVideoLinks: z.array(z.string()).describe('An array of YouTube video links related to the site.'),
});
export type CurateRelevantYouTubeVideosInput = z.infer<typeof CurateRelevantYouTubeVideosInputSchema>;

const CurateRelevantYouTubeVideosOutputSchema = z.object({
  curatedVideoLinks: z.array(z.string()).describe('An array of curated YouTube video links that are most relevant to the site.'),
});
export type CurateRelevantYouTubeVideosOutput = z.infer<typeof CurateRelevantYouTubeVideosOutputSchema>;

export async function curateRelevantYouTubeVideos(input: CurateRelevantYouTubeVideosInput): Promise<CurateRelevantYouTubeVideosOutput> {
  return curateRelevantYouTubeVideosFlow(input);
}

const prompt = ai.definePrompt({
  name: 'curateRelevantYouTubeVideosPrompt',
  input: {schema: CurateRelevantYouTubeVideosInputSchema},
  output: {schema: CurateRelevantYouTubeVideosOutputSchema},
  prompt: `You are an expert in curating YouTube videos for heritage sites.

  Given the following heritage site name and description, and a list of YouTube video links, you will select the videos that are most relevant to the site.
  You should only return a small number of videos (3-5) that provide the best supplementary visual information.

  Site Name: {{{siteName}}}
  Site Description: {{{siteDescription}}}
  YouTube Video Links: {{#each youtubeVideoLinks}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Curated Video Links:`, // Ensure output matches the schema
});

const curateRelevantYouTubeVideosFlow = ai.defineFlow(
  {
    name: 'curateRelevantYouTubeVideosFlow',
    inputSchema: CurateRelevantYouTubeVideosInputSchema,
    outputSchema: CurateRelevantYouTubeVideosOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
