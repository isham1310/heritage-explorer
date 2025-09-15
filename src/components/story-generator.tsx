"use client";

import { useState } from "react";
import type { HeritageSite } from "@/types";
import { handleGenerateNarrative } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { SpeechControls } from "./speech-controls";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface StoryGeneratorProps {
  site: HeritageSite;
}

export function StoryGenerator({ site }: StoryGeneratorProps) {
  const [tone, setTone] = useState("formal");
  const [style, setStyle] = useState("historical");
  const [narrative, setNarrative] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setNarrative("");
    const result = await handleGenerateNarrative({
      siteName: site.name,
      historicalContext: site.historicalContext,
      architecturalSignificance: site.architecturalSignificance,
      notableEvents: site.notableEvents.join(", "),
      notableFigures: site.notableFigures.join(", "),
      culture: site.culture,
      tone,
      style,
    });
    setNarrative(result.narrativeScript);
    setIsLoading(false);
  };

  return (
    <Card className="bg-secondary/30 dark:bg-card">
      <CardHeader>
        <CardTitle className="font-headline">Narrative Controls</CardTitle>
        <CardDescription>
          Customize the story's tone and style to your liking.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tone-select">Tone</Label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger id="tone-select">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="informal">Informal</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="style-select">Style</Label>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger id="style-select">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="historical">Historical</SelectItem>
                <SelectItem value="adventurous">Adventurous</SelectItem>
                <SelectItem value="mysterious">Mysterious</SelectItem>
                <SelectItem value="poetic">Poetic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full">
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {isLoading ? "Generating..." : "Generate Story"}
          </Button>
        </div>
      </CardContent>
      {(isLoading || narrative) && (
        <CardFooter className="flex-col items-start">
          <Separator className="my-4" />
          {isLoading && (
            <div className="w-full space-y-2">
              <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
            </div>
          )}
          {narrative && (
            <div className="w-full space-y-4">
              <SpeechControls textToSpeak={narrative} />
              <ScrollArea className="h-60 w-full rounded-md border p-4 bg-background">
                <p className="whitespace-pre-wrap leading-relaxed">
                  {narrative}
                </p>
              </ScrollArea>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
