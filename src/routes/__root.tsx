import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import Header from '../components/Header'

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
                title: 'TanStack Start Starter',
            },
            {
                name: 'description',
                content: 'The initial website template for DE4 ERO project - Group: Five Good Humans'
            },
            {
                property: 'og:title',
                content: 'Five Good Humans'
            },
            {
                property: 'og:description',
                content: 'The initial website template for DE4 ERO project - Group: Five Good Humans'
            },
            {
                property: 'og:image',
                content: 'https://fgh.donutsloth.net/logo-long.svg'
            },
            {
                property: 'og:image:type',
                content: 'image/svg'
            },
            {
                property: 'og:logo',
                content: 'https://fgh.donutsloth.net/logo.svg'
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
        {children}
        <Scripts />
        </body>
        </html>
    )
}
