import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import Image from "next/image"
import Head from "next/head"

import { Inter, Roboto } from "next/font/google"

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100", style: "italic"})
const roboto2 = Roboto({subsets: ['latin'], weight: "100"})

function importAll(r, dir) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '').replace(dir, '')] = r(item)['default']})
    return images
}
const directorImages = importAll(require.context('public/images/directors', false, /\.(png|jpe?g|svg)$/), 'public/images/directors/')
const eboardImages = importAll(require.context('public/images/eboard', false, /\.(png|jpe?g|svg)$/), 'public/images/eboard/')

const year = 2023

const directorData = [
    // [
    //     'erik-lavandeira.jpg',
    //     'Erik Lavandeira',
    //     '(He/Him/His)',
    //     'Community Service Director',
    //     'ufmgcservice@gmail.com'
    // ],
    // [
    //     'ricardo-martinez.jpg',
    //     'Ricardo Martinez',
    //     '(He/Him/His)',
    //     'Scholarship Director',
    //     'scholarshipufmgc@gmail.com'
    // ],
    // [
    //     'rhiannon-odonnell.jpg',
    //     "Rhiannon O'Donnell",
    //     '(She/Her/Hers)',
    //     'Programming Director',
    //     'ufmgcprogramming@gmail.com'
    // ],
    // [
    //     'sergio-ray.jpg',
    //     "Sergio Ray",
    //     '(He/Him/His)',
    //     'Programming Director',
    //     'ufmgcprogramming@gmail.com'
    // ],
    [
        'grace-wilson.jpg',
        'Grace Wilson',
        '(She/Her/Hers)',
        'Programming Director',
        'ufmgcprogramming@gmail.com'
    ],
    // [
    //     'adamaris-castillo.jpg',
    //     'Adamaris Castillo',
    //     '(She/Her/Hers)',
    //     'Programming Director',
    //     'ufmgcprogramming@gmail.com'
    // ],
    // [
    //     'peter-acosta.jpg',
    //     "Peter Acosta",
    //     '(He/Him/His)',
    //     'Showcase Director',
    //     'ufmgcshowcase3@gmail.com'
    // ],
    // [
    //     'damien-shane.jpg',
    //     "Damien Shane",
    //     '(He/Him/His)',
    //     'Showcase Director',
    //     'ufmgcshowcase3@gmail.com'
    // ],
    [
        'britney-tse.jpg',
        "Britney Tse",
        '(She/Her/Hers)',
        'Showcase Director',
        'ufmgcshowcase3@gmail.com'
    ],
    [
        'gabrielle-quiva.jpg',
        "Gabrielle Quiva",
        '(She/Her/Hers)',
        'Public Relations Director',
        'ufmgcpr@gmail.com'
    ],
    [
        'mrithika-senthilnathan.jpg',
        "Mrithika Senthilnathan",
        '(She/Her/Hers)',
        'Public Relations Director',
        'ufmgcpr@gmail.com'
    ],
    // [
    //     'steffano-segovia-palacios.jpg',
    //     "Steffano Segovia-Palacios",
    //     '(He/Him/His)',
    //     'Public Relations Director',
    //     'ufmgcpr@gmail.com'
    // ],
    [
        'alejandra-roldan.jpg',
        "Alejandra Roldan",
        '(She/Her/Hers)',
        'Fundraising Director',
        'ufmgcfundraising@gmail.com'
    ],
    [
        'rithik-raja.jpg',
        "Rithik Raja",
        '(He/Him/His)',
        'Webmaster',
        'ufmgcwebmasters@gmail.com'
    ]
]

const eboardData = [
    [
        'ashlynn-donaldson.jpg',
        "Ashlynn Donaldson",
        '(She/Her/Hers)',
        'President',
        'ufmgcpresident@gmail.com'
    ],
    // [
    //     'ismael-contreras.jpg',
    //     "Ismael Contreras",
    //     '(He/Him/His)',
    //     'Executive Vice President',
    //     'ufmgcevp@gmail.com'
    // ],
    [
        'amiya-gupta.jpg',
        "Amiya Gupta",
        '(She/Her/Hers)',
        'Administrative Vice President',
        'ufmgcavp@gmail.com'
    ],
    [
        'raymond-chau.jpg',
        "Raymond Chau",
        '(He/Him/His)',
        'Treasurer',
        'ufmgctreasurer@gmail.com'
    ],
    // [
    //     'simar-khetpal.jpg',
    //     "Simar Khetpal",
    //     '(He/Him/His)',
    //     'Secretary',
    //     'ufmgcsecretary@gmail.com'
    // ],
    [
        'dalon-coleman.jpg',
        "Dalon Coleman",
        '(He/Him/His)',
        'Council Advisor',
        'dalon.coleman@ufl.edu'
    ]
]

export default function OurTeam() {

    const Card = ({ data, isEboard }) => {
        return (
            <div className="flex justify-between items-center w-full md:w-1/2">
                {(isEboard ?
                    <Image src={eboardImages[data[0]]} alt={data[1]} className="m-4 ml-8 h-[16rem] md:h-[12rem] lg:h-[16rem] xl:h-[20rem] w-[40%] border border-white" style={{objectFit: "cover"}}/> :
                    <Image src={directorImages[data[0]]} alt={data[1]} className="m-4 ml-8 h-[16rem] md:h-[12rem] lg:h-[16rem] xl:h-[20rem] w-[40%] border border-white" style={{objectFit: "cover"}}/>
                )}
                <div className="flex flex-col items-start justify-center text-white max-w-[50%] mr-auto pl-6 lg:pl-10 lg:pl-15 xl:pl-20 p-4">
                    <h1 className={`text-sm md:text-base lg:text-lg ${inter1.className}`}>{data[1]}</h1>
                    <h2 className={`text-sm lg:text-lg mb-5 ${roboto1.className}`}>{data[2]}</h2>
                    <h2 className={`text-sm lg:text-lg mb-5 ${roboto1.className}`}>{data[3]}</h2>
                    <a href={`mailto:${data[4]}`} target="_blank" rel="noreferrer noopener">
                        <h2 className={`text-xs lg:text-base mb-5 ${roboto1.className}`}>{data[4]}</h2>
                    </a>
                </div>
            </div>
        )
    }

    const eboardComponents = eboardData.map((data) => <Card key={data[1]} data={data} isEboard={true} />)
    const directorComponents = directorData.map((data) => <Card key={data[1]} data={data} isEboard={false} />)

    return (
        <>
            <Head>
                <title>Our Team | UF MGC</title>
                <meta name="description" content={`Executive Board members and directors for the year of ${year}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <div className={`w-full flex items-center justify-center lg:m-6 py-3 text-white text-lg lg:text-2xl xl:text-3xl ${inter1.className}`}>{`${year} Executive Board`}</div>
                <div className="flex flex-wrap">
                    {eboardComponents}
                </div>
                <div className={`w-full flex items-center justify-center lg:m-6 py-3 text-white text-lg lg:text-2xl xl:text-3xl ${inter1.className}`}>{`${year} Directors`}</div>
                <div className="flex flex-wrap mb-6">
                    {directorComponents}
                </div>
                <Footer />
            </main>
        </>
    )
}