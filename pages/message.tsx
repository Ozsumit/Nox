"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../components/styles/contact.module.css";
import { toast } from "sonner";
import CompanyInfo from "../components/ui/socials";

const inter = Inter({ subsets: ["latin"] });

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsButtonDisabled(true);

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID ||
      !form.current
    ) {
      toast("Configuration error. Please try again later.");
      setIsSubmitting(false);
      setIsButtonDisabled(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      toast("Message Sent To Dev Succesfully", {
        description: "You cannot send another message for 1 minute.",
        action: {
          label: "Close",
          onClick: () => console.log("closed motherfucker"),
        },
      });
      form.current.reset();
    } catch (error) {
      toast(`Failed to send message: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);

      // Set a timeout to re-enable the button after 1 minute
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 120000);
    }
  };

  // Define the HEL function
  const HEL = () => {
    toast("Alert!");
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
        <meta name="keywords" content="contact, email, message" />
        <meta name="author" content="ali" />
      </Head>
      <div className={`${styles.main} ${inter.className}`}>
        <h2 className="relative flex-row justify-center items-center md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl  text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex  gap-2 sm:mx-4 md:gap-8 mb-8">
          {/* <span>The Repo</span>
            <span className="text-white text-lg font-thin">x</span> */}
          <span>Contact Us</span>
        </h2>
        <div className={styles.contactContainer}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-11/12  lg:w-128 z-50 shadow-[0px_0px_20px_4px_#1a202c] flex flex-col justify-center bg-black border border-white dark:border-white/[0.2] p-8 rounded-2xl"
          >
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="user_name">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                autoComplete="off"
                name="name"
                required
                placeholder="Gojo Satoru"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                name="email"
                required
                placeholder="Satorugojo21@gmail.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                rows={8}
                id="message"
                name="message"
                required
                placeholder="Nah, I'd win"
              />
            </div>
            <button
              className={`bg-accent w-6/12 self-center h-14 rounded-md text-black hover:bg-accenth hover:shadow-[0px_0px_95px_10px_#c9b4b334] transition-all duration-500 ease-linear hover:text-slate-900 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isSubmitting || isButtonDisabled}
            >
              {isSubmitting
                ? "Sending..."
                : isButtonDisabled
                ? "Wait for a minute"
                : "Send"}
            </button>
          </form>
          <CompanyInfo />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
