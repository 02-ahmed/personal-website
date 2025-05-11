import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set initial active section based on URL hash or default to home
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const validSections = ["home", "about", "skills", "works", "contact"];

    if (hash && validSections.includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection("home");
    }
  }, []);

  // Handle scroll event to change navbar appearance and detect active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "works", "contact"];

      // Find the section closest to the top of the viewport
      let currentSection = activeSection || "home";
      let minDistance = Number.MAX_VALUE;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          // If this section is closer to the top than previous ones
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check for active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Section labels and emojis
  const sectionInfo: Record<string, { text: string; emoji: string }> = {
    home: { text: "Home", emoji: "🏠" },
    about: { text: "About", emoji: "👨‍💻" },
    skills: { text: "Skills", emoji: "⚡" },
    works: { text: "Projects", emoji: "🚀" },
    contact: { text: "Contact", emoji: "📬" },
  };

  // Handle click on nav links
  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className={`modern-navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          className="navbar-logo"
          href="#home"
          onClick={() => handleNavClick("home")}
        >
          <div className="logo-container">
            <FaCode className="logo-icon" />
            <div className="logo-text">A</div>
          </div>
        </a>

        <div className="navbar-links">
          <ul>
            {["home", "about", "skills", "works", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  title={sectionInfo[section].text}
                  onClick={() => handleNavClick(section)}
                >
                  {isMobile ? (
                    <div className="nav-emoji-container">
                      <span className="nav-emoji">
                        {sectionInfo[section].emoji}
                      </span>
                    </div>
                  ) : (
                    <span className="nav-text">
                      {sectionInfo[section].text}
                    </span>
                  )}
                  {activeSection === section && (
                    <span className="nav-indicator"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
