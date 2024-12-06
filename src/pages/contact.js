import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./footer";

export const ContactUs = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // success or failure

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o9q5e2m", "template_erpfhvl", form.current, {
        publicKey: "ooQrWN5Wi6_sDophw",
      })
      .then(
        () => {
          setModalMessage(
            "Thank you for reaching out! We have received your message and will get back to you shortly."
          );
          setModalType("success");
          setShowModal(true);
        },
        (error) => {
          setModalMessage(
            "Oops! Something went wrong. Please try again later or contact us directly."
          );
          setModalType("failure");
          setShowModal(true);
        }
      );
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#003ecb" }}>
      <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <h1 className="text-center text-white lh-base fs-2 mb-4">Let's Connect</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-100"
          style={{ maxWidth: "400px" }}
        >
          {/* Email Input */}
          <div className="mb-3">
            <div className="form-floating">
              <input
                name="user_email"
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-3">
            <div className="form-floating">
              <input
                name="user_name"
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Name"
                required
              />
              <label htmlFor="floatingName">Name</label>
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-3">
            <div className="form-floating">
              <textarea
                name="message"
                className="form-control"
                id="floatingMessage"
                placeholder="Your Message"
                rows="4"
                required
              />
              <label htmlFor="floatingMessage">Your Message</label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button className="btn btn-outline-light btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-warning">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalType === "success" ? "Success" : "Failure"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-white">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactUs;
