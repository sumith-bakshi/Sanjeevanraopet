import {
  ArrowUpRight,
  BookOpen,
  Bus,
  CalendarDays,
  Camera,
  Church,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sprout,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import GalleryCard from "./components/GalleryCard.jsx";
import InfoCard from "./components/InfoCard.jsx";
import Navbar from "./components/Navbar.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import {
  announcements,
  facilities,
  galleryImages,
  languages,
  navItems,
  places,
  quickFacts,
  siteText,
} from "./data/villageData.js";

function VillagePage({ language, text }) {
  return (
    <>
      <ComingSoon language={language} text={text} />
    </>
  );
}

function ComingSoon({ language, text }) {
  const comingSoonText = {
    en: {
      label: "Coming Soon",
      title: "Sanjeevanraopet village website is coming soon",
      body: "We are preparing village information, photos, important places, facilities, and contact details. Please visit again soon.",
    },
    te: {
      label: "త్వరలో",
      title: "సంజీవన్‌రావుపేట్ గ్రామ వెబ్‌సైట్ త్వరలో వస్తోంది",
      body: "గ్రామ సమాచారం, ఫోటోలు, ముఖ్య ప్రదేశాలు, సౌకర్యాలు, సంప్రదింపు వివరాలను సిద్ధం చేస్తున్నాము. దయచేసి త్వరలో మళ్లీ సందర్శించండి.",
    },
  }[language];

  return (
    <section className="coming-soon section-anchor" id="home">
      <div className="coming-soon-content">
        <span className="eyebrow">{comingSoonText.label}</span>
        <h1>{comingSoonText.title}</h1>
        <p>{comingSoonText.body}</p>
        <div className="coming-soon-banner">{text.heroTitle}</div>
      </div>
      <div className="hero-facts" aria-label={text.quickFactsLabel}>
        {quickFacts.map((fact) => (
          <div className="fact" key={fact.label.en}>
            <strong>
              {typeof fact.value === "object" ? fact.value[language] : fact.value}
            </strong>
            <span>{fact.label[language]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Hero({ language, text }) {
  return (
    <section className="hero section-anchor" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">{text.heroLocation}</span>
        <h1>{text.heroTitle}</h1>
        <p>{text.heroDescription}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#about">
            {text.exploreButton} <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="#contact">
            {text.contactButton}
          </a>
        </div>
      </div>
      <div className="hero-facts" aria-label={text.quickFactsLabel}>
        {quickFacts.map((fact) => (
          <div className="fact" key={fact.label.en}>
            <strong>
              {typeof fact.value === "object" ? fact.value[language] : fact.value}
            </strong>
            <span>{fact.label[language]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection({ text }) {
  return (
    <section className="content-section section-anchor" id="about">
      <div className="section-grid about-grid">
        <div>
          <SectionTitle
            icon={<Sprout size={22} />}
            label={text.aboutLabel}
            title={text.aboutTitle}
          />
          <p className="lead">{text.aboutLead}</p>
          <p>{text.aboutBody}</p>
        </div>
        <div className="about-panel">
          <h3>{text.cultureTitle}</h3>
          <ul>
            {text.cultureItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function GallerySection({ language, text }) {
  return (
    <section className="content-section soft-section section-anchor" id="gallery">
      <SectionTitle
        icon={<Camera size={22} />}
        label={text.galleryLabel}
        title={text.galleryTitle}
      />
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <GalleryCard key={image.title.en} image={image} language={language} />
        ))}
      </div>
    </section>
  );
}

function PlacesSection({ language, text }) {
  return (
    <section className="content-section section-anchor" id="places">
      <SectionTitle
        icon={<Landmark size={22} />}
        label={text.placesLabel}
        title={text.placesTitle}
      />
      <div className="card-grid">
        {places.map((place) => (
          <InfoCard key={place.title.en} item={place} language={language} />
        ))}
      </div>
    </section>
  );
}

function FacilitiesSection({ language, text }) {
  return (
    <section className="content-section soft-section section-anchor" id="facilities">
      <SectionTitle
        icon={<Home size={22} />}
        label={text.facilitiesLabel}
        title={text.facilitiesTitle}
      />
      <div className="card-grid">
        {facilities.map((facility) => (
          <InfoCard key={facility.title.en} item={facility} language={language} />
        ))}
      </div>
    </section>
  );
}

function NewsSection({ language, text }) {
  return (
    <section className="content-section section-anchor" id="news">
      <SectionTitle
        icon={<CalendarDays size={22} />}
        label={text.newsLabel}
        title={text.newsTitle}
      />
      <div className="news-layout">
        <div className="announcement-list">
          {announcements.map((item) => (
            <article className="announcement" key={item.title.en}>
              <span>{item.date[language]}</span>
              <h3>{item.title[language]}</h3>
              <p>{item.description[language]}</p>
            </article>
          ))}
        </div>
        <div className="admin-note">
          <h3>{text.adminTitle}</h3>
          <p>{text.adminBody}</p>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ text }) {
  return (
    <section className="content-section contact-section section-anchor" id="contact">
      <SectionTitle
        icon={<MapPin size={22} />}
        label={text.contactLabel}
        title={text.contactTitle}
      />
      <div className="contact-grid">
        <div className="contact-panel">
          <a href="tel:+919999999999">
            <Phone size={20} />
            <span>+91 99999 99999</span>
          </a>
          <a href="mailto:info@sanjeevanraopet.in">
            <Mail size={20} />
            <span>info@sanjeevanraopet.in</span>
          </a>
          <p>
            <MapPin size={20} />
            <span>{text.address}</span>
          </p>
        </div>
        <div className="map-frame">
          <iframe
            title={text.mapTitle}
            src="https://www.google.com/maps?q=Sanjeevanraopet%20Narayankhed%20Sangareddy%20Telangana%20502286&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return null;
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const text = siteText[language];

  return (
    <div className="app" lang={language}>
      <ScrollManager />
      <Navbar
        currentLanguage={language}
        languages={languages}
        navItems={[]}
        onLanguageChange={setLanguage}
        text={text}
        icons={{ Menu, X }}
        useNavigateHook={useNavigate}
      />
      <main>
        <Routes>
          <Route path="/" element={<VillagePage language={language} text={text} />} />
          <Route path="*" element={<VillagePage language={language} text={text} />} />
        </Routes>
      </main>
      <Footer text={text} />
    </div>
  );
}

export const iconMap = {
  BookOpen,
  Bus,
  Church,
  GraduationCap,
  HeartPulse,
  Landmark,
  MapPin,
};
