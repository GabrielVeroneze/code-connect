import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Code Connect',
    description: 'Uma rede social para devs!',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    )
}
