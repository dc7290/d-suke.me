import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Zen+Kaku+Gothic+New&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-900 font-sans leading-normal text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
