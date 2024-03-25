"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = emailjs.sendForm(
        "service_ng3j6wv",
        "template_swikzfd",
        e.currentTarget,
        "EpuziM6nJsJhejMA9"
      );

      setName("");
      setEmail("");
      setMessage("");
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error sending the form:", error);
    }

    console.log("submitted");
  };

  useEffect(() => {
    if (showConfirmation) {
      const timeoutId = setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showConfirmation]);

  const ref = useRef(null);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a] pt-20 pb-10">
        Let&apos;s Connect
      </h1>

      <div className="flex flex-col items-center w-full align-middle justify-center">
        <div className="text-lg text-gray-400 w-full px-10 md:px-0 md:w-[650px]">
          I&apos;m currently open to work, if you have any opportunities or just
          want to say hi, feel free to reach out to me at{" "}
          <a
            href="mailto:loshan20011@gmail.com"
            className="text-transparent z-50 font-bold relative cursor-pointer bg-clip-text text-white"
          >
            Loshan20011@gmail.com
          </a>
        </div>
        <div className="w-full md:w-[650px] px-10 md:px-0">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="mt-5 mb-4">
              <label htmlFor="name" className="text-white text-lg items-center">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="border border-[#8080808b] rounded-[10px] px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border rounded-[10px] border-[#8080808b] px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-white text-lg">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="border rounded-[10px] border-[#8080808b] px-3 py-2 w-full"
              ></textarea>
            </div>
            {showConfirmation && (
              <h1 className="flex justify-center font-semibold text-green-400 uppercase text-sm pt-1">
                Sent Successfully
              </h1>
            )}
            <button
              type="submit"
              className="py-2 px-10 button-primary text-white cursor-pointer rounded-lg md:max-w-[200px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;