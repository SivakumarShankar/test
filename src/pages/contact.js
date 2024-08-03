import React, { useRef } from "react";
import emailjs, { } from "@emailjs/browser";
import Footer from "./footer";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o9q5e2m", "template_erpfhvl", form.current, {
        publicKey: "ooQrWN5Wi6_sDophw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            "Thank you for reaching out!\n\nWe have received your message and will get back to you shortly. We appreciate your interest and look forward to you.\n\nHave a great day!\n\nRegards,\nSivakumar Shankar Kumar"
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            "Oops! Something went wrong.\n\nWe're sorry, your message couldn't send at this time. Please try again later or contact us directly at sibisiva17@gmail.com\n\nThank you for your understanding!\n\nRegards\nSivakumar Shankar Kumar"
          );
        }
      );
  };

  return (
    <div
      className="container-fluid"
      style={{ height: "100vh", backgroundColor: "#003ecb" }}
    >
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <h1 class="pt-5 text-center text-white lh-base">Let's Connect</h1>
          <div class="form-floating mb-2">
            <input
              name="user_email"
              type="email"
              class="form-control"
              id="floatingInput"
              color="black"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput" color="black">
              Email address
            </label>
          </div>
          <div class="form-floating mb-2">
            <input
              name="user_name"
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
              required
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-2">
            <input
              type="text"
              name="message"
              class="form-control"
              id="floatingInput"
              placeholder="Message"
              required
            />
            <label for="floatingInput">Your Message</label>
          </div>
          <div class="mb-3">
            <div id="emailHelp" class="form-text text-white">
              We'll never share your details with anyone else.
            </div>
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-outline-light btn-lg"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
        <div class="fixed-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;