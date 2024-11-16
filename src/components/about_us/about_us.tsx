import Image from "next/image";
import style from "@/components/about_us/about_us.module.css"
export default function AboutUs () {
    return (
        <div className={style["about-container"]}>
            <div className={style["about"]}>
                <p>I am Shah Faisal, a Mechatronics Engineer learning Generative AI from GIAIC</p>
                <Image src="/world.svg" alt="World" width={300} height={300}/>
            </div>
        </div>
    );
}