import Document, { Head, Main, NextScript, Html } from 'next/document';
import Script from 'next/script';

export default class AppDocument extends Document {
   render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <Script 
                    src="/eimzo/e-imzo.js"
                    strategy="beforeInteractive" />
                </body>
            </Html>
        )
   }
}