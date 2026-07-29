class MobileSheet {

    static MOBILE_WIDTH = 768;

    static updateMode(root) {

        if (!root) return;

        const width = root.getBoundingClientRect().width;
        const isMobile = width <= this.MOBILE_WIDTH;

        root.classList.toggle("dh-mobile", isMobile);

    }

    static initialize(app) {

        const root = app.element;

        if (!root) return;

        if (!root.dataset.mobileInitialized) {

            root.dataset.mobileInitialized = "true";

            new LayoutManager(root).initialize();
            new DrawerManager(root).initialize();
            new SidebarManager(root).initialize();
            new TouchManager(root).initialize();

            const observer = new ResizeObserver(() => {
                MobileSheet.updateMode(root);
            });

            observer.observe(root);

            root._dhResizeObserver = observer;
        }

        this.updateMode(root);

    }

}

window.MobileSheet = MobileSheet;