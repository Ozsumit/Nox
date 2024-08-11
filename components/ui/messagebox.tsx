"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function MessageBox() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api/sendEmail", {
        method: "POST", // Ensure this is set to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error("Full error:", error);
      setStatus(
        `An error occurred: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="bg-white z-50 w-1/2 flex flex-col   rounded-2xl h-auto p-2">
      <h1 className="text-black text-4xl font-mono mb-8  self-center">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-xl" htmlFor="name">
            Name:
          </label>
          <input
            className="border border-black rounded ml-2 p-1"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="text-xl" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-black rounded ml-2 p-1"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
        </div>
        <div>
          <label className="text-xl" htmlFor="message">
            Message:
          </label>
          <textarea
            className="border border-black rounded ml-2 p-1"
            id="message"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            required
          />
        </div>
        <button
          className="border border-black rounded-lg bg-slate-500 w-32 h-12 mt-3 self-center"
          type="submit"
        >
          Send Message
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
