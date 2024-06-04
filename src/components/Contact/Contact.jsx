import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import TrackVisibility from 'react-on-screen';
import styles from "./Contact.module.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className={styles.contact} id="connect">
      <div className={styles.title}  >Contact</div>
      <div className={styles.container}>
        
        <div className={styles.row}>
          <div className={styles.imageCol}>
            <img
              src={getImageUrl("contact/image.png")}
              alt="Contact Illustration"
              className={styles.contactImage}
            />
          </div>
          <div className={styles.formCol}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Get In Touch</h1>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </div>
                      <div className={styles.col}>
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </div>
                      <div className={styles.col}>
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <button type="submit"><span>{buttonText}</span></button>
                      </div>
                    </div>
                    {status.message && (
                      <div className={styles.row}>
                        <div className={styles.col}>
                          <p className={status.success === false ? styles.danger : styles.success}>{status.message}</p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
}
