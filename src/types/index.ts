export type Waypoint = {
  title: string;
  description: string;
  imageId: string;
};

export type HeritageSite = {
  id: string;
  name: string;
  location: string;
  culture: string;
  heroImageId: string;
  description: string;
  historicalContext: string;
  architecturalSignificance: string;
  notableEvents: string[];
  notableFigures: string[];
  youtubeVideoLinks: string[];
  waypoints: Waypoint[];
};
