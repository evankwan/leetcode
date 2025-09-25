import "./styles.css";

const ACCORDIAN_SECTIONS = {
  HTML: "html",
  CSS: "css",
  JS: "js",
};
const CONFIG = {
  [ACCORDIAN_SECTIONS.HTML]: {
    BUTTON: "htmlButton",
    SECTION: "htmlSection",
    CARET: "htmlCaret",
  },
  [ACCORDIAN_SECTIONS.CSS]: {
    BUTTON: "cssButton",
    SECTION: "cssSection",
    CARET: "cssCaret",
  },
  [ACCORDIAN_SECTIONS.JS]: {
    BUTTON: "jsButton",
    SECTION: "jsSection",
    CARET: "jsCaret",
  },
};

const app = {
  state: {
    openState: {
      [ACCORDIAN_SECTIONS.HTML]: false,
      [ACCORDIAN_SECTIONS.CSS]: false,
      [ACCORDIAN_SECTIONS.JS]: false,
    },
  },
  selectors: {},
  initSelectors: function () {
    this.selectors.htmlButton = document.getElementById("html-button");
    this.selectors.htmlSection = document.getElementById("html-section");
    this.selectors.htmlCaret = document.getElementById("html-caret");
    this.selectors.cssButton = document.getElementById("css-button");
    this.selectors.cssSection = document.getElementById("css-section");
    this.selectors.cssCaret = document.getElementById("css-caret");
    this.selectors.jsButton = document.getElementById("js-button");
    this.selectors.jsSection = document.getElementById("js-section");
    this.selectors.jsCaret = document.getElementById("js-caret");
  },
  initListeners: function () {
    this.selectors.htmlButton.addEventListener("click", (e) =>
      this.handleAccordianClick(e, ACCORDIAN_SECTIONS.HTML),
    );
    this.selectors.cssButton.addEventListener("click", (e) =>
      this.handleAccordianClick(e, ACCORDIAN_SECTIONS.CSS),
    );
    this.selectors.jsButton.addEventListener("click", (e) =>
      this.handleAccordianClick(e, ACCORDIAN_SECTIONS.JS),
    );
  },
  init: function () {
    this.initSelectors();
    this.initListeners();
  },
  handleAccordianClick: function (e, section) {
    e.preventDefault();

    console.log(this.state.openState[section]);
    if (this.state.openState[section]) {
      this.closeSection(section);
    } else {
      this.openSection(section);
    }
  },
  closeSection: function (section) {
    this.state.openState[section] = false;
    this.selectors[CONFIG[section].SECTION].classList.remove(
      "accordian-section--open",
    );
    this.selectors[CONFIG[section].CARET].classList.remove(
      "accordian-icon--open",
    );
  },
  openSection: function (section) {
    this.state.openState[section] = true;
    this.selectors[CONFIG[section].SECTION].classList.add(
      "accordian-section--open",
    );
    this.selectors[CONFIG[section].CARET].classList.add("accordian-icon--open");
  },
};

app.init();
