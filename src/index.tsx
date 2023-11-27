import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import en from "utils/translations/en.json";
import ru from "utils/translations/ru.json";
import de from "utils/translations/de.json";

import Root from "./Root";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || "ru",
  resources: {
    en: {
      common: en,
    },
    ru: {
      common: ru,
    },
    de: {
      common: de,
    },
  },
});

root.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
);
