import { useEffect, useState } from "react";

export default function Navbar({
  currentLanguage,
  languages,
  navItems,
  onLanguageChange,
  text,
  icons,
  useNavigateHook,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigateHook();
  const { Menu, X } = icons;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavigation(href) {
    navigate(`/${href}`);
    setIsOpen(false);
  }

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={() => handleNavigation("#home")}>
        <span>SRPT</span>
        <div>
          <strong>Sanjeevanraopet</strong>
          <small>{text.brandSubtitle}</small>
        </div>
      </a>

      {navItems.length > 0 && (
        <nav className={isOpen ? "open" : ""} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavigation(item.href)}
            >
              {item.label[currentLanguage]}
            </button>
          ))}
        </nav>
      )}

      <div className="nav-actions">
        <div className="language-toggle" aria-label={text.languageLabel}>
          {Object.entries(languages).map(([code, label]) => (
            <button
              className={currentLanguage === code ? "active" : ""}
              key={code}
              type="button"
              onClick={() => onLanguageChange(code)}
            >
              {label}
            </button>
          ))}
        </div>

        {navItems.length > 0 && (
          <button
            className="menu-button"
            type="button"
            aria-label={text.menuLabel}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>
    </header>
  );
}
