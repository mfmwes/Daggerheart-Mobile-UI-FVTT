class SidebarManager {

    constructor(root) {

        this.root = root;

        this.windowApp = null;
        this.sidebarContent = null;

        this.overlay = null;
        this.overlayContent = null;

        this.currentPanel = null;
        this.currentParent = null;
        this.currentNextSibling = null;

    }

    initialize() {

    this.cache();

    if (!this.sidebarContent) return;

    this.destroy();

    this.createButton();
    this.createOverlay();

}

    cache() {

        this.windowApp = this.root.closest(".window-app") ?? this.root;

        this.sidebarContent = document.querySelector("#sidebar-content");

    }

    destroy() {

    this.windowApp
        .querySelector(".dh-sidebar-button")
        ?.remove();

    this.windowApp
        .querySelector(".dh-sidebar-overlay")
        ?.remove();

}

createButton() {

    this.button = document.createElement("button");

    this.button.type = "button";
    this.button.className = "dh-sidebar-button";

    this.button.innerHTML =
        '<i class="fa-solid fa-comments"></i>';

    this.windowApp.appendChild(this.button);

    this.button.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        this.toggle("chat");

    });

}

    createOverlay() {

        this.overlay = document.createElement("div");
        this.overlay.className = "dh-sidebar-overlay";

        this.overlayContent = document.createElement("div");
        this.overlayContent.className = "dh-sidebar-overlay-content";

        this.overlay.appendChild(this.overlayContent);

        this.windowApp.appendChild(this.overlay);

    }

    open(panelId = "chat") {

        if (this.currentPanel) return;

        const panel = document.getElementById(panelId);

        if (!panel) return;

        this.currentPanel = panel;
        this.currentParent = panel.parentNode;
        this.currentNextSibling = panel.nextSibling;

        this.overlayContent.appendChild(panel);

        this.overlay.classList.add("open");

    }

    close() {

        if (!this.currentPanel) return;

        if (this.currentNextSibling) {

            this.currentParent.insertBefore(
                this.currentPanel,
                this.currentNextSibling
            );

        } else {

            this.currentParent.appendChild(this.currentPanel);

        }

        this.overlay.classList.remove("open");

        this.currentPanel = null;
        this.currentParent = null;
        this.currentNextSibling = null;

    }

    toggle(panelId = "chat") {

        if (this.currentPanel) {
            this.close();
        } else {
            this.open(panelId);
        }

    }

}

window.SidebarManager = SidebarManager;