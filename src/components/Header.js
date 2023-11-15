import { useTranslation } from "react-i18next";
import logo from "../accents/logo/logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="https://#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={logo}
            classNameName="App-logo"
            alt="logo"
            style={{ width: "70px", height: "auto" }}
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="./" className="mr-5 hover:text-gray-900">
            {t("Home")}
          </a>
          <a href="./About" className="mr-5 hover:text-gray-900">
            {t("About_us")}
          </a>
          <a href="https://#" className="mr-5 hover:text-gray-900">{t("Services")}</a>
          <a href="https://#" className="mr-5 hover:text-gray-900">{t("Blog")}</a>
          <a href="https://#" className="mr-5 hover:text-gray-900">{t("Contact")}</a>
        </nav>

        <button
          onClick={toggleLanguage}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          {i18n.language === "en" ? "Español" : "English"}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
