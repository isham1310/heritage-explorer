import Link from "next/link";
import Image from "next/image";
import type { HeritageSite } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin } from "lucide-react";

interface SiteCardProps {
  site: HeritageSite;
}

export function SiteCard({ site }: SiteCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === site.heroImageId);

  return (
    <Link href={`/sites/${site.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-2xl mb-2">{site.name}</CardTitle>
          <CardDescription className="line-clamp-3">
            {site.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{site.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
