import Image from "next/image";
import type { Waypoint } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "./ui/card";

interface WaypointGuideProps {
  waypoints: Waypoint[];
}

export function WaypointGuide({ waypoints }: WaypointGuideProps) {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
      {waypoints.map((waypoint, index) => {
        const image = PlaceHolderImages.find(
          (img) => img.id === waypoint.imageId
        );
        return (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="border-b-0 mb-4"
          >
            <Card className="overflow-hidden bg-secondary/30 dark:bg-card">
              <AccordionTrigger className="p-6 text-lg font-headline hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  {waypoint.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {waypoint.description}
                    </p>
                  </div>
                  {image && (
                    <div className="relative aspect-video w-full rounded-md overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
