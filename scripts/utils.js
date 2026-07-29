class DHUtils {

    static debug(...args) {

        console.log(
            "%c[FVTT Mobile]",
            "color:#4fc3f7;font-weight:bold",
            ...args
        );

    }

}

window.DHUtils = DHUtils;