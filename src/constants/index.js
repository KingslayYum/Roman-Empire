import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "3D Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Lamp",
    modelPath: "./models/oil_lamp.glb",
  },
  {
    name: "Helmet",
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    name: "Vase",
    modelPath: "./models/vase.glb",
  },
  {
    name: "Lamp",
    modelPath: "./models/oil_lamp.glb",
  },
  {
    name: "Helmet",
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    name: "Vase",
    modelPath: "./models/vase.glb",
  },
  {
    name: "Lamp",
    modelPath: "./models/oil_lamp.glb",
  },
  {
    name: "Helmet",
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    name: "Vase",
    modelPath: "./models/vase.glb",
  },
  {
    name: "Helmet",
    modelPath: "./models/warrior_helmet.glb",
  },
  {
    name: "Vase",
    modelPath: "./models/vase.glb",
  },
];

const influences = [
  {
    title: "Law & Governance",
    content:
      "Roman legal principles, such as codified law and civic duty, form the foundation of many modern legal systems.",
    icon: "⚖️",
  },
  {
    title: "Architecture & Engineering",
    content:
      "The arch, dome, and aqueduct were Roman innovations that transformed the built environment forever.",
    icon: "🏛",
  },
  {
    title: "Language",
    content:
      "Latin, the Roman language, is the root of all Romance languages and influences academic and legal terms globally.",
    icon: "🗣️",
  },
  {
    title: "Art & Aesthetics",
    content:
      "Roman art emphasized realism and grandeur, influencing Renaissance and Neoclassical styles for centuries.",
    icon: "🎨",
  },
  {
    title: "Fashion & Textiles",
    content:
      "Garments like the toga and tunic defined Roman class and status, shaping ceremonial fashion today.",
    icon: "👘",
  },
  {
    title: "Military Structure",
    content:
      "The Roman Legion introduced ranks, formations, and discipline models that inspired modern militaries.",
    icon: "🛡️",
  },
]

const fashion = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Light and breezy outfits for the warm season",
    modelPath: "./models/vase.glb",
  },
  {
    id: 2,
    title: "Autumn Collection",
    description: "Light and breezy outfits for the warm season",
    modelPath: "./models/vase.glb",
  },
  {
    id: 3,
    title: "Winter Collection",
    description: "Light and breezy outfits for the warm season",
    modelPath: "./models/vase.glb",
  },
  // ... more items
]

