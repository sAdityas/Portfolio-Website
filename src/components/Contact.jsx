import React from "react";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <section id="contact" className="mt-20 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">Feel free to reach out for collaborations or projects!</p>
        <a
          href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBpDrwXlfdzbxpVLndHLxWlzxslTKFJWFTHdLhLfggvVfQGbRJCwZGRFGXWKfMgBwlRpGbf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3  text-white bg-yellow-700 sfont-semibold rounded-lg transition-colors duration-300 hover:bg-amber-500 hover:text-black" 
        >
          Say Hello <span className=""><FontAwesomeIcon icon={faHandshake} /></span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
