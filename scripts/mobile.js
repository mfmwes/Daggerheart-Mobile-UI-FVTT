Hooks.once("ready", () => {
    Hooks.on("renderApplicationV2", (app) => {
        if (app.constructor.name !== "CharacterSheet") return;

        MobileSheet.initialize(app);
    });
});

