import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMailOutline } from "react-icons/md";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      className="flex flex-col w-full p-5 lg:grid lg:grid-cols-2 lg:flex-row min-h-svh scroll-mt-12"
      id="contactMe"
    >
      <div className="">
        <h2 className="clamp(1rem,_1rem_+_1vw,_1.2rem)]">Contact Me</h2>

        <a
          href="mailto:ag.adeyinka@gmail.com"
          className="flex items-center gap-2 mt-4"
        >
          {" "}
          <MdMailOutline className="text-xl" /> ag.adeyinka@gmail.com
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
          />
          <label className="offscreen">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className="w-full p-4 bg-blue-100"
          />
          <label className="offscreen ">Message</label>
          <textarea
            name="message"
            className="grid w-full p-4 bg-blue-100 outline-none resize-none"
            placeholder="message"
          />
          <input
            type="submit"
            value="Send"
            className="w-full p-5 text-white bg-blue-950"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
