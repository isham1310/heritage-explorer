"use server";

import {
  generateSiteNarrative,
  GenerateSiteNarrativeInput,
  GenerateSiteNarrativeOutput,
} from "@/ai/flows/generate-site-narrative";
import {
  identifyHeritageSiteFromImage,
  IdentifyHeritageSiteFromImageInput,
  IdentifyHeritageSiteFromImageOutput,
} from "@/ai/flows/identify-heritage-site-from-image";

export async function handleGenerateNarrative(
  input: GenerateSiteNarrativeInput
): Promise<GenerateSiteNarrativeOutput> {
  try {
    const result = await generateSiteNarrative(input);
    return result;
  } catch (error) {
    console.error("Error generating narrative:", error);
    return {
      narrativeScript:
        "An error occurred while generating the narrative. Please try again later.",
    };
  }
}


export async function handleIdentifySite(
  input: IdentifyHeritageSiteFromImageInput
): Promise<IdentifyHeritageSiteFromImageOutput> {
  try {
    const result = await identifyHeritageSiteFromImage(input);
    return result;
  } catch (error) {
    console.error("Error identifying site:", error);
    return {
      siteName: "Error",
      description: "An error occurred while analyzing the image. Please try again.",
    };
  }
}
