/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: ['"Poppins", sans-serif'],
        },
        height: ({ theme }) => ({
            screen: 'calc(var(--vh, 1vh) * 100)',
            ...theme('spacing'),
        }),
        minHeight: ({ theme }) => ({
            screen: 'calc(var(--vh, 1vh) * 100)',
            ...theme('spacing'),
        }),
        extends: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar'),
    ],
}
