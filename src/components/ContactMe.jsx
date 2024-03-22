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
        }
      );
    e.target.reset();
  };
  return (
    <section
      className="flex flex-col justify-center w-full p-5 lg:grid lg:grid-cols-2 lg:flex-row min-h-svh scroll-mt-12 lg:place-content-center"
      id="contactMe"
    >
      <div className="">
        <h2 className="text-[clamp(1rem,_1rem_+_1vw,_1.8rem)] ">Contact Me</h2>
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
            className="w-full p-5 text-white cursor-pointer focus-within:bg-blue-700 hover:bg-blue-700 bg-blue-950"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
