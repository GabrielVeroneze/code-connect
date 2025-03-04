import type { Metadata } from 'next'
import { Aside } from '@/components/Aside'
import '@/app/globals.css'

export const metadata: Metadata = {
    title: 'Code Connect',
    description: 'Uma rede social para devs!',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="pt-br">
            <body>
                <div className="app-container">
                    <Aside />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout
