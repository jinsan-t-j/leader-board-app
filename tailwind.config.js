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
                // Theme colors
                'yellow-700': '#FFCC00',

                // The lightning colors
                'red-700': '#EF2600',
                'red-400': '#F3490C',
                'orange-700': '#F8721B',
                'orange-400': '#FDA32C',
                'pale-yellow-700': '#FCBB21',
                'pale-yellow-400': '#FBD516',
                'pale-yellow-100': '#FAFF03',
                'pale-yellow-50': '#FFDB82',
                'green-700': '#19AB58',
                'green-400': '#ADE408',
                'green-100': '#BEFC07',
            },
            background: {
                'yellow-ring':
                    'radial-gradient(circle, rgba(255,219,130,1) 0%, rgba(255,255,255,1) 100%),',
            },
        },
    },
    plugins: [tailwind.plugin(), typography],
}
