"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../components/styles/contact.module.css";

const inter = Inter({ subsets: ["latin"] });

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_USER_ID ||
      !form.current
    ) {
      setSubmitStatus("Configuration error. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setSubmitStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setSubmitStatus(`Failed to send message: ${(error as Error).message}`);
    } finally {
      setIsSubmitting(false);
    }
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
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="user_name">
              Name
            </label>
            <input
              type="text"
              id="user_name"
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
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
        {submitStatus && <p className={styles.statusMessage}>{submitStatus}</p>}
      </div>
    </>
  );
};

export default ContactUs;
