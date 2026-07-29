class CollapseManager {
    constructor(root) {
        this.root = root;
    }

    initialize() {
        this.root.addEventListener("click", this.onClick.bind(this));
    }

    onClick(event) {
        const title = event.target.closest(
            ".equipment-section > .title, .loadout-section > .title, .experience-section > .title"
        );

        if (!title) return;

        const section = title.parentElement;

        section.classList.toggle("collapsed");
    }
}

window.CollapseManager = CollapseManager;