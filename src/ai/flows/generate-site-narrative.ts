'use server';
/**
 * @fileOverview AI-powered narrative generator for cultural sites.
 *
 * - generateSiteNarrative - A function that generates an engaging narrative script for a given site.
 * - GenerateSiteNarrativeInput - The input type for the generateSiteNarrative function.
 * - GenerateSiteNarrativeOutput - The return type for the generateSiteNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSiteNarrativeInputSchema = z.object({
  siteName: z.string().describe('The name of the cultural site.'),
  historicalContext: z.string().describe('The historical context of the site.'),
  architecturalSignificance: z.string().describe('The architectural significance of the site.'),
  notableEvents: z.string().describe('Notable events associated with the site.'),
  notableFigures: z.string().describe('Notable figures associated with the site.'),
  tone: z.string().describe('The desired tone of the narrative (e.g., formal, informal, dramatic).'),
  style: z.string().describe('The desired style of the narrative (e.g., historical, adventurous, mysterious).'),
  culture: z.string().describe('The culture or origin of the site.'),
});
export type GenerateSiteNarrativeInput = z.infer<typeof GenerateSiteNarrativeInputSchema>;

const GenerateSiteNarrativeOutputSchema = z.object({
  narrativeScript: z.string().describe('The generated narrative script for the site.'),
});
export type GenerateSiteNarrativeOutput = z.infer<typeof GenerateSiteNarrativeOutputSchema>;

export async function generateSiteNarrative(
  input: GenerateSiteNarrativeInput
): Promise<GenerateSiteNarrativeOutput> {
  return generateSiteNarrativeFlow(input);
}

const generateSiteNarrativePrompt = ai.definePrompt({
  name: 'generateSiteNarrativePrompt',
  input: {schema: GenerateSiteNarrativeInputSchema},
  output: {schema: GenerateSiteNarrativeOutputSchema},
  prompt: `You are a narrative expert specializing in creating engaging stories for cultural heritage sites.  You are to generate an engaging narrative script for the site, adapting the tone and style to suit the site's unique character and historical period.  Consider the cultural origin of the site.

Site Name: {{siteName}}
Historical Context: {{historicalContext}}
Architectural Significance: {{architecturalSignificance}}
Notable Events: {{notableEvents}}
Notable Figures: {{notableFigures}}
Tone: {{tone}}
Style: {{style}}
Culture: {{culture}}

Narrative Script:`,
});

const generateSiteNarrativeFlow = ai.defineFlow(
  {
    name: 'generateSiteNarrativeFlow',
    inputSchema: GenerateSiteNarrativeInputSchema,
    outputSchema: GenerateSiteNarrativeOutputSchema,
  },
  async input => {
    const {output} = await generateSiteNarrativePrompt(input);
    return output!;
  }
);
