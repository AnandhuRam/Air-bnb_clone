import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Smallcard from '../components/Smallcard'

export default function Home({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>air-bnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Banner/>
        <menu className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl pb-5 font-semibold">Explore Nearby</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map(({img,location,distance}) =>(
             <Smallcard
                key={img}
                img ={img}
                location={location}
                distance={distance}
             />
            ))}
            </div>
          </section>
        </menu>

      
    </div>
  )
}
export async function getStaticProps(){
  const exploreData= await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  return {
    props:{
      exploreData
    }
  }
}