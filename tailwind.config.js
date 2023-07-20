/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: [
                'Inter var, sans-serif',
                {
                    fontFeatureSettings: '"cv11", "ss01"',
                    fontVariationSettings: '"opsz" 32',
                },
            ],
        },
        extends: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
