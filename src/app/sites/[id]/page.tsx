import Image from "next/image";
import { notFound } from "next/navigation";
import { heritageSites } from "@/lib/sites-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import { StoryGenerator } from "@/components/story-generator";
import { WaypointGuide } from "@/components/waypoint-guide";
import { VideoCurator } from "@/components/video-curator";
import { FeedbackForm } from "@/components/feedback-form";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Camera, Film, Users } from "lucide-react";

export async function generateStaticParams() {
  return heritageSites.map((site) => ({
    id: site.id,
  }));
}

export default function SitePage({ params }: { params: { id: string } }) {
  const site = heritageSites.find((s) => s.id === params.id);

  if (!site) {
    notFound();
  }

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === site.heroImageId
  );

  return (
    <article>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <Badge className="mb-2">{site.culture}</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground drop-shadow-lg">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground drop-shadow-md max-w-2xl">
            {site.location}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left/Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* AI Storyteller */}
            <section aria-labelledby="story-title">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2
                  id="story-title"
                  className="text-3xl font-bold"
                >
                  The Story Unfolds
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-prose">
                Let our AI-powered narrator guide you through the ages. Select a
                tone and style to create a unique story, then listen as history
                is brought to life.
              </p>
              <StoryGenerator site={site} />
            </section>

            <Separator />

            {/* Waypoint Guide */}
            <section aria-labelledby="guide-title">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h2
                  id="guide-title"
                  className="text-3xl font-bold"
                >
                  Sequential Guide
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-prose">
                Explore the site's key points of interest in a curated order.
                Each stop reveals another layer of its fascinating past.
              </p>
              <WaypointGuide waypoints={site.waypoints} />
            </section>
          </div>

          {/* Right/Sidebar Column */}
          <aside className="space-y-12">
            {/* Curated Videos */}
            <section aria-labelledby="videos-title">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <h2
                  id="videos-title"
                  className="text-2xl font-bold"
                >
                  Visual Journey
                </h2>
              </div>
              <VideoCurator site={site} />
            </section>
            
            <Separator />

            {/* Feedback */}
            <section aria-labelledby="feedback-title">
               <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2
                  id="feedback-title"
                  className="text-2xl font-bold"
                >
                  Share Your Experience
                </h2>
              </div>
              <FeedbackForm />
            </section>
          </aside>
        </div>
      </div>
    </article>
  );
}
