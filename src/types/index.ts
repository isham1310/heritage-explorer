export type Waypoint = {
  title: string;
  description: string;
  imageId: string;
};

export type Hotel = {
  name: string;
  distance: string;
}

export type LocalVendor = {
  name: string;
  specialty: string;
}

export type HeritageSite = {
  id: string;
  name: string;
  location: string;
  culture: {
    name: string;
    description: string;
  };
  heroImageId: string;
  description: string;
  historicalContext: string;
  architecturalSignificance: string;
  builder: string;
  famousRuler: string;
  majorBattles: string[];
  notableEvents: string[];
  notableFigures: string[];
  youtubeVideoLinks: {
    vlog: string;
    guide: string;
  };
  waypoints: Waypoint[];
  hotels: Hotel[];
  localVendors: LocalVendor[];
  bookingLink: string;
};
