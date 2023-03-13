import { Roboto } from "next/font/google"

const roboto1 = Roboto({subsets: ['latin'], weight: "100"})

export default function Footer() {
    return (
        <div className="flex flex-col text-white items-center justify-center">
            <span className={`text-[0.5rem] sm:text-sm lg:text-sm my-1 lg:my-3 ${roboto1.className}`}>3100 J.  Wayne Reitz Union, Gainesville, FL, 32611</span>
            <span className={`text-[0.5rem] sm:text-sm lg:text-sm mb-3 lg:mb-5 ${roboto1.className}`}>©2023 UF Multicultural Greek Council. All rights reserved.</span>
        </div>
    )
}