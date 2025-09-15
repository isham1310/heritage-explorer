import { SiteCard } from "@/components/site-card";
import { heritageSites } from "@/lib/sites-data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">
          Explore Maharashtra's Heritage
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select a site to begin your journey and uncover the stories woven into
          history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heritageSites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}
