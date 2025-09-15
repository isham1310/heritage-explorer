"use server";

import {
  generateSiteNarrative,
  GenerateSiteNarrativeInput,
  GenerateSiteNarrativeOutput,
} from "@/ai/flows/generate-site-narrative";
import {
  curateRelevantYouTubeVideos,
  CurateRelevantYouTubeVideosInput,
  CurateRelevantYouTubeVideosOutput,
} from "@/ai/flows/curate-relevant-youtube-videos";

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

export async function handleCurateVideos(
  input: CurateRelevantYouTubeVideosInput
): Promise<CurateRelevantYouTubeVideosOutput> {
  try {
    const result = await curateRelevantYouTubeVideos(input);
    return result;
  } catch (error) {
    console.error("Error curating videos:", error);
    return {
      curatedVideoLinks: [],
    };
  }
}
