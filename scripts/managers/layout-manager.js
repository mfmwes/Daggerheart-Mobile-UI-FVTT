class LayoutManager {
    constructor(root) {
        this.root = root;
    }

    createActionBar() {

    if (this.root.querySelector(".dh-mobile-actions")) return;

    const actions = document.createElement("div");
    actions.className = "dh-mobile-actions";

    this.root.appendChild(actions);

}

    initialize() {
        this.cache();
        this.createActionBar();
    }

    cache() {
        this.windowContent = this.root.querySelector(".window-content");
        this.header = this.root.querySelector(".character-header-sheet");
        this.sidebar = this.root.querySelector(".character-sidebar-sheet");
        this.main = this.root.querySelector(".sheet-main");
        this.tabs = this.root.querySelector(".sheet-navigation");
        this.activeTab = this.root.querySelector(".tab.active");
    }
}

window.LayoutManager = LayoutManager;