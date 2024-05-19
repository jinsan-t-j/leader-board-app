/* eslint-disable import/no-unresolved */
import tailwind from 'flowbite-react/tailwind'
import typography from 'flowbite-typography'

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', tailwind.content()],
    theme: {
        extend: {
            fontFamily: {
                bold: ['montserrat-bold', 'Arial', 'sans-serif'],
                medium: ['montserrat-medium', 'Arial', 'sans-serif'],
                regular: ['montserrat-regular', 'Arial', 'sans-serif'],
            },
            colors: {
                'brown-700': '#795458',
                'brown-400': '#FEECE2',
                'gray-700': '#4D4D4D',

                'beige-400': '#FEECE2',
            },
            backgroundImage: {
                'hero-pattern':
                    'linear-gradient(90deg, rgba(80,60,60,1) 0%, rgba(120,90,90,1) 30%, rgba(170,128,128,1) 70%, rgba(182,136,136,1) 100%)',
            },
        },
    },
    plugins: [tailwind.plugin(), typography],
}
