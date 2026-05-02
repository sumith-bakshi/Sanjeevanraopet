import {
  BookOpen,
  Bus,
  Church,
  GraduationCap,
  HeartPulse,
  Landmark,
  MapPin,
} from "lucide-react";
import { MdTempleHindu } from "react-icons/md"; 
import villageGreenFields from "../assets/images/village_green_fileds.jpeg";
import villageRoad from "../assets/images/village_road.jpeg";
import villagetemple from "../assets/images/village_temple.jpeg";
import galleryPlaceholderOne from "../assets/images/Village_1.jpeg";
import galleryPlaceholderTwo from "../assets/images/Village_2.jpeg";
import galleryPlaceholderThree from "../assets/images/Village_3.jpeg";

export const languages = {
  en: "English",
  te: "తెలుగు",
};

export const siteText = {
  en: {
    brandSubtitle: "Village Website",
    menuLabel: "Toggle navigation",
    languageLabel: "Choose language",
    heroLocation: "Narayankhed, Sangareddy, Telangana",
    heroTitle: "Sanjeevanraopet",
    heroDescription:
      "A welcoming village shaped by farming life, local traditions, quiet streets, and the warm everyday rhythm of rural Telangana.",
    exploreButton: "Explore Village",
    contactButton: "Contact Details",
    quickFactsLabel: "Village quick facts",
    aboutLabel: "About Village",
    aboutTitle: "Rooted in community, fields, and festival life",
    aboutLead:
      "Sanjeevanraopet is located near Narayankhed in Sangareddy district, Telangana 502286. The village reflects the calm strength of rural life, where agriculture, seasonal celebrations, family gatherings, and local worship places remain central to daily living.",
    aboutBody:
      "This website is designed as a simple digital home for residents, visitors, students, and families who want to learn about the village, find useful services, and discover important places nearby.",
    cultureTitle: "Culture Highlights",
    cultureItems: [
      "Traditional festivals and village gatherings",
      "Agricultural fields and seasonal rural work",
      "Local temples and community worship",
      "Telangana food, language, and family customs",
    ],
    galleryLabel: "Gallery",
    galleryTitle: "Village views and everyday moments",
    placesLabel: "Places",
    placesTitle: "Temples, gathering spots, and useful locations",
    facilitiesLabel: "Facilities",
    facilitiesTitle: "Services for residents and visitors",
    newsLabel: "News",
    newsTitle: "Announcements and editable updates",
    adminTitle: "Admin-editable content idea",
    adminBody:
      "Later, these announcements can be loaded from a simple Google Sheet, Firebase collection, or small admin form so village updates can be changed without editing code.",
    contactLabel: "Contact",
    contactTitle: "Reach Sanjeevanraopet",
    mapTitle: "Sanjeevanraopet location map",
    address: "Narayankhed, Sangareddy, Telangana 502286",
    footerLine:
      "Built for village information, culture, and services.",
  },
  te: {
    brandSubtitle: "గ్రామ వెబ్‌సైట్",
    menuLabel: "నావిగేషన్ మార్చండి",
    languageLabel: "భాష ఎంచుకోండి",
    heroLocation: "నారాయణఖేడ్, సంగారెడ్డి, తెలంగాణ",
    heroTitle: "సంజీవన్‌రావుపేట్",
    heroDescription:
      "వ్యవసాయ జీవనం, స్థానిక సంప్రదాయాలు, ప్రశాంతమైన వీధులు, తెలంగాణ గ్రామీణ జీవన సౌందర్యంతో నిలిచిన మన గ్రామం.",
    exploreButton: "గ్రామాన్ని చూడండి",
    contactButton: "సంప్రదింపు వివరాలు",
    quickFactsLabel: "గ్రామ ముఖ్య వివరాలు",
    aboutLabel: "గ్రామం గురించి",
    aboutTitle: "సమాజం, పంట పొలాలు, పండుగలతో ముడిపడిన జీవనం",
    aboutLead:
      "సంజీవన్‌రావుపేట్ తెలంగాణ రాష్ట్రంలోని సంగారెడ్డి జిల్లా నారాయణఖేడ్ సమీపంలో ఉంది. పిన్ కోడ్ 502286. వ్యవసాయం, పండుగలు, కుటుంబ సమావేశాలు, స్థానిక ఆలయాలు గ్రామ జీవనంలో ముఖ్యమైన భాగాలు.",
    aboutBody:
      "గ్రామం గురించి తెలుసుకోవాలనుకునే నివాసులు, సందర్శకులు, విద్యార్థులు, కుటుంబాల కోసం ఈ వెబ్‌సైట్ ఒక సులభమైన డిజిటల్ వేదికగా రూపొందించబడింది.",
    cultureTitle: "సాంస్కృతిక విశేషాలు",
    cultureItems: [
      "సాంప్రదాయ పండుగలు మరియు గ్రామ సమావేశాలు",
      "పంట పొలాలు మరియు కాలానుగుణ వ్యవసాయ పనులు",
      "స్థానిక ఆలయాలు మరియు సామూహిక పూజలు",
      "తెలంగాణ ఆహారం, భాష, కుటుంబ సంప్రదాయాలు",
    ],
    galleryLabel: "గ్యాలరీ",
    galleryTitle: "గ్రామ దృశ్యాలు మరియు రోజువారీ క్షణాలు",
    placesLabel: "ప్రదేశాలు",
    placesTitle: "ఆలయాలు, సమావేశ స్థలాలు, ఉపయోగకరమైన ప్రదేశాలు",
    facilitiesLabel: "సౌకర్యాలు",
    facilitiesTitle: "నివాసులు మరియు సందర్శకుల కోసం సేవలు",
    newsLabel: "వార్తలు",
    newsTitle: "ప్రకటనలు మరియు మార్చగల నవీకరణలు",
    adminTitle: "అడ్మిన్ మార్చగల కంటెంట్ ఆలోచన",
    adminBody:
      "తర్వాత ఈ ప్రకటనలను Google Sheet, Firebase collection లేదా చిన్న admin form ద్వారా చూపించవచ్చు. అప్పుడు కోడ్ మార్చకుండా గ్రామ నవీకరణలను మార్చుకోవచ్చు.",
    contactLabel: "సంప్రదించండి",
    contactTitle: "సంజీవన్‌రావుపేట్‌ను సంప్రదించండి",
    mapTitle: "సంజీవన్‌రావుపేట్ లొకేషన్ మ్యాప్",
    address: "నారాయణఖేడ్, సంగారెడ్డి, తెలంగాణ 502286",
    footerLine:
      "గ్రామ సమాచారం, సంస్కృతి, సేవల కోసం రూపొందించబడింది.",
  },
};

