import type { HeritageSite } from "@/types";

export const heritageSites: HeritageSite[] = [
  {
    id: "colosseum",
    name: "The Colosseum",
    location: "Rome, Italy",
    culture: "Roman",
    heroImageId: "colosseum-hero",
    description:
      "An oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.",
    historicalContext:
      "Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre of the Roman Empire. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus.",
    architecturalSignificance:
      "The Colosseum could hold an estimated 50,000 to 80,000 spectators at various points in its history, having an average audience of some 65,000; it was used for gladiatorial contests and public spectacles such as mock sea battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Roman mythology.",
    notableEvents: [
      "Inaugural games in AD 80, which lasted for 100 days.",
      "Martyrdom of early Christians, according to church tradition.",
      "Last recorded gladiatorial fights in 435.",
    ],
    notableFigures: ["Emperor Vespasian", "Emperor Titus", "Commodus"],
    youtubeVideoLinks: [
      "https://www.youtube.com/watch?v=dY_3ggKg0Bc",
      "https://www.youtube.com/watch?v=a1_220I2-MA",
      "https://www.youtube.com/watch?v=plDkpe_F6-8",
      "https://www.youtube.com/watch?v=K5M5g-xT_YI",
      "https://www.youtube.com/watch?v=sOcyCah7n-A"
    ],
    waypoints: [
      {
        title: "The Exterior Facade",
        description:
          "Marvel at the three-tiered arcade, adorned with columns of Doric, Ionic, and Corinthian orders. Imagine the 80 entrances that allowed tens of thousands of citizens to flood into the arena.",
        imageId: "colosseum-waypoint-1",
      },
      {
        title: "The Arena Floor and Hypogeum",
        description:
          "Look down upon the arena floor, once covered in sand to soak up the blood of combatants. Below lies the Hypogeum, a complex network of tunnels and chambers where gladiators and animals were held before contests.",
        imageId: "colosseum-waypoint-2",
      },
      {
        title: "The World of the Gladiator",
        description:
          "Gladiators were the superstars of their day. They were slaves, criminals, or prisoners of war, trained in special schools to fight to the death for the entertainment of the masses. Their lives were brutal and often short, but a successful gladiator could win fame and fortune.",
        imageId: "colosseum-waypoint-3",
      },
    ],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    culture: "Inca",
    heroImageId: "machu-picchu-hero",
    description:
      "A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco.",
    historicalContext:
      "Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization.",
    architecturalSignificance:
      "The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish conquest. The site's buildings use the classical Inca architectural style of polished dry-stone walls of regular shape. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Room of the Three Windows.",
    notableEvents: [
      "Construction around 1450.",
      "Abandonment around 1572.",
      "Brought to international attention by Hiram Bingham in 1911.",
    ],
    notableFigures: ["Pachacuti", "Hiram Bingham III"],
    youtubeVideoLinks: [
      "https://www.youtube.com/watch?v=cnMa-Sm9H4k",
      "https://www.youtube.com/watch?v=Zk9g30Gz_x8",
      "https://www.youtube.com/watch?v=P2Yy_56M_4s",
      "https://www.youtube.com/watch?v=1dF8a2Y7dI0"
    ],
    waypoints: [
      {
        title: "The Intihuatana Stone",
        description:
          "This mysterious carved rock is believed to have been an astronomical clock or calendar by the Inca. Its name translates to 'Hitching Post of the Sun', and it aligns with the sun's position during the solstices.",
        imageId: "machu-picchu-waypoint-1",
      },
      {
        title: "Agricultural Terraces",
        description:
          "The steep mountainsides were tamed by the Inca with extensive terracing. These terraces were not only for growing crops like maize and potatoes but also helped prevent soil erosion and landslides.",
        imageId: "machu-picchu-waypoint-2",
      },
      {
        title: "Temple of the Sun",
        description:
          "This semi-circular temple is a masterpiece of stonework, built around a large granite rock. Its windows align perfectly with the rising sun during the summer and winter solstices, showcasing the Incas' advanced astronomical knowledge.",
        imageId: "machu-picchu-waypoint-3",
      },
    ],
  },
  {
    id: "petra",
    name: "Petra",
    location: "Ma'an Governorate, Jordan",
    culture: "Nabataean",
    heroImageId: "petra-hero",
    description:
      "A historic and archaeological city in southern Jordan. Petra is famous for its rock-cut architecture and water conduit system. Another name for Petra is the Rose City due to the color of the stone from which it is carved.",
    historicalContext:
      "Established possibly as early as 312 BC as the capital city of the Arab Nabataeans, it is a symbol of Jordan, as well as its most-visited tourist attraction. The Nabataeans were nomadic Arabs who benefited from the proximity of Petra to the incense trade routes by establishing it as a major regional trading hub.",
    architecturalSignificance:
      "The city is famous for its architecture carved directly into the vibrant red, white, pink, and sandstone cliff faces. The most famous structure is Al-Khazneh (The Treasury), believed to be the mausoleum of Nabataean King Aretas IV.",
    notableEvents: [
      "Established as Nabataean capital.",
      "Annexation by the Roman Empire in AD 106.",
      "Rediscovered by Swiss explorer Johann Ludwig Burckhardt in 1812.",
    ],
    notableFigures: ["King Aretas IV", "Johann Ludwig Burckhardt"],
    youtubeVideoLinks: [
      "https://www.youtube.com/watch?v=l_gD923pS7c",
      "https://www.youtube.com/watch?v=JyK4g67yC4E",
      "https://www.youtube.com/watch?v=aZa_321aW2I",
      "https://www.youtube.com/watch?v=xP-iA4GgVts"
    ],
    waypoints: [
      {
        title: "The Siq",
        description:
          "Your journey begins through the Siq, a narrow, winding canyon over a kilometer long. The towering cliffs on either side create a dramatic entrance, building anticipation for the city hidden within.",
        imageId: "petra-waypoint-1",
      },
      {
        title: "The Treasury (Al-Khazneh)",
        description:
          "As you exit the Siq, you are greeted by the breathtaking facade of the Treasury. This ornate, 40-meter-high structure, intricately carved with columns and figures, was not a treasury but likely a royal tomb.",
        imageId: "petra-hero",
      },
      {
        title: "The Monastery (Ad-Deir)",
        description:
          "After a hike up 800 steps, you'll reach the Monastery. Even larger than the Treasury, its remote location and commanding views make it one of Petra's most rewarding sights. It was likely used for religious gatherings.",
        imageId: "petra-waypoint-2",
      },
    ],
  },
];
