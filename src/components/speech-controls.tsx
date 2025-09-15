"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Square, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SpeechControlsProps {
  textToSpeak: string;
}

export function SpeechControls({ textToSpeak }: SpeechControlsProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
        const defaultVoice = availableVoices.find(v => v.lang.startsWith('en') && v.default);
        setSelectedVoice(defaultVoice ? defaultVoice.name : availableVoices[0].name);
        setIsLoadingVoices(false);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    // Cleanup
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handlePlay = () => {
    if (isSpeaking && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
      <div className="flex items-center gap-2">
        <Button onClick={handlePlay} disabled={isSpeaking && !isPaused} size="icon" aria-label="Play">
          <Play className="h-5 w-5" />
        </Button>
        <Button onClick={handlePause} disabled={!isSpeaking || isPaused} size="icon" aria-label="Pause">
          <Pause className="h-5 w-5" />
        </Button>
        <Button onClick={handleStop} disabled={!isSpeaking} size="icon" aria-label="Stop">
          <Square className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 w-full space-y-2">
        <Label htmlFor="voice-select">Narrator Voice</Label>
        {isLoadingVoices ? (
          <Button variant="outline" className="w-full justify-start" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading Voices...
          </Button>
        ) : (
          <Select
            value={selectedVoice || ""}
            onValueChange={setSelectedVoice}
            disabled={isSpeaking}
          >
            <SelectTrigger id="voice-select" className="w-full">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
}
