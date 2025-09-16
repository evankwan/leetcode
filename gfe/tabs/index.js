import './styles.css';

const TABS = {
    HTML: "htmlTab",
    CSS: "cssTab",
    JS: "jsTab",
}

const TAB_CONTENT = {
    [TABS.HTML]: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    [TABS.CSS]: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    [TABS.JS]: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
}
const app = {
    selectors: {},
    initializeSelectors: function() {
        this.selectors[TABS.HTML] = document.getElementById("html-tab")
        this.selectors[TABS.CSS] = document.getElementById("css-tab")
        this.selectors[TABS.JS] = document.getElementById("js-tab")
        this.selectors.tabContent = document.getElementById("tab-content")
    },
    initializeListeners: function() {
        this.selectors[TABS.HTML].addEventListener("click", (e) => this.handleTabChange(e, TABS.HTML))
        this.selectors[TABS.CSS].addEventListener("click", (e) => this.handleTabChange(e, TABS.CSS))
        this.selectors[TABS.JS].addEventListener("click", (e) => this.handleTabChange(e, TABS.JS))
    },
    init: function() {
        this.initializeSelectors()
        this.initializeListeners()
    },
    handleTabChange: function(e, activeTab) {
        e.preventDefault()

        for (const tab in TABS) {
            if (TABS[tab] !== activeTab) {
                this.selectors[TABS[tab]].classList.remove("active-tab")
                continue
            }
            this.selectors[activeTab].classList.add("active-tab")
        }

        this.selectors.tabContent.innerText = TAB_CONTENT[activeTab]
    },
}

app.init()
