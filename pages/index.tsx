import Head from 'next/head'

export default function Home(){
  return (
    <div className="h-[200vh] flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
    </div>
  )
}