const experiences = [
  {
    title: "Founding of Rome",
    company_name: "Palatine Hill, Rome",
    icon: starbucks,
    iconBg: "#383E56",
    date: "753 BC",
    points: [
      "Romulus and Remus, twin sons of Mars, are said to found Rome",
      "Romulus kills Remus and becomes the first king of Rome",
      "Rome is established as a monarchy",
    ],
  },
  {
    title: "Roman Kingdom Period",
    company_name: "Rome",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "753 – 509 BC",
    points: [
      "Ruled by a series of seven kings, both Latin and Etruscan",
      "Early institutions of religion, law, and government formed",
      "Final king Tarquin the Proud is overthrown for tyranny",
    ],
  },
  {
    title: "Establishment of the Roman Republic",
    company_name: "Rome",
    icon: shopify,
    iconBg: "#383E56",
    date: "509 BC",
    points: [
      "Monarchy replaced with elected consuls and a Senate",
      "First Roman laws (The Twelve Tables) established",
      "Expansion begins through conquest and alliances",
    ],
  },
  {
    title: "Sack of Rome by the Gauls",
    company_name: "Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "390 BC",
    points: [
      "Gauls under Brennus defeat Roman army at the Battle of the Allia",
      "Rome is captured and partially burned",
      "Romans pay ransom to leave and vow never to be vulnerable again",
    ],
  },
  {
    title: "The Punic Wars",
    company_name:
      "Western Mediterranean (Rome, Carthage, Sicily, Spain, North Africa)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "264 – 146 BC",
    points: [
      "First Punic War: Rome gains control of Sicily",
      "Second Punic War: Hannibal invades Italy but is defeated",
      "Third Punic War: Carthage is destroyed and annexed",
    ],
  },
  {
    title: "Conquests in the East and Gaul",
    company_name: "Greece, Asia Minor, Gaul",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "146 – 44 BC",
    points: [
      "Roman armies conquer Macedon and Greece",
      "Julius Caesar invades and subdues Gaul",
      "Rome becomes dominant power in the Mediterranean",
    ],
  },
  {
    title: "Assassination of Julius Caesar",
    company_name: "Rome, Senate House (Curia of Pompey)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "44 BC",
    points: [
      "Caesar declares himself dictator for life",
      "Conspirators, including Brutus and Cassius, assassinate him",
      "Sparks civil war and collapse of the Republic",
    ],
  },
  {
    title: "Rise of Augustus and the Roman Empire",
    company_name: "Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "27 BC",
    points: [
      "Octavian defeats rivals and becomes Augustus",
      "Senate grants him imperial powers and the title 'Princeps'",
      "Pax Romana (Peace of Rome) begins, lasting 200 years",
    ],
  },
  {
    title: "Great Fire and Reign of Nero",
    company_name: "Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "54 – 68 AD",
    points: [
      "Nero rules as last of the Julio-Claudian emperors",
      "Great Fire of Rome devastates much of the city",
      "Christians blamed and persecuted under Nero",
    ],
  },
  {
    title: "Destruction of the Second Temple",
    company_name: "Jerusalem",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "70 AD",
    points: [
      "Jewish rebellion crushed by Roman legions",
      "Second Temple is destroyed by Titus",
      "Marks the beginning of the Jewish diaspora",
    ],
  },
  {
    title: "Peak of Roman Power under Trajan",
    company_name: "Rome and provinces (Dacia, Mesopotamia)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "117 AD",
    points: [
      "Empire reaches greatest territorial extent",
      "Trajan’s victories in Dacia and the East celebrated with monuments",
      "Rome rules over 60 million people across three continents",
    ],
  },
  {
    title: "Crisis of the Third Century",
    company_name: "Entire Roman Empire",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "235 – 284 AD",
    points: [
      "Frequent civil wars and rapid turnover of emperors",
      "Economic collapse and external invasions",
      "Brief division of empire into Gallic and Palmyrene states",
    ],
  },
  {
    title: "Diocletian’s Reforms",
    company_name: "Rome and Nicomedia (Eastern capital)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "284 – 305 AD",
    points: [
      "Tetrarchy introduced to share imperial power",
      "Administrative and military reforms stabilize the empire",
      "Harsh persecutions of Christians under his rule",
    ],
  },
  {
    title: "Constantine and the Rise of Christianity",
    company_name: "Milan, Constantinople, Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "306 – 337 AD",
    points: [
      "Constantine becomes sole emperor after civil war",
      "Edict of Milan legalizes Christianity in 313 AD",
      "Constantinople founded as new eastern capital",
    ],
  },
  {
    title: "Final Division of the Roman Empire",
    company_name: "Rome and Constantinople",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "395 AD",
    points: [
      "Theodosius I dies and leaves empire to his two sons",
      "Empire split permanently into Western and Eastern halves",
      "Western capital eventually moves to Ravenna",
    ],
  },
  {
    title: "Sack of Rome by the Visigoths",
    company_name: "Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "410 AD",
    points: [
      "Visigoths under Alaric sack the city",
      "Marks first time Rome had been taken in 800 years",
      "Psychological blow to Roman prestige",
    ],
  },
  {
    title: "Fall of the Western Roman Empire",
    company_name: "Ravenna, Rome",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "476 AD",
    points: [
      "Germanic general Odoacer deposes Romulus Augustulus",
      "No new Western emperor is appointed",
      "Eastern Roman (Byzantine) Empire continues in the East",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, influences, fashion, experiences, testimonials, projects };
