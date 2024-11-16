import Link from "next/link";
import style from "@/components/header/header.module.css"

export default function Header() {
    return (
        <>
            <div className={style["header"]}>
                <ul className={style["header-items"]}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about_us"}>About Us</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>

        </>
    )
}