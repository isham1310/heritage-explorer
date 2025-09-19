"use client";

import type { HeritageSite } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface VideoCuratorProps {
  site: HeritageSite;
}

const getYouTubeVideoId = (url: string) => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    if (
      urlObj.hostname === "www.youtube.com" ||
      urlObj.hostname === "youtube.com"
    ) {
      return urlObj.searchParams.get("v");
    }
  } catch (error) {
    //
  }
  return null;
};

const VideoEmbed = ({ videoLink, title }: { videoLink: string | null; title: string }) => {
    if (!videoLink) return null;
    const videoId = getYouTubeVideoId(videoLink);
    if (!videoId) return null;

    return (
        <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <div className="aspect-video w-full">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player - ${title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg border"
                ></iframe>
            </div>
        </div>
    );
}

export function VideoCurator({ site }: VideoCuratorProps) {
  const { vlog, guide } = site.youtubeVideoLinks;

  if (!vlog && !guide) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">No relevant videos found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
        <VideoEmbed videoLink={vlog} title="Travel Vlog" />
        <VideoEmbed videoLink={guide} title="Complete Guide" />
    </div>
  );
}
