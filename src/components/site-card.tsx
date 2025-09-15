import Link from "next/link";
import Image from "next/image";
import type { HeritageSite } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface SiteCardProps {
  site: HeritageSite;
}

export function SiteCard({ site }: SiteCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === site.heroImageId);

  return (
    <Link href={`/sites/${site.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 bg-secondary/30 dark:bg-card">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Badge variant="default" className="bg-accent text-accent-foreground">{site.culture}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="font-headline text-2xl mb-2">{site.name}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{site.location}</span>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
