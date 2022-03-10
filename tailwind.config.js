module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            phone: {
                min: "360px",
                max: "375px",
            },
            tablet: {
                min: "376px",
                max: "834px",
            },
            desktop: {
                min: "834px",
                max: "1920px",
            },
        },
        extend: {
            width: {
                321: "321px",
                450: "450px",
            },
            colors: {
                "pale-blue": "hsl(225, 100%, 94%)",
                "bright-blue": "hsl(245, 75%, 52%)",
                "very-pale-blue": "hsl(225, 100%, 98%)",
                "desaturated-blue": "hsl(224, 23%, 55%)",
                "dark-blue": "hsl(223, 47%, 23%)",
            },
            backgroundImage: {
                "svg-pattern": "url('/src/img/pattern-background-desktop.svg')",
                "svg-pattern-mobile": "url('/src/img/pattern-background-mobile.svg')",
            },
            backgroundSize: {
                full: "100%",
                mobile: "375px",
            },
            fontFamily: {
                "red-hat": ["'Red Hat Display', san-serif"],
            },
        },
    },
    plugins: [],
};