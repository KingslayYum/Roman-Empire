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
    id: "influence",
    title: "Influence",
  },
  {
    id: "history",
    title: "History",
  },
  {
    id: "map",
    title: "Map",
  },
  {
    id: "fashion",
    title: "Fashion",
  },
  {
    id: "exhibition",
    title: "Exhibition",
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
    title: "Roman Law and Legal Systems",
    content:
      "The Roman Empire developed one of the most sophisticated legal systems in ancient history, including concepts like innocent until proven guilty, legal contracts, and civil rights. Many modern legal codes — especially in Europe and Latin America — are based on Roman law principles codified in the Corpus Juris Civilis under Emperor Justinian. Even today, legal professionals study Roman law as a foundation for understanding civil procedures and rights.",
    icon: "⚖️",
  },
  {
    title: "Architecture and Engineering",
    content:
      "Roman innovations in architecture and engineering, such as the arch, vault, dome, and concrete, laid the groundwork for modern construction. The use of aqueducts for transporting water and road networks for transportation inspired modern urban planning and infrastructure. Iconic structures like the Colosseum and Pantheon influence modern stadiums, courthouses, and government buildings.",
    icon: "🏛",
  },
  {
    title: "Language and Writing",
    content:
      "Latin, the language of the Romans, is the root of the Romance languages — including Italian, French, Spanish, Portuguese, and Romanian. Latin also heavily influenced English vocabulary, especially in science, medicine, law, and academia. Additionally, the Roman alphabet (Latin script) remains the most widely used writing system in the world.",
    icon: "🗣️",
  },
  {
    title: "Government and Republicanism",
    content:
      "Although Rome transitioned into an empire, its earlier Republican model — with a Senate, checks and balances, and elected magistrates — deeply influenced modern democracies. The U.S. Constitution, in particular, draws inspiration from Roman political structure, emphasizing separation of powers, term limits, and civic duty.",
    icon: "🎨",
  },
  {
    title: "Urban Planning and Public Services",
    content:
      "Romans were pioneers in city planning, creating grid-based layouts, centralized forums, and public amenities such as baths, theaters, and sewage systems. Their emphasis on public health, sanitation, and organized urban life echoes in the design of contemporary cities and public health infrastructure.",
    icon: "👘",
  },
  {
    title: "Calendar and Timekeeping",
    content:
      "The Julian calendar, introduced by Julius Caesar, is the direct predecessor of the Gregorian calendar we use today. Concepts such as the 365-day year, 12-month cycle, and leap years were Roman contributions. Even the names of the months (e.g., March, July, August) and the idea of structured timekeeping trace back to Rome’s influence.",

  },
]

const fashion = [
  {
    id: 1,
    title: "Toga",
    who: "Roman male citizens (especially statesmen, senators).",
    description: "A large, semicircular draped garment, wrapped around the body and worn over a tunic. Considered the most formal and distinctly Roman attire.",
    fabric: "Heavy wool, up to 6 meters long, Required skill to drape properly",
    use: "Reserved for citizenship ceremonies, court appearances, funerals, and political lifeDifferent styles and colors conveyed different meanings:Toga virilis (plain white) – worn by adult male citizensToga praetexta (purple border) – senators and magistratesToga picta (gold embroidery) – generals in triumphsToga pulla (dark) – mourningToga candida (bright white) – political candidates",
    status: "Symbol of Roman citizenship, Only freeborn Roman men could legally wear it. A sign of dignity, prestige, and legal rights",
    modelPath: "./models/toga.glb",
  },
  {
    id: 2,
    title: "Tunic",
    who: "Common Roman citizens",
    description: "A simple, knee- or ankle-length garment, worn by all classes and genders. Tunics were the most common base layer of clothing in ancient Rome.",
    fabric: "Wool (most common), Linen (for warmer climates), Cotton or imported silk (very rare and expensive)",
    use: "Worn under togas, armor, or alone for commoners. Military tunics were shorter for mobility. Children and slaves wore plain versions, while free Roman citizens could wear decorated or dyed versions.",
    status: "White tunic = free male citizen Purple stripe (clavus) = senator or high-ranking official Coarse wool = slaves and laborers Ornamented embroidery = wealth and high social class",
    modelPath: "./models/tunic.glb",
  },
  {
    id: 3,
    title: "Dalmatica",
    who: "Late Roman elite men and women.",
    description: "A long, wide-sleeved tunic that became more common in the later Roman Empire. Often worn over the standard tunic.",
    fabric: "Rich dyed wool or linen, Embellished with geometric embroidery or woven patterns (clavi and orbiculi)",
    use: "Adopted more widely in the 3rd–4th century AD. A sign of formality or elite fashion. Both men and women wore versions of the dalmatica.",
    status: "Embroidered or colored dalmatica = worn by the elite, Plain versions = worn by lower-ranking citizens. Eventually adopted into Christian clerical dress",
    modelPath: "./models/dalmatica.glb",
  },
  {
    id: 4,
    title: "Lorica",
    who: "Roman soldiers and officers",
    description: "The military cuirass or armor, worn over a tunic. 'Lorica' could refer to multiple types of Roman armor: Lorica Segmentata (banded metal plates), Lorica Hamata (chainmail), Lorica Squamata (scale armor)",
    fabric: "Iron or bronze plates, leather straps, and linen undergarments. Wool tunic typically worn beneath for comfort and sweat absorption",
    use: "Signified active military duty. Highly functional, designed for mobility, defense, and intimidation",
    status: "Exclusively worn by soldiers and officers Higher-ranking officers had decorated versions with crests and embossed imagery. A symbol of honor, discipline, and Roman strength",
    modelPath: "./models/lorica.glb",
  },
  {
    id: 5,
    title: "Stola",
    who: "Respectable married Roman women.",
    description: "A long, draped dress worn by Roman women, especially married citizens. It covered the tunic and fell to the feet.",
    fabric: "Fine wool or linen. Richer women used silk, cotton, or dyed fabrics. Often belted under the bust (Empire style) and over the waist",
    use: "The official garment of the Roman matron (married woman). Symbolized modesty, respectability, and virtue",
    status: "Only worn by freeborn married women. Wealthy women used dyed fabrics (e.g., saffron or purple) and gold-thread embroidery. Slaves or prostitutes were forbidden from wearing the stola",
    modelPath: "./models/stola.glb",
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
    image: "./history/1.jpg",
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
    image: "./history/2.jpg",
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
    image: "./history/3.avif",
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
    image: "./history/4.avif",
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
    image: "./history/5.avif",
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
    image: "./history/6.jpg",
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
    image: "./history/7.jpg",
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
    image: "./history/8.jpg",
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
    image: "./history/9.webp",
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
    image: "./history/10.jpg",
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
    image: "./history/11.jpg",
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
    image: "./history/12.png",
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
    image: "./history/13.jpg",
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
    image: "./history/14.webp",
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
    image: "./history/15.jpg",
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
    image: "./history/16.avif",
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
    image: "./history/17.avif",
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
