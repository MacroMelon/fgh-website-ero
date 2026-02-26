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
                content: 'Protect your valuables with state of the art, split-second theft detection'
            },
            {
                property: 'og:title',
                content: 'Tether'
            },
            {
                property: 'og:description',
                content: 'Protect your valuables with state of the art, split-second theft detection'
            },
            {
                property: 'og:image',
                content: 'https://fgh.donutsloth.net/logo-long.png'
            },
            {
                property: 'og:image:type',
                content: 'image/png'
            },
            {
                property: 'og:logo',
                content: 'https://fgh.donutsloth.net/logo.png'
            },
            {
                property: 'og:logo:type',
                content: 'image/png'
            },
            {
                property: 'og:url',
                content: 'https://fgh.donutsloth.net/'
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
