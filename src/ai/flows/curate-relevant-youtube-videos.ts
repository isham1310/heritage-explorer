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
  youtubeVideoLinks: z.object({
      vlog: z.string(),
      guide: z.string(),
  }).describe('An object containing YouTube video links for a vlog and a guide.'),
});
export type CurateRelevantYouTubeVideosInput = z.infer<typeof CurateRelevantYouTubeVideosInputSchema>;

const CurateRelevantYouTubeVideosOutputSchema = z.object({
  curatedVideoLinks: z.object({
      vlog: z.string(),
      guide: z.string(),
  }).describe('An object containing curated YouTube video links for a vlog and a guide.'),
});
export type CurateRelevantYouTubeVideosOutput = z.infer<typeof CurateRelevantYouTubeVideosOutputSchema>;

export async function curateRelevantYouTubeVideos(input: CurateRelevantYouTubeVideosInput): Promise<CurateRelevantYouTubeVideosOutput> {
  return curateRelevantYouTubeVideosFlow(input);
}

// Since we are now providing specific vlog and guide links, the AI curation might be less critical.
// We can simply return the provided links. If more complex curation is needed in the future,
// the prompt can be adjusted.
const curateRelevantYouTubeVideosFlow = ai.defineFlow(
  {
    name: 'curateRelevantYouTubeVideosFlow',
    inputSchema: CurateRelevantYouTubeVideosInputSchema,
    outputSchema: CurateRelevantYouTubeVideosOutputSchema,
  },
  async input => {
    // For now, we directly pass through the provided videos.
    // An AI prompt could be used here to validate or select better videos if a list was provided.
    return {
        curatedVideoLinks: input.youtubeVideoLinks
    };
  }
);