export const navItems = [
  { label: { en: "Home", te: "హోమ్" }, href: "#home" },
  { label: { en: "About", te: "గురించి" }, href: "#about" },
  { label: { en: "Gallery", te: "గ్యాలరీ" }, href: "#gallery" },
  { label: { en: "Contact", te: "సంప్రదించండి" }, href: "#contact" },
];

export const quickFacts = [
  { value: "502286", label: { en: "PIN Code", te: "పిన్ కోడ్" } },
  { value: "TS", label: { en: "Telangana", te: "తెలంగాణ" } },
  { value: { en: "Near", te: "సమీపం" }, label: { en: "Narayankhed", te: "నారాయణఖేడ్" } },
];

export const galleryImages = [
  {
    title: { en: "Green Fields", te: "పచ్చని పొలాలు" },
    caption: {
      en: "Seasonal farms around the village",
      te: "గ్రామం చుట్టూ కాలానుగుణ పంట పొలాలు",
    },
    src: villageGreenFields,
    images: [villageGreenFields], //galleryPlaceholderOne, galleryPlaceholderTwo],
  },
  {
    title: { en: "Village Roads", te: "గ్రామ రహదారులు" },
    caption: {
      en: "Quiet paths connecting homes and fields",
      te: "ఇళ్లను పొలాలతో కలిపే ప్రశాంత మార్గాలు",
    },
    src: villageRoad,
    images: [villageRoad],// galleryPlaceholderTwo, galleryPlaceholderThree],
  },
  {
    title: { en: "Places of Worship", te: "పూజా స్థలాలు" },
    caption: {
      en: "Temples",//, Mosque & Church in the village",
      te: "గ్రామంలోని దేవాలయాలు" //, మసీదు మరియు చర్చి",
    },
    src: villagetemple,
    images: [villagetemple],//, galleryPlaceholderOne, galleryPlaceholderThree],
  },
 /* {
    title: { en: "Evening Sky", te: "సాయంత్రపు ఆకాశం" },
    caption: {
      en: "Open horizons and calm village evenings",
      te: "విశాల దృశ్యాలు మరియు ప్రశాంత సాయంత్రాలు",
    },
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: { en: "Harvest Life", te: "పంట జీవనం" },
    caption: {
      en: "Agriculture at the heart of daily living",
      te: "రోజువారీ జీవనానికి కేంద్రంగా వ్యవసాయం",
    },
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: { en: "Community", te: "సమాజం" },
    caption: {
      en: "A place built around people and tradition",
      te: "ప్రజలు మరియు సంప్రదాయాలతో నిర్మితమైన స్థలం",
    },
    src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=900&q=80",
  },*/
];

