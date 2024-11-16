"use client";

import style from "@/components/contact/contact.module.css"

export default function Contact() {
    return (
        <>
            <form className={style["contact-form"]} onSubmit={() => { alert("Thank you for contacting!"); return false; }}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input required type="text" id="name" placeholder="Your Name" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" placeholder="Your Email" />
                </div>

                <div>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea cols={50} id="message" placeholder="Your Message"></textarea>
                </div>

                <input className={style["contact-submit"]} type="submit" />
            </form>
        </>
    );
}