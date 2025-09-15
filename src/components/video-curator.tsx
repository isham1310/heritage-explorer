"use client";

import { useState, useEffect } from "react";
import type { HeritageSite } from "@/types";
import { handleCurateVideos } from "@/app/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "./ui/card";

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

export function VideoCurator({ site }: VideoCuratorProps) {
  const [videoLinks, setVideoLinks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const result = await handleCurateVideos({
        siteName: site.name,
        siteDescription: site.description,
        youtubeVideoLinks: site.youtubeVideoLinks,
      });
      setVideoLinks(result.curatedVideoLinks);
      setIsLoading(false);
    };

    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [site.id]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-44 w-full rounded-lg" />
        <Skeleton className="h-44 w-full rounded-lg" />
      </div>
    );
  }

  if (videoLinks.length === 0) {
    return (
      <Card className="bg-secondary/30 dark:bg-card">
        <CardContent className="p-6">
          <p className="text-muted-foreground">No relevant videos found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {videoLinks.map((link) => {
        const videoId = getYouTubeVideoId(link);
        if (!videoId) return null;

        return (
          <div key={videoId} className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg border"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
