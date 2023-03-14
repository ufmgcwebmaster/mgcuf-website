import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import Image from "next/image"
import Head from "next/head"

import { Inter, Roboto } from "next/font/google"

import { Gallery as GridGallery } from "react-grid-gallery"

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100", style: "italic"})
const roboto2 = Roboto({subsets: ['latin'], weight: "100"})

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '').replace('public/images/gallery/', '')] = r(item)['default']})
    return images
}
const images = importAll(require.context('public/images/gallery', false, /\.(png|jpe?g|svg)$/))

export default function Gallery() {

    return (
        <>
            <Head>
                <title>Gallery | UF MGC</title>
                <meta name="description" content="UF MGC - Gallery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <GridGallery images={Object.values(images)} enableImageSelection={false} />
                <div className="w-100% mb-6"></div>
                <Footer />
            </main>
        </>
    )
}