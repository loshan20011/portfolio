"use client"
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10">
        Let's Connect
      </h1>

      <div className="flex flex-col">
        <div className="text-lg text-gray-400 max-w-[600px]">
          I'm currently open to work, if you have any opportunities or just want
          to say hi, feel free to reach out to me at
          <a
            href="mailto:loshan20011@gmail.com"
            className="text-transparent z-50 relative cursor-pointer bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            {" "}
            Loshan20011@gmail.com
          </a>
        </div>
        <div>
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
