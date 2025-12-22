/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                theme: {
                    bg: 'var(--theme-bg)',
                    text: 'var(--theme-text)',
                    accent: 'var(--theme-accent)',
                    'accent-hover': 'var(--theme-accent-hover)',
                    secondary: 'var(--theme-secondary)',
                    surface: 'var(--theme-surface)',
                    border: 'var(--theme-border)',
                },
                stone: {
                    50: 'var(--theme-bg)',
                    100: 'var(--theme-surface)',
                    200: 'var(--theme-border)',
                    300: '#d6d3d1',
                    400: 'var(--theme-secondary)',
                    500: 'var(--theme-secondary)',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: 'var(--theme-text)',
                },
                rust: {
                    500: 'var(--theme-accent)',
                    600: 'var(--theme-accent-hover)',
                    700: '#7c2d12',
                }
            }
        },
    },
    plugins: [],
}
