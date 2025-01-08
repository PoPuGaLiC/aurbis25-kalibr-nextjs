
import Head from 'next/head'

export default async function Header({params}: {params: Promise<{ slug: string }>}) {
  return(
    
    <div>
      <Head>
      <title>Example</title>
        <meta></meta>
      </Head>
    </div>
  );
}
