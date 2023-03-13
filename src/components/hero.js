import Image from "next/image"

import heroImage from "public/images/hero-image.jpeg"
import styles from "@/styles/Hero.module.css"

import { Inter, Roboto } from "next/font/google"

const inter1 = Inter({subsets: ['latin'], weight: "300"})
const roboto1 = Roboto({subsets: ['latin'], weight: "100", style: "italic"})
const roboto2 = Roboto({subsets: ['latin'], weight: "100"})

export default function Hero() {
    return (
        <div className={styles["parallax-group"]}>
            <div className={`${styles["parallax-layer"]} ${styles["layer1"]} flex items-center justify-center`}>
                <div className="w-1/2 h-1/2 bg-transparent flex flex-col items-center justify-center text-white text-center">
                    <h1 className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-7 ${inter1.className}`}>The Multicultural Greek Council at the University of Florida</h1>
                    <h2 className={`text-base md:text-lg xl:text-xl mb-3 ${roboto1.className}`}>"Unifying Leaders Through Diversity"</h2>
                    <h3 className={`text-sm md:text-base xl:text-lg ${roboto2.className}`}>Scholarship | Leadership | Service | Community</h3>
                </div>
            </div>
            <Image src={heroImage} alt="MGC Hero Image" className={`${styles["parallax-layer"]} ${styles["layer2"]}`} style={{objectFit: "cover"}} />
        </div>
    )
}