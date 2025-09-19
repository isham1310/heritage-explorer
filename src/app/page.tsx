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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Welcome to Heritage Narrator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the rich history and culture of iconic landmarks. What would you like to explore today?
        </p>
      </div>

      <div className="relative max-w-lg mx-auto mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for a fort or temple..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-lg p-6 pl-12 pr-20 rounded-full"
          suppressHydrationWarning
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
      )}
    </div>
  );
}
