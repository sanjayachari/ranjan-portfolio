import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz0irbd",
        "template_3frky4s",
        form.current,
        "0qLgMB2PCKgebHjhO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage("Submitted!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
    e.target.reset();
  };

  // const [message, setMessage] = useState(true)
  // setMessage('sumbitted')

  // const clik = () => {
  //   setTimeout(()=>{
  //   setMessage("")

  //   },5000)

  // }

  // const handleClick = () => {
  //   // 5 seconds in milliseconds
  // };

  return (
    <div id="contact" className="md:p-5 w-full flex justify-center items-center flex-col md:flex-row md:flex md:justify-around md:items-center" >


      <motion.div className="p-4 md:h-[600px] w-[350px] md:w-[500px]  flex flex-col justify-center drop-shadow items-center"
      
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      >
        <h1 className="font-bold text-2xl md:text-3xl">Get in Touch</h1>

        <div className="w-[300px] md:w-[350px] h-[400px]  p-2 shadow-lg rounded">
          <form ref={form} onSubmit={sendEmail}>
            <h1 className="text-[18px]">Name</h1>
            <input
              type="text"
              name="from_name"
              className="w-full h-[40px] mb-4 rounded p-1"
              required
            />
            <h1 className="text-[18px]">Email</h1>
            <input
              type="email"
              name="user_email"
              className="w-full h-[40px] mb-4 rounded p-1"
              required
            />
            <h1 className="text-[18px]">Message</h1>
            <textarea name="message" required className="w-full" />
            <br />
            <input
              type="submit"
              value="Send"
              className="border border-black mb-4 w-full rounded hover:bg-[black] hover:text-white hover:border-white duration-700"
            />
            {/* <button onClick={sendEmail}>sen</button> */}
          </form>
          <div>{message && <p>{message}</p>}</div>
        </div>
      </motion.div>

      <motion.div className="m-2 h-[300px] md:h-[300px] w-[300px] md:w-[700px] shadow-lg flex flex-col justify-center"
      
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      >
        <div className="p-3 md:p-2">
          <p className="text-[17px] md:text-[20px] ">
          I'm committed to create high-quality, user-focused solutions that meet
          my clients' needs. Whether I'm working on a small website or a
          large-scale application, I always strive for excellence and attention
          to detail...
          </p> 
          <p className="font-bold  mt-3 shadow-lg">
          Please don't hesitate to get in touch!
          </p>
        </div>
      </motion.div>


    </div>
  );
};

export default Contact;
