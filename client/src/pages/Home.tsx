import { useState } from "react";
import "./Home.css";

const appStoreUrl = "https://apps.apple.com/ca/app/sportlink/id6757758569";
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mlr.sportlink&pcampaignid=web_share";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const tr = (en: string, fr: string) => (language === "fr" ? fr : en);

  const features = [
    {
      number: "01",
      title: tr("Explore nearby", "Explorez à proximité"),
      description: tr(
        "Browse activities by date and sport, then switch between a list and a map.",
        "Parcourez les activités par date et par sport, puis passez de la liste à la carte.",
      ),
    },
    {
      number: "02",
      title: tr("Create an activity", "Créez une activité"),
      description: tr(
        "Choose the sport, time, location, and number of participants for your next game.",
        "Choisissez le sport, l’heure, le lieu et le nombre de participants pour votre prochaine partie.",
      ),
    },
    {
      number: "03",
      title: tr("Keep track of plans", "Suivez vos activités"),
      description: tr(
        "Find the activities you host, join, or bookmark in one place.",
        "Retrouvez au même endroit les activités que vous organisez, rejoignez ou enregistrez.",
      ),
    },
  ];

  const detailItems = [
    tr("Date, time, and meeting place", "Date, heure et lieu de rencontre"),
    tr("Organizer and participant list", "Organisateur et liste des participants"),
    tr("Activity conversation", "Conversation de l’activité"),
  ];

  return (
    <div className="sportlink-home">
      <header className="home-header home-shell">
        <a className="home-brand" href="#top" aria-label={tr("SportLink home", "Accueil SportLink")}>
          <img src="/screenshots/sportlink-icon.png" alt="" />
          <span>SportLink</span>
        </a>

        <nav className="home-nav" aria-label={tr("Primary navigation", "Navigation principale")}>
          <a href="#features">{tr("Features", "Fonctions")}</a>
          <a href="#details">{tr("Activity details", "Détails")}</a>
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            aria-label={language === "en" ? "Afficher le site en français" : "View site in English"}
          >
            {language === "en" ? "FR" : "EN"}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="home-hero">
          <div className="home-shell">
            <div className="hero-copy">
              <p className="home-eyebrow">{tr("Available on iOS and Android", "Disponible sur iOS et Android")}</p>
              <h1>{tr("Find a game. Or start one.", "Trouvez une partie. Ou lancez-en une.")}</h1>
              <p className="hero-description">
                {tr(
                  "Browse nearby sports activities, join one, or organize your own—all from one place.",
                  "Parcourez les activités sportives près de chez vous, rejoignez-en une ou organisez la vôtre au même endroit.",
                )}
              </p>

              <div className="store-links" aria-label={tr("Download SportLink", "Télécharger SportLink")}>
                <a href={appStoreUrl} target="_blank" rel="noreferrer">
                  <img
                    src="/store-badges/app-store-badge.png"
                    alt={tr("Download SportLink on the App Store", "Télécharger SportLink dans l’App Store")}
                  />
                </a>
                <a href={playStoreUrl} target="_blank" rel="noreferrer">
                  <img
                    src="/store-badges/google-play-badge.png"
                    alt={tr("Get SportLink on Google Play", "Télécharger SportLink sur Google Play")}
                  />
                </a>
              </div>
            </div>

            <div className="app-preview" aria-label={tr("SportLink app preview", "Aperçu de l’application SportLink")}>
              <img
                className="preview-screen preview-screen-left"
                src="/screenshots/bookings.PNG"
                alt={tr("Activities screen", "Écran des activités")}
              />
              <img
                className="preview-screen preview-screen-main"
                src="/screenshots/discover-map.PNG"
                alt={tr("Nearby activities on the map", "Activités à proximité sur la carte")}
              />
              <img
                className="preview-screen preview-screen-right"
                src="/screenshots/activity-details.PNG"
                alt={tr("Activity details screen", "Écran des détails d’une activité")}
              />
            </div>
          </div>
        </section>

        <section className="home-section" id="features">
          <div className="home-shell section-inner">
            <div className="section-heading">
              <p className="home-eyebrow">{tr("What you can do", "Ce que vous pouvez faire")}</p>
              <h2>{tr("Plan the next game.", "Planifiez la prochaine partie.")}</h2>
            </div>

            <div className="feature-list">
              {features.map(feature => (
                <article key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section" id="details">
          <div className="home-shell section-inner details-layout">
            <div className="details-copy">
              <p className="home-eyebrow">{tr("Before you join", "Avant de participer")}</p>
              <h2>{tr("See the practical details.", "Consultez les détails utiles.")}</h2>
              <p>
                {tr(
                  "Each activity page puts the information for a game in one place.",
                  "Chaque page d’activité rassemble au même endroit les renseignements sur une partie.",
                )}
              </p>

              <ul>
                {detailItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="details-image-wrap">
              <img
                src="/screenshots/activity-details-2.PNG"
                alt={tr("SportLink activity information", "Renseignements d’une activité SportLink")}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-shell footer-inner">
          <div className="footer-brand-row">
            <a className="footer-brand" href="#top">SportLink</a>
            <p>© 2026 SportLink</p>
          </div>

          <nav aria-label={tr("Footer navigation", "Navigation de pied de page")}>
            <a href="/open-source-licenses">{tr("Open Source", "Code source ouvert")}</a>
            <a href="/privacy-policy">{tr("Privacy", "Confidentialité")}</a>
            <a href="/terms-and-conditions">{tr("Terms", "Conditions")}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
