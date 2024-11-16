import Link from "next/link";
import style from "@/components/home/home.module.css"

export default function HomeComponent () {
    return (
        <>
            <h2 style={{fontSize:"1.1rem"}}>My Projects:</h2>
            <div className={style["card-container"]}>
                <div className={style["card"]}>
                    <h3>Interactive Resume Builder</h3>
                    <p>Enter your details, and generate your resume on the fly!</p>
                    <Link href="https://interactive-resume-builder-mu.vercel.app/">&gt;Go to Interactive Resume Builder</Link>
                </div>
                <div className={style["card"]}>
                    <h3>Everyday Life Blog</h3>
                    <p>Check out AI-generated articles on different aspects of everyday life!</p>
                    <Link href="https://giaicquarter2assignment4and5.vercel.app/">&gt;Go to Everyday Life</Link>
                </div>
            </div>
        </>
    );
}