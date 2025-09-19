'use server';
/**
 * @fileOverview An AI flow to identify a heritage site from an image.
 *
 * - identifyHeritageSiteFromImage - A function that identifies a heritage site from an image.
 * - IdentifyHeritageSiteFromImageInput - The input type for the identifyHeritageSiteFromImage function.
 * - IdentifyHeritageSiteFromImageOutput - The return type for the identifyHeritageSiteFromImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {heritageSites} from '@/lib/sites-data';

const IdentifyHeritageSiteFromImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a heritage site, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type IdentifyHeritageSiteFromImageInput = z.infer<typeof IdentifyHeritageSiteFromImageInputSchema>;

const IdentifyHeritageSiteFromImageOutputSchema = z.object({
  siteName: z.string().describe('The name of the identified heritage site.'),
  description: z.string().describe('A brief description of the identified site.'),
});
export type IdentifyHeritageSiteFromImageOutput = z.infer<typeof IdentifyHeritageSiteFromImageOutputSchema>;

export async function identifyHeritageSiteFromImage(input: IdentifyHeritageSiteFromImageInput): Promise<IdentifyHeritageSiteFromImageOutput> {
  return identifyHeritageSiteFromImageFlow(input);
}

const siteList = heritageSites.map(site => `- ${site.name}: ${site.description.substring(0, 100)}...`).join('\n');


const prompt = ai.definePrompt({
  name: 'identifyHeritageSiteFromImagePrompt',
  input: {schema: IdentifyHeritageSiteFromImageInputSchema},
  output: {schema: IdentifyHeritageSiteFromImageOutputSchema},
  prompt: `You are an expert in identifying Jharkhand's heritage sites.
  A user has provided an image. Your task is to identify which of the following sites is in the image.

  Available Sites:
  ${siteList}

  Respond with the name of the site and a brief, one-sentence description. If you cannot identify the site with high confidence, or if it's not in the list, respond with "Unknown Site" and a polite message that you couldn't identify the landmark.

  Image: {{media url=photoDataUri}}`,
});

const identifyHeritageSiteFromImageFlow = ai.defineFlow(
  {
    name: 'identifyHeritageSiteFromImageFlow',
    inputSchema: IdentifyHeritageSiteFromImageInputSchema,
    outputSchema: IdentifyHeritageSiteFromImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