export const places = [
  {
    icon: MdTempleHindu,
    title: { en: "Village Temples", te: "గ్రామ ఆలయాలు" },
    description: {
      en: "Important places for prayer, festivals, and cultural gatherings.",
      te: "పూజలు, పండుగలు, సాంస్కృతిక సమావేశాల కోసం ముఖ్యమైన ప్రదేశాలు.",
    },
  },
  {
    icon: Landmark,
    title: { en: "Gram Panchayat Area", te: "గ్రామ పంచాయతీ ప్రాంతం" },
    description: {
      en: "The center for civic information, local meetings, and public works.",
      te: "పౌర సమాచారం, స్థానిక సమావేశాలు, ప్రజా పనుల కోసం కేంద్రం.",
    },
  },
  {
    icon: MapPin,
    title: { en: "Nearby Narayankhed", te: "సమీప నారాయణఖేడ్" },
    description: {
      en: "Useful town access for markets, transport connections, and services.",
      te: "మార్కెట్లు, రవాణా, సేవల కోసం ఉపయోగకరమైన సమీప పట్టణం.",
    },
  },
  {
    icon: BookOpen,
    title: { en: "Community Spaces", te: "సామూహిక స్థలాలు" },
    description: {
      en: "Open areas for village functions, celebrations, and public events.",
      te: "గ్రామ కార్యక్రమాలు, వేడుకలు, ప్రజా కార్యక్రమాల కోసం ఖాళీ స్థలాలు.",
    },
  },
];

export const facilities = [
  {
    icon: GraduationCap,
    title: { en: "Schools", te: "పాఠశాలలు" },
    description: {
      en: "Primary education access in and around the village, with nearby options in Narayankhed.",
      te: "గ్రామంలో మరియు చుట్టుపక్కల ప్రాథమిక విద్యా సౌకర్యాలు, నారాయణఖేడ్‌లో మరిన్ని ఎంపికలు.",
    },
  },
  {
    icon: HeartPulse,
    title: { en: "Health Services", te: "ఆరోగ్య సేవలు" },
    description: {
      en: "Local first-aid support and nearby hospitals or clinics for medical care.",
      te: "స్థానిక ప్రథమ చికిత్స సహాయం మరియు వైద్య సేవల కోసం సమీప ఆసుపత్రులు లేదా క్లినిక్‌లు.",
    },
  },
  {
    icon: Bus,
    title: { en: "Transport", te: "రవాణా" },
    description: {
      en: "Road connectivity to Narayankhed and nearby villages for daily travel.",
      te: "రోజువారీ ప్రయాణం కోసం నారాయణఖేడ్ మరియు సమీప గ్రామాలకు రహదారి అనుసంధానం.",
    },
  },
  {
    icon: MapPin,
    title: { en: "Essential Services", te: "అవసరమైన సేవలు" },
    description: {
      en: "Access to shops, markets, public offices, and common village utilities.",
      te: "దుకాణాలు, మార్కెట్లు, ప్రభుత్వ కార్యాలయాలు, సాధారణ గ్రామ సేవలకు ప్రాప్యత.",
    },
  },
];

export const announcements = [
  {
    date: { en: "Village Update", te: "గ్రామ నవీకరణ" },
    title: { en: "Festival preparation notice", te: "పండుగ ఏర్పాట్ల సమాచారం" },
    description: {
      en: "Residents can use this space for temple events, community programs, and festival schedules.",
      te: "ఆలయ కార్యక్రమాలు, సామూహిక కార్యక్రమాలు, పండుగ షెడ్యూల్‌ల కోసం ఈ స్థలాన్ని ఉపయోగించవచ్చు.",
    },
  },
  {
    date: { en: "Public Info", te: "ప్రజా సమాచారం" },
    title: { en: "Facility updates", te: "సౌకర్యాల నవీకరణలు" },
    description: {
      en: "Add school, health camp, road work, water supply, or transport information here.",
      te: "పాఠశాల, ఆరోగ్య శిబిరం, రహదారి పనులు, నీటి సరఫరా లేదా రవాణా సమాచారాన్ని ఇక్కడ జోడించండి.",
    },
  },
];
