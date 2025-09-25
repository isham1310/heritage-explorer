
"use client";

import { useState, useEffect } from "react";
import { SiteCard } from "@/components/site-card";
import { heritageSites } from "@/lib/sites-data";
import { Input } from "@/components/ui/input";
import type { HeritageSite } from "@/types";
import { Search, Camera } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisualIdentifier } from "@/components/visual-identifier";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSites, setFilteredSites] = useState<HeritageSite[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const results = heritageSites.filter((site) =>
        site.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSites(results);
    } else {
      setFilteredSites([]);
    }
  }, [searchTerm]);

  const displaySites = searchTerm.trim() !== "" || showRecommendations;

  return (
    <>
      <section className="w-full py-20 md:py-32 flex items-center justify-center text-center">
        <div className="p-4 space-y-6 container">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Uncover Jharkhand's <span className="text-primary">Hidden Gems</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal guide to exploring the rich history and culture of
            Jharkhand's iconic landmarks.
          </p>
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a fort or temple..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-lg p-6 pl-12 pr-20 rounded-full shadow-lg bg-card text-card-foreground border-transparent focus-visible:ring-primary"
              suppressHydrationWarning
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary"
                >
                  <Camera className="h-5 w-5" />
                  <span className="sr-only">Identify from image</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Visual Identifier</DialogTitle>
                </DialogHeader>
                <div className="pt-4">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Have a photo of a landmark? Upload it or use your camera to let
                    our AI identify it for you.
                  </p>
                  <VisualIdentifier />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {!displaySites && (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4">Our Recommendations</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to explore? Click the button below to reveal our curated list of must-visit heritage sites across Jharkhand.
            </p>
            <Button
              size="lg"
              onClick={() => setShowRecommendations(true)}
              className="shadow-lg transform hover:scale-105 transition-transform"
            >
              Show Recommendations
            </Button>
          </div>
        )}

        {displaySites && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center mb-10">
              {searchTerm.trim() !== ""
                ? `Results for "${searchTerm}"`
                : "Recommended Sites"}
            </h2>
            {searchTerm.trim() !== "" ? (
              filteredSites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSites.map((site) => (
                    <SiteCard key={site.id} site={site} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    I couldn't find any sites matching your search. Try another name.
                  </p>
                </div>
              )
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in-50 duration-500">
                {heritageSites.map((site) => (
                  <SiteCard key={site.id} site={site} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
