import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMailOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f4ctodd", "template_rd2kqft", form.current, {
        publicKey: "JTN7BLGeS1tUqwNoX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Not sent, please try again");
        },
      );
    e.target.reset();
  };
  return (
    <section
      className="relative flex flex-col justify-center w-full p-5 min-h-svh scroll-mt-12 lg:place-content-center "
      id="contactMe"
    >
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="1400"
        height="1400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="-z-10 absolute -top-20 -left-[920px]  lg:-left-[1000px]"
      >
        <g transform="translate(489.79892233902535 503.8402273150739)">
          <path
            d="M181.2 -217.8C219.5 -142.8 224.8 -71.4 202.3 -22.4C179.9 26.5 129.7 53 91.4 105.9C53 158.7 26.5 237.9 -14.8 252.6C-56.1 267.4 -112.2 217.9 -172.4 165C-232.5 112.2 -296.8 56.1 -295.2 1.5C-293.7 -53 -226.4 -106.1 -166.2 -181.1C-106.1 -256.1 -53 -353 9.2 -362.2C71.4 -371.4 142.8 -292.8 181.2 -217.8"
            fill="#172554"
          ></path>
        </g>
      </svg>
      <div className="flex flex-col min-w-full p-4 bg-white shadow-2xl lg:grid lg:grid-cols-2 lg:flex-row rounded-xl">
        <div className="">
          <h2 className="text-[clamp(1rem,_1rem_+_1vw,_1.8rem)] ">
            Contact Me
          </h2>
          <p>
            if you have any oppurtunities, ideas or questions, fill up the form
            and I will be in touch with you
          </p>

          <a
            href="mailto:ag.adeyinka@gmail.com"
            className="flex items-center gap-2 mt-4"
          >
            {" "}
            <MdMailOutline className="text-xl" />
            adeyinka.ag@gmail.com
          </a>
        </div>

        <div className="">
          <form
            className="flex flex-col items-center justify-center w-full gap-4 p-5 my-auto "
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="offscreen">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="name"
              className="w-full p-4 bg-blue-100 "
              required
            />
            <label className="offscreen">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="w-full p-4 bg-blue-100"
              required
            />
            <label className="offscreen ">Message</label>
            <textarea
              name="message"
              className="grid w-full p-4 bg-blue-100 resize-none"
              placeholder="message"
            />
            <button
              type="submit"
              value="Send"
              className="w-full p-5 text-white cursor-pointer hover:bg-blue-700 bg-blue-950"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
