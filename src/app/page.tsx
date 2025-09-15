"use client";

import { useState, useEffect } from "react";
import { SiteCard } from "@/components/site-card";
import { heritageSites } from "@/lib/sites-data";
import { Input } from "@/components/ui/input";
import type { HeritageSite } from "@/types";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSites, setFilteredSites] = useState<HeritageSite[]>(heritageSites);

  useEffect(() => {
    const results = heritageSites.filter((site) =>
      site.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSites(results);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">
          Explore Maharashtra's Heritage
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Search for a site or select one to begin your journey and uncover the
          stories woven into history.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-12">
        <Input
          type="text"
          placeholder="Search for a heritage site..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-lg p-6"
        />
      </div>

      {filteredSites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            No sites found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
