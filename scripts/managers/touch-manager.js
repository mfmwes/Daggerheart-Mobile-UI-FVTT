class TouchManager {
    constructor(root) {
        this.root = root;
    }

    initialize() {
        this.blockUntil = Date.now() + 350;

        this.root.addEventListener(
            "click",
            this.onClick.bind(this),
            true
        );
    }

    onClick(event) {
        if (Date.now() < this.blockUntil) {
            event.stopImmediatePropagation();
            event.preventDefault();
        }
    }
}

window.TouchManager = TouchManager;