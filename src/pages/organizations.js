import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import Image from "next/image"
import Head from "next/head"

import { Inter, Roboto } from "next/font/google"

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100", style: "italic"})
const roboto2 = Roboto({subsets: ['latin'], weight: "100"})

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '').replace('public/images/orgs/', '')] = r(item)['default']})
    return images
}
const images = importAll(require.context('public/images/orgs', false, /\.(png|jpe?g|svg)$/))

const orgData = [
    // [
    //     "lambdas.jpg",
    //     "Lambda Theta Phi Latin Fraternity, Inc.",
    //     "Phi",
    //     "1975",
    //     "Academic Excellence, Brotherhood, Leadership, Latino Unity, Service",
    //     "Chivalry Above Self",
    //     "Brown and White",
    //     "uf_lambdas",
    //     "https://www.uflambdas.org/"
    // ],
    // [
    //     "lta.jpg",
    //     "Lambda Theta Alpha Latin Sorority, Inc.",
    //     "Chi",
    //     "1975",
    //     "Unity, Love, and Respect",
    //     "Latin by tradition, not by definition",
    //     "Burgundy and Gray",
    //     "lta_chi",
    //     "https://www.ltachichapter.org/"
    // ],
    [
        "betas.jpg",
        "Sigma Lambda Beta International Fraternity, Inc.",
        "Zeta Beta",
        "1986",
        "Brotherhood, Scholarship, Community Service, Cultural Awareness",
        "Opportunity for Wisdom, Wisdom for Culture",
        "Royal Purple and Pure White",
        "ufbetas",
        "http://ufbetas.org/"
    ],
    [
        "gamma-eta.jpg",
        "Gamma Eta Sorority, Inc.",
        "Alpha",
        "1995",
        "Sisterhood, Leadership, Service, Diversity, Strength, Unity, Scholarship",
        "Hoy y Siempre",
        "Purple and Teal",
        "gammaetauf",
        "http://www.gammaetasorority.org/"
    ],
    [
        "dpo.jpg",
        "Delta Phi Omega Sorority, Inc.",
        "Sigma",
        "1998",
        "Sisterhood, Respect, Loyalty, Honesty, Friendship",
        "We Dreamt, We Saw, We Conquered",
        "Red, Black, and Silver",
        "dpo_sigma",
        "https://dpouflorida.wixsite.com/dpouf/sisters"
    ],
    [
        "kpl.jpg",
        "Kappa Phi Lambda Sorority, Inc.",
        "Rho",
        "1995",
        "Sisterhood, Service, Cultural Diversity",
        "",
        "Scarlet Red, White, and Heather Gray",
        "ufkappas",
        "http://www.ufkpl.org/"
    ],
    [
        "pdpsi.jpg",
        "Pi Delta Psi Fraternity, Inc.",
        "Sigma",
        "1994",
        "Academic Achievement, Cultural Awareness, Righteousness, Friendship/Loyalty",
        "Excellence Through Brotherhood",
        "Red, White, and Black",
        "ufpdpsi",
        "http://www.ufpdpsi.com/about"
    ],
    [
        "tnx.jpg",
        "Theta Nu Xi Multicultural Sorority, Inc.",
        "Alpha Alpha",
        "1997",
        "Scholarship, Service, Sisterhood, Leadership",
        "Sisters of Diversity, Together as One",
        "Lavender, Carolina Blue, and Black",
        "ufthetanuxi",
        ""
    ],
    [
        "akdphi.jpg",
        "alpha Kappa Delta Phi International Sorority, Inc.",
        "Alpha Delta",
        "1990",
        "Sisterhood, Scholarship, Leadership, Service, Asian Awareness",
        "Timeless Friendship Through Sisterhood",
        "Purple and White",
        "ufakdphi",
        ""
    ],
    [
        "beta-chi.jpg",
        "Beta Chi Theta National Fraternity, Inc.",
        "Mu",
        "1999",
        "Brotherhood, Tradition, Service to Humanity, South Asian Awareness, Academic Excellence, Unified Nationwide Network",
        "Above All Else, Brotherhood",
        "Black, Silver, and White",
        "betachi.uf",
        "https://betachitheta.com"
    ],
    [
        "depsi.jpg",
        "Delta Epsilon Psi Fraternity, Inc.",
        "Rho",
        "1998",
        "Brotherhood, Discipline, Commitment",
        "In Brotherhood Lies Our Strength",
        "Blue and Silver",
        "depsi_uf",
        ""
    ],
    [
        "sigsig.jpg",
        "Sigma Sigma Rho Sorority, Inc.",
        "Phi",
        "1998",
        "Sisterhood, Society, Remembrance",
        "Mann, Atman, Dharam. Together they are one. We will not fall. Forever we are one...Qayamat Tak.",
        "Blue, Black, and Silver",
        "sigsiguf",
        "https://sigmasigmarhouf.wixsite.com/phi-chapter-uf"
    ]
]

export default function Organizations() {

    const OrgCard = ({ data }) => {

        const bulletPoints = []
        if (data[3] !== "") bulletPoints.push("Founded in " + data[3])
        if (data[4] !== "") bulletPoints.push("Pillars: " + data[4])
        if (data[5] !== "") bulletPoints.push("Motto: " + data[5])
        if (data[6] !== "") bulletPoints.push("Colors: " + data[6])

        const bulletComponent = bulletPoints.map((bullet) => <li key={bullet}>{bullet}</li>)

        return (
            <div className="flex">
                <Image src={images[data[0]]} alt={data[1]} width={1000} className="m-4 ml-6 max-w-[40%] sm:max-w-[50%] border border-white" style={{objectFit: "cover"}}/>
                <div className="flex flex-col items-start justify-center text-white mr-auto max-w-[40%] pl-6 md:pl-10 lg:pl-15 xl:pl-20 p-4">
                    <h1 className={`text-sm md:text-base lg:text-lg ${inter1.className}`}>{data[1]}</h1>
                    <h2 className={`text-sm md:text-base lg:text-lg mb-5 ${roboto1.className}`}>{data[2] + " Chapter"}</h2>
                    <ul className={`text-[0.5rem] md:text-xs lg:text-base ${roboto2.className}`} style={{listStyleType: "circle"}}>
                        {bulletComponent}
                        {(data[7] !== "") && 
                            <a href={"https://instagram.com/" + data[7]} target="_blank" rel="noreferrer noopener">
                                <li>{"@" + data[7]}</li>
                            </a>
                        }
                        {(data[8] !== "") && 
                            <a href={data[8]} target="_blank" rel="noreferrer noopener">
                                <li>{data[8]}</li>
                            </a>
                        }
                    </ul>
                </div>
            </div>
        )
    }

    const orgCards = orgData.map((org) => <OrgCard key={org[1]} data={org} />)

    return (
        <>
            <Head>
                <title>Organizations | UF MGC</title>
                <meta name="description" content="UF MGC - List of fraternities and sororities" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <div className={`w-full flex items-center justify-center lg:m-6 py-3 text-white text-lg lg:text-2xl xl:text-3xl ${inter1.className}`}>Learn More About Our Organizations</div>
                {orgCards}
                <div className="w-100% mb-6"></div>
                <Footer />
            </main>
        </>
    )
}