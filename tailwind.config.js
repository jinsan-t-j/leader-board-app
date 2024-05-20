/* eslint-disable import/no-unresolved */
import tailwind from 'flowbite-react/tailwind'
import typography from 'flowbite-typography'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', tailwind.content()],
    theme: {
        extend: {
            fontFamily: {
                'extra-bold': ['manrope-extra-bold', 'Arial', 'sans-serif'],
                'semi-bold': ['manrope-semi-bold', 'Arial', 'sans-serif'],
                bold: ['manrope-bold', 'Arial', 'sans-serif'],
                light: ['manrope-light', 'Arial', 'sans-serif'],
            },
            colors: {
                'yellow-700': '#FFCC00',
                'orange-700': '#F6B511',
            },
        },
    },
    plugins: [tailwind.plugin(), typography],
}
