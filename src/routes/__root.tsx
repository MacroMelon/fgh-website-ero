import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'
import Footer from "@/components/Footer.tsx";

import appCss from '../styles.css?url'

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Tether',
            },
            {
                name: 'description',
                content: 'Are you are worried about your belongings being stolen?  Get a Tether Sticker to secure them. An all in one solution with a powerful automatic anti-theft alarm integrated with Bluetooth tracking.'
            },
            {
                property: 'og:title',
                content: 'Tether'
            },
            {
                property: 'og:description',
                content: 'Are you are worried about your belongings being stolen?  Get a Tether Sticker to secure them. An all in one solution with a powerful automatic anti-theft alarm integrated with Bluetooth tracking.'
            },
            {
                property: 'og:image',
                content: 'https://tether.donutsloth.net/tether_sticker.png'
            },
            {
                property: 'og:image:type',
                content: 'image/png'
            },
            {
                property: 'og:logo',
                content: 'https://tether.donutsloth.net/logo.png'
            },
            {
                property: 'og:logo:type',
                content: 'image/png'
            },
            {
                property: 'og:url',
                content: 'https://tether.donutsloth.net/'
            },
            {
                property: 'og:type',
                content: 'website'
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'icon',
                type: 'image/svg',
                href: '/logo.svg',
            }
        ],
    }),

    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <HeadContent />
        </head>
        <body>
        <Header />
        <main className="min-h-[85vh]">
            {children}
        </main>
        <Footer />
        <Scripts />
        </body>
        </html>
    )
}
