import {montserrat} from "@/app/font";
import Image from "next/image";


export default function HeroSection() {
    return(
        <header className="w-full flex justify-center items-start gap-24 px-24 py-24 mt-[10vh] text-gray-800">
            <div className=" w-[45%] flex flex-col items-start justify-center px-12 pt-8">
                <h1 className={`${montserrat.className} font-bold text-6xl mb-5`}>
                    Fresh and
                    <span className="text-primary"> Organic </span> Milk product for You
                </h1>
                <p className="text-gray-700 mb-5">
                    Experience the pure delight of fresh and organic milk, tailored just for you.
                    Sourced from happy, healthy cows and delivered straight to your door, our milk products promise quality and goodness in every drop
                </p>

                <button
                    className="border py-3 px-12 rounded-md border-primary text-primary hover:bg-primary hover:text-white duration-200 transition-all"
                >
                    Shop now
                </button>
            </div>
            <div className="flex justify-center items-center ">
                <div className="bg-primary p-12 rounded-full ">
                    <Image

                        src="/milk_glass_hero.png"
                        alt="milk glass image"
                        width={350}
                        height={250}
                    />
                </div>
            </div>


        </header>
    )
}
