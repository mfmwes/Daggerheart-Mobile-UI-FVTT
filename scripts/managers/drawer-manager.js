class DrawerManager {
    constructor(root) {
        this.root = root;
    }

    get sidebar() {
        return this.root.querySelector(".character-sidebar-sheet");
    }

    get header() {
        return this.root.querySelector(".character-header-sheet");
    }

    get windowApp() {
        return this.root.closest(".window-app") ?? this.root;
    }

    initialize() {
        if (!this.sidebar || !this.header) return;

        this.destroy();

        this.createButton();
        this.createOverlay();
    }

    destroy() {
        this.windowApp.querySelector(".dh-drawer-button")?.remove();
        this.root.querySelector(".dh-overlay")?.remove();
    }

    createButton() {
        this.button = document.createElement("button");
        this.button.className = "dh-drawer-button";
        this.button.type = "button";
        this.button.innerHTML = '<i class="fa-solid fa-bars"></i>';

        this.windowApp.appendChild(this.button);

        this.button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const sidebar = this.sidebar;

            if (!sidebar) return;

            if (sidebar.classList.contains("open")) {
                this.close();
            } else {
                this.open();
            }
        });
    }

    createOverlay() {
        const sidebar = this.sidebar;

        if (!sidebar) return;

        this.overlay = document.createElement("div");
        this.overlay.className = "dh-overlay";

        sidebar.parentNode.insertBefore(this.overlay, sidebar);

        this.overlay.addEventListener("click", () => this.close());
    }

    open() {
        const sidebar = this.sidebar;

        if (!sidebar || !this.overlay) return;

        this.overlay.classList.add("open");
        sidebar.classList.add("open");
    }

    close() {
        const sidebar = this.sidebar;

        if (!sidebar || !this.overlay) return;

        sidebar.classList.remove("open");
        this.overlay.classList.remove("open");
    }
}

window.DrawerManager = DrawerManager;