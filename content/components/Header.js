import Head from 'next/head'
import Image from 'next/image'

export default function Header() {
  return (
    <Head>
        <title>Tesimune</title>
        <meta property="og:title" content="Tesimune Portfolio" />
        <meta property="og:description" content="Teslime Tesimune Portfolio" />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:url" content="https://tesimune.vercel.app" />
        <link rel="icon" href="/profile.png" />
    </Head>
  )
}
