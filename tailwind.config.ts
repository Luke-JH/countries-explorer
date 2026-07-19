import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                display: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
            },
            colors: {
                atlas: {
                    surface: "#faf7f0",
                    "surface-dark": "#161a22",
                    raised: "#ffffff",
                    "raised-dark": "#1d222c",
                    ink: "#0b0b0b",
                    "ink-dark": "#ffffff",
                    muted: "#6b6a63",
                    "muted-dark": "#9a9890",
                    border: "#e4e0d5",
                    "border-dark": "#2a2f3a",
                    accent: "#a8501f",
                    "accent-dark": "#e2814f",
                },
                region: {
                    africa: "#2a78d6",
                    "africa-dark": "#3987e5",
                    americas: "#008300",
                    "americas-dark": "#008300",
                    asia: "#e87ba4",
                    "asia-dark": "#d55181",
                    europe: "#eda100",
                    "europe-dark": "#c98500",
                    oceania: "#1baf7a",
                    "oceania-dark": "#199e70",
                },
            },
        },
    },
};
