import type {Config} from 'tailwindcss'

const colors = require('tailwindcss/colors')

const config: Config = {
    important: true,
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            ...colors,
            primary: {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "rgba(39,213,184,0.86)",
                "400": "rgba(34,192,166,0.84)",
                "500": "#20ad96",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
            }
        }
    },
    plugins: [],
}
export default config
