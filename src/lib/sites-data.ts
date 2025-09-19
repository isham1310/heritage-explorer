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
  {
    id: "netarhat",
    name: "Netarhat",
    location: "Netarhat, Latehar district, Jharkhand",
    culture: {
      name: "Jharkhandi Tribal Culture",
      description: "Experience local Jharkhandi culture by exploring the local market, enjoying the cuisine, and interacting with the local tribal communities. The area has a rich heritage of folk music and dance."
    },
    heroImageId: "netarhat-hero",
    description: "Known as the 'Queen of Chotanagpur,' Netarhat is Jharkhand's most famous hill station, celebrated for its stunning sunrises, waterfalls, and verdant landscapes.",
    historicalContext: "Netarhat was a favorite retreat for British officers during the colonial era, and remnants of that time, like the 'Laat Saheb Bungalow' near Lodh Waterfalls, can still be seen. A prominent local legend is the tragic love story of Magnolia, a British girl, and a local shepherd, commemorated at Magnolia Point.",
    architecturalSignificance: "The area features a blend of natural wonders and man-made structures. Key architectural points include the Netarhat Residential School, an esteemed government institution, and the Netarhat Dam, which is crucial for the town's water supply and serves as a scenic picnic spot.",
    builder: "Various, including the Government of Jharkhand",
    famousRuler: "N/A (British colonial influence)",
    majorBattles: [],
    notableEvents: ["Establishment as a hill station by the British.", "The tragic story of Magnolia at the sunset point."],
    notableFigures: ["Magnolia"],
    youtubeVideoLinks: {
      vlog: "https://www.youtube.com/watch?v=1pA9tGv48vU",
      guide: "https://www.youtube.com/watch?v=N6CKg2Yp8JA",
    },
    waypoints: [
      {
        title: "Netarhat Sunrise Point",
        description: "Located at the highest point of the Netarhat region, this spot offers a mesmerizing and unforgettable sunrise view over the Chotanagpur Plateau.",
        imageId: "netarhat-sunrise",
      },
      {
        title: "Magnolia View Point (Sunset Point)",
        description: "Situated 10 km from Netarhat, this point is famous for its breathtaking sunsets and the poignant love story of a British girl named Magnolia who ended her life here.",
        imageId: "netarhat-magnolia-point",
      },
      {
        title: "Lower Ghaghri Waterfalls",
        description: "A spectacular waterfall cascading from a height of 98 meters, making it the 33rd-highest in India. It's surrounded by dense jungle and requires a short trek to reach.",
        imageId: "netarhat-lower-ghaghri",
      },
      {
        title: "Lodh Waterfalls",
        description: "The highest waterfall in Jharkhand, plunging from about 468 feet. It was a favorite winter spot for the British and is located 61 km from Netarhat.",
        imageId: "netarhat-lodh-falls",
      }
    ],
    hotels: [
      {
        name: "Prabhat Vihar (Hotel Jharkhand Tourism)",
        distance: "Located at Sunrise Point"
      },
      {
        name: "Hotel Sunrise",
        distance: "Near Netarhat Bus Stand"
      },
      {
        name: "Lake View Resort",
        distance: "Near Netarhat Dam"
      }
    ],
    localVendors: [
      {
        name: "Netarhat Local Market",
        specialty: "Local handicrafts, fresh produce, and Jharkhandi cuisine."
      },
      {
        name: "Pear Garden Vendors",
        specialty: "Fresh pears and local fruits (seasonal)."
      }
    ],
    bookingLink: "https://isham1310.github.io/nethrat-hill-station-/"
  }
];
