"use client";
import React from "react";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-[40px] font-semibold bg-clip-text bg-gradient-to-r text-[#c7c7c7ad] to-[#3a3a3a] pt-20 pb-10">
        Let&apos;s Connect
      </h1>

      <div className="flex flex-col items-center w-full align-middle justify-center">
        <div className="text-lg text-gray-400 w-full px-10 md:px-0 md:w-[650px]">
          I&apos;m currently open to work, if you have any opportunities or just want
          to say hi, feel free to reach out to me at
          <a
            href="mailto:loshan20011@gmail.com"
            className="text-transparent z-50 font-bold relative cursor-pointer bg-clip-text text-white"
          >
            {"  "}
            {"  "}
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
                className="border rounded-[10px] border-[#8080808b] px-3 py-2 w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-5 button-primary text-white cursor-pointer rounded-lg md:max-w-[200px]"
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
