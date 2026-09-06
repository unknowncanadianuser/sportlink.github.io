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
        "Browse activities by date and sport, then move between the list and the map.",
        "Parcourez les activités par date et par sport, puis passez de la liste à la carte.",
      ),
    },
    {
      number: "02",
      title: tr("Check the details", "Consultez les détails"),
      description: tr(
        "See the place, time, organizer, and participants before joining an activity.",
        "Consultez le lieu, l’heure, l’organisateur et les participants avant de rejoindre une activité.",
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

  const productViews = [
    {
      title: tr("See what is happening nearby.", "Voyez ce qui se passe près de chez vous."),
      description: tr(
        "The Home screen shows activities around you and gives you a quick way to explore more.",
        "L’écran d’accueil présente les activités autour de vous et permet d’en découvrir davantage.",
      ),
      image: "/screenshots/home_page.png",
      alt: tr("SportLink home screen", "Écran d’accueil de SportLink"),
    },
    {
      title: tr("Start with what is nearby.", "Commencez près de chez vous."),
      description: tr(
        "Move around the map, choose a park, and see the activities available there.",
        "Parcourez la carte, choisissez un parc et consultez les activités qui y sont offertes.",
      ),
      image: "/screenshots/selected_park_on_map.png",
      alt: tr("SportLink map showing a selected park", "Carte SportLink montrant un parc sélectionné"),
    },
    {
      title: tr("Know what you are joining.", "Sachez à quoi vous participez."),
      description: tr(
        "Check the time, place, organizer, participants, and conversation before you decide.",
        "Consultez l’heure, le lieu, l’organisateur, les participants et la conversation avant de décider.",
      ),
      image: "/screenshots/activity_details.png",
      alt: tr("SportLink activity details", "Détails d’une activité SportLink"),
    },
    {
      title: tr("Your plans stay easy to find.", "Retrouvez facilement vos activités."),
      description: tr(
        "See the activities you host, plan to attend, or save for later.",
        "Consultez les activités que vous organisez, auxquelles vous participez ou que vous gardez pour plus tard.",
      ),
      image: "/screenshots/my_bookings.png",
      alt: tr("SportLink bookings", "Activités enregistrées dans SportLink"),
    },
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
          <a href="#screens">{tr("Inside the app", "Dans l’application")}</a>
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
          <div className="home-shell hero-layout">
            <div className="hero-copy">
              <p className="home-eyebrow">{tr("Available on iOS and Android", "Disponible sur iOS et Android")}</p>
              <h1>{tr("Find a game. Or start one.", "Trouvez une partie. Ou créez la vôtre.")}</h1>
              <p className="hero-description">
                {tr(
                  "Browse nearby sports activities, join one, or organize your own in one place.",
                  "Parcourez les activités sportives près de chez vous, participez ou organisez la vôtre au même endroit.",
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

        <div id="screens">
          {productViews.map((view, index) => (
            <section className="home-section" key={view.image}>
              <div className={`home-shell section-inner product-row ${index % 2 === 1 ? "product-row-reverse" : ""}`}>
                <div className="product-copy">
                  <h2>{view.title}</h2>
                  <p>{view.description}</p>
                </div>

                <div className="product-screen-wrap">
                  <img src={view.image} alt={view.alt} loading="lazy" />
                </div>
              </div>
            </section>
          ))}
        </div>
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
