import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='scroll-smooth'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins:wght@500&family=Rubik:wght@300&display=swap" rel="stylesheet" />
                <link href="https://www.pwnhc.ca/webfonts/Junicode.woff" rel="stylesheet" type="text/css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}