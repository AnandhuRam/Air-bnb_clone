import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Largecard from '../components/Largecard'
import Mediumcard from '../components/Mediumcard'
import Smallcard from '../components/Smallcard'

export default function Home({exploreData,cardData}) {
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
           <section>
             <h2 className="text-4xl font-semibold py-8">
               Live anywhere
             </h2>
             <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
             {cardData.map(({img,title}) => (
               <Mediumcard img = {img} title={title}/>
             )
             )}
               </div>
             
             </section> 
             <Largecard
              img = ' https://links.papareact.com/4cj'
              title='The Greatest Outdoors'
              description='Wishlistx curated by Airbnb'
              buttontext="Get Inspired"
             />
        </menu>

      
    </div>
  )
}
export async function getStaticProps(){
  const exploreData= await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )
  const cardData = await fetch("https://links.papareact.com/zp1").then(
    (res) =>res.json()
  )
  return {
    props:{
      exploreData,
      cardData
    }
  }
}