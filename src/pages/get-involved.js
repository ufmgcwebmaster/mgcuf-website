import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { Inter, Roboto } from "next/font/google"
import Image from 'next/image'

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100"})

import where from 'public/images/gallery/20_betachi.jpeg'
import when from 'public/images/gallery/21_akdphi.jpg'
import how from 'public/images/gallery/22_dpo.jpg'

const images = {
  "where": where,
  "when": when,
  "how": how
}

export default function GetInvolved() {

  const Card = ({ pillar, bulletPoints }) => {

    const bulletComponent = bulletPoints.map((bulletPoint) => (
      <li key={bulletPoint} className={`text-white ml-5 text-xs md:text-sm xl:text-base ${roboto1.className}`}>{bulletPoint}</li>
    ))

    return (
      <div className='flex flex-col items-center justify-center space-y-5 mb-5 mx-4 lg:mx-7 xl:mx-10 w-1/6'>
        <Image width={250} src={images[pillar]} alt={pillar} style={{borderRadius: "15%"}} />
        <h1 className={`text-white text-center text-sm md:text-lg xl:text-xl mb-4 ${inter1.className}`}>{pillar.charAt(0).toUpperCase() + pillar.slice(1)}</h1>
        <ul style={{listStyleType: "circle"}}>
          {bulletComponent}
        </ul>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Get Involved | UF MGC</title>
        <meta name="description" content="UF MGC - How to get involved" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={`w-full flex items-center justify-center lg:m-6 py-3 text-white text-lg lg:text-2xl xl:text-3xl ${inter1.className}`}>How Do I Join?</div>
        <div className='flex justify-center items-center min-h-[80vh] w-full'>
            <div className='flex flex-wrap items-start justify-around lg:w-[80%]'>
                <Card pillar="where" bulletPoints={["Each organization conducts recruitment individually.", "Check out their social media for updates on recruitment events!"]} />
                <Card pillar="when" bulletPoints={["Most organizations conduct recruitment on a semesterly basis.", "Events may occur throughout the semester, but intake begins at the beginning of each Fall/Spring semester."]} />
                <Card pillar="how" bulletPoints={["Attend MGC Information Sessions!", "Reach out to the organization you're interested in for more information!"]} />
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
