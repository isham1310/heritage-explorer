import Link from "next/link";
import { Landmark } from "lucide-react";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Landmark className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Jharkhand Tourism Explorer
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm">
            About
          </Button>
        </div>
      </div>
    </header>
  );
}
