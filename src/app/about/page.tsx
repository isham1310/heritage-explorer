
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Camera, BookOpen, Map } from 'lucide-react';

export default function AboutPage() {
  const searchImage = PlaceHolderImages.find((img) => img.id === 'about-search');
  const identifyImage = PlaceHolderImages.find((img) => img.id === 'about-identify');
  const storyImage = PlaceHolderImages.find((img) => img.id === 'about-story');
  const waypointImage = PlaceHolderImages.find((img) => img.id === 'about-waypoints');

  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Discover Your Next Adventure',
      description: 'Use the search bar on the home page to instantly find heritage sites by name. Or, click the "Show Recommendations" button to see our curated list of must-visit locations.',
      image: searchImage,
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: 'Identify Landmarks with a Snap',
      description: 'Have a photo of a landmark? Click the camera icon in the search bar. You can upload a photo or use your device\'s camera, and our AI will identify the site for you.',
      image: identifyImage,
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Listen to Stories from the Past',
      description: 'On each site page, you\'ll find the AI Storyteller. Choose a tone and style, and our AI will generate a unique narrative. You can read it or listen to it with the built-in text-to-speech.',
      image: storyImage,
    },
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: 'Explore Step-by-Step',
      description: 'Follow the Sequential Guide to explore key points of interest at each site. Each waypoint includes a description and a photo to guide you on your journey.',
      image: waypointImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          How to Use <span className="text-primary">Heritage Explorer</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your journey into Jharkhand's rich history is just a few clicks away. Here’s how to make the most of your adventure.
        </p>
      </div>

      <div className="grid gap-16">
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-4 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  {feature.icon}
              </div>
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {feature.image && (
              <Card className="overflow-hidden shadow-lg border-transparent bg-card/50">
                <CardContent className="p-0">
                    <div className="relative h-80 w-full">
                    <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        fill
                        className="object-contain"
                        data-ai-hint={feature.image.imageHint}
                    />
                    </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
