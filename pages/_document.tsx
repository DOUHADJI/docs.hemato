import React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <body className="font-nunito">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
