import type { HeritageSite } from "@/types";

export const heritageSites: HeritageSite[] = [
  {
    id: "palamu-fort",
    name: "Palamu Fort",
    location: "Palamu, Jharkhand, India",
    culture: {
      name: "Chero Dynasty",
      description: "The local culture is deeply influenced by the Chero and tribal traditions. Folk songs and dances often narrate the tales of the kings and the fort. Local cuisine includes dishes like Dhuska, Litti Chokha, and various preparations of rice."
    },
    heroImageId: "palamu-fort-hero",
    description:
      "The Palamu Forts are two ruined forts located deep in the forests of Palamu, Jharkhand. The old fort was built by the Chero king, Medini Ray, and the new fort was constructed by his son, Pratap Ray.",
    historicalContext:
      "The history of the Palamu Forts is deeply connected to the Chero dynasty. The old fort, a formidable structure, was built by King Medini Ray, the most famous ruler of the Chero dynasty, who ruled for 13 years from 1662 to 1674. His rule extended to areas in south Gaya and Hazaribagh. The new fort was built by his son, Pratap Ray. The Cheros were defeated by the Mughals, and later the forts came under the control of the British.",
    architecturalSignificance:
      "The forts are an example of Indo-Islamic architecture. The new fort is built on a hill and is larger, with several gates and defensive walls. The Nagpuri gate is a key feature, noted for its intricate carvings. The forts were built using local materials like stone and lime mortar.",
    builder: "Medini Ray (Old Fort), Pratap Ray (New Fort)",
    famousRuler: "Medini Ray",
    majorBattles: ["Battle against the Mughals led by Daud Khan in 1660"],
    notableEvents: [
      "Construction of the old fort by Medini Ray.",
      "Construction of the new fort by Pratap Ray.",
      "Mughal invasion and capture of the forts.",
    ],
    notableFigures: ["Medini Ray", "Pratap Ray", "Daud Khan"],
    youtubeVideoLinks: {
      vlog: "https://www.youtube.com/watch?v=Fk_n9m2zt0A",
      guide: "https://www.youtube.com/watch?v=s5c-y5bXoXU",
    },
    waypoints: [
      {
        title: "Old Palamu Fort",
        description:
          "Built by Medini Ray, this fort stands on a lower plain and has a more weathered appearance. It houses the remains of barracks and administrative buildings.",
        imageId: "palamu-fort-old",
      },
      {
        title: "New Palamu Fort",
        description:
          "Constructed by Pratap Ray on a higher elevation, this fort offers a strategic advantage and panoramic views of the surrounding forest. Its walls and gates are better preserved.",
        imageId: "palamu-fort-new",
      },
      {
        title: "Nagpuri Gate",
        description:
          "The main entrance to the new fort, the Nagpuri Gate, is an imposing structure with fine architectural details, reflecting the artistic sensibilities of the Chero rulers.",
        imageId: "palamu-fort-gate",
      },
    ],
    hotels: [
      {
        name: "Hotel LX International",
        distance: "Approx. 25 km from the fort"
      },
      {
        name: "Chiyanki Tourist Complex",
        distance: "Approx. 20 km from the fort"
      }
    ],
    localVendors: [
      {
        name: "Local artisans near Betla National Park",
        specialty: "Bamboo crafts and tribal jewelry"
      },
      {
        name: "Weekly markets (haats)",
        specialty: "Fresh local produce and traditional snacks"
      }
    ],
    bookingLink: "https://isham1310.github.io/nethrat-hill-station-/",
  },
];
