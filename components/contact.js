"use client";

import React from 'react'
import SubmitBtn from "./submitBtn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
// mt-10 mb-10 max-w-[45rem] text-center leading-8 sm:mb-14 scroll-mt-28 card
export default function Contact() {
  return (
    <section id="contact" className="mt-5 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      <h1 className="mb-6 text-2xl font-bold">Contact Me</h1>
      <p className="-mt-6 text-gray-700 dark:text-white/80">Please contact me directly at {" "} 
        <a className="underline" href="maldoalex@gmail.com">
          maldoalex@gmail.com
        </a> or through this form.
      </p>
      
      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
      <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  )
}
