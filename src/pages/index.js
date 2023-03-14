import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

import styles from '@/styles/Home.module.css'

import aboutUsImage from 'public/images/about-us-image.jpg'

import { Inter, Roboto } from "next/font/google"
import Image from 'next/image'

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100"})

import scholarshipImg from 'public/images/pillars/scholarship.png'
import leadershipImg from 'public/images/pillars/leadership.png'
import serviceImg from 'public/images/pillars/service.png'
import communityImg from 'public/images/pillars/community.png'

const pillarImages = {
  "scholarship": scholarshipImg,
  "leadership": leadershipImg,
  "service": serviceImg,
  "community": communityImg
}

export default function Home() {

  const PillarCard = ({ pillar, bulletPoints }) => {

    const bulletComponent = bulletPoints.map((bulletPoint) => (
      <li key={bulletPoint} className={`text-white ml-5 text-xs md:text-sm xl:text-base ${roboto1.className}`}>{bulletPoint}</li>
    ))

    return (
      <div className='flex flex-col items-center justify-center space-y-5 mb-5 mx-8 lg:mx-9 xl:mx-10 w-1/6'>
        <Image width={250} src={pillarImages[pillar]} alt={pillar} />
        <h1 className={`text-white text-center text-base md:text-lg xl:text-xl mb-4 ${inter1.className}`}>{pillar.charAt(0).toUpperCase() + pillar.slice(1)}</h1>
        <ul style={{listStyleType: "circle"}}>
          {bulletComponent}
        </ul>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Home | UF MGC</title>
        <meta name="description" content="Welcome to UF MGC, the governing body for the culturally-based fraternity and sorority chapters at the University of Florida!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.parallax}>
        <Navbar />
        <Hero />

        <div className='w-full bg-gray-800 h-auto flex'>
          <div className='flex flex-col items-center justify-center max-w-fit md:max-w-[50%] p-8 lg:p-10 xl:p-12'>
            <h1 className={`text-white text-center text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-8 xl:mb-12 ${inter1.className}`}>About Us</h1>
            <p className={`text-white text-center text-xs sm:text-sm lg:text-base mx-8 md:mx-12 lg:mx-16 xl:mx-20 md:leading-7 lg:leading-8 ${roboto1.className}`}>The Multicultural Greek Council was established on November 15th, 1999 to unite and serve the ethnic Greek letter organizations at the University of Florida. A member of an MGC organization experiences Greek life in a very unique way. Our organizations are our families; they are life-long bonds made with brothers or sisters. In addition, they are small enough such that members know each other well. Although ethnically based, we embrace people of all different backgrounds and take pride in out diverse membership. Respect and knowledge of culture is a major focus of MGC organizations. Apart from being exposed to a wide range of networking opportunities, members of MGC organizations also work with other Greek organizations in community service projects and leadership experiences.</p>
          </div>
          <div className='hidden md:flex w-auto'>
            <Image src={aboutUsImage} alt="About Us Image" style={{objectFit: "cover"}}/>
          </div>
        </div>

        <div className='bg-gray-900 flex flex-col items-center p-8 lg:p-10 xl:p-12'>
          <h1 className={`text-white text-center text-xl lg:text-2xl xl:text-3xl mb-4 md:mb-8 xl:mb-12 ${inter1.className}`}>Our Pillars</h1>
          <div className='flex flex-wrap items-start justify-center'>
            <PillarCard pillar="scholarship" bulletPoints={["Annual scholarships", "Study sessions", "Incentives for academic success", "Recognition for academic achievement"]} />
            <PillarCard pillar="leadership" bulletPoints={["Leaders of various UF organizations", "Positions within individual chapters and council", "Southeast Greek Leadership Association"]} />
            <PillarCard pillar="service" bulletPoints={["Philanthropy: Adopt-A-Classroom for East Gainesville schools", "Semesterly service events", "Fundraisers", "Individual service opportunities", "The Greek Giving Initiative"]} />
            <PillarCard pillar="community" bulletPoints={["Socials", "Frequent collaborations", "Unity Summit", "Co-sponsorships"]} />
          </div>
        </div>

        <Footer />

      </main>
    </>
  )
}
