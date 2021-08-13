/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Swal from "sweetalert2";
import Fade from "react-reveal/Fade";
import ReCAPTCHA from "react-google-recaptcha";

import "bootstrap/dist/css/bootstrap.min.css";
import DotsLoader from "../../../src/components/DotsLoader/index.js";
import { createResource } from "../../api";
import { CONTACT } from "../../api/WebServices";
import { FaPhoneAlt, FaUserAlt, FaRegEnvelopeOpen } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullname] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState();
  const [captcha, setCaptcha] = useState(false);

  const [formErrors, setFormErrors] = useState({
    fullNameError: false,
    emailAddressError: false,
    phoneNumberError: false,
    messageError: false,
    captchaError: false,
  });

  const handleSubmit = async () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fullName) {
      setFormErrors({ ...formErrors, fullNameError: "Please enter full name" });
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else if (!emailAddress.match(emailRegex)) {
      setFormErrors({
        ...formErrors,
        emailAddressError: "Please enter email address",
      });
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else if (!phoneNumber) {
      setFormErrors({
        ...formErrors,
        phoneNumberError: "Please enter phone number",
      });
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else if (!message) {
      setFormErrors({ ...formErrors, messageError: "Please enter message" });
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else if (!captcha) {
      setFormErrors({ ...formErrors, captchaError: "Invalid" });
      setTimeout(() => {
        setFormErrors(false);
      }, 3000);
    } else {
      setIsLoading(true);
      try {
        let payload = {
          fullName,
          emailAddress,
          phoneNumber,
          message,
        };

        const result = await createResource(CONTACT, payload, "");
        Swal.fire({
          title: "Sent...!!!",
          text: "Your message sent successfully. We will contact you shortly..!",
          icon: "success",
          confirmButtonText: "OK..!",
        }).then((result) => {
          if (result.message) {
            Swal.fire("Sent!", "Your message sent successfully", "success");
          }
        });
        setFullname("");
        setEmailAddress("");
        setPhoneNumber("");
        setMessage("");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  const renderLoader = () => {
    return <DotsLoader isloading={isLoading} />;
  };

  const handleChange = (value) => {
    console.log("Captcha value:", value);
    // this.setState({ value });
    // // if value is null recaptcha expired
    if (value) setCaptcha(true);
  };

  return (
    <div className="bg">
      <Fade left  duration={1000}>
      <div className="container-main">
        <div className="row pt-5">
          <div className="col-lg-12 text-start">
            <h2 className="color-white mt-2">How to find us</h2>
            <p className="color-white contact-para">
              If you want to ask any question or share your thoughts, just fill
              the contact form. We will come back to you shortly.
            </p>
          </div>
        </div>
        <div className="contact-area text-start">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-Image">
                <div className="text-center">
                  <img
                    alt="logo"
                    style={{ width: "80%" }}
                    src="/images/contact.png"
                    className="mb-3 logo-contact"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <div className="d-flex">
                      <img
                        alt="logo"
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                        }}
                        src="/images/location.png"
                        className="mt-1 logo-contact"
                      />
                      <p className="color-white contact-p  ms-2">
                        <a
                          className="color-white td-none"
                          href="https://www.google.com/maps/place/IT+Solution24X7/@24.8723645,67.0536451,17z/data=!4m9!1m2!2m1!1sOffice+at+2nd+floor,+Plot+no.125L,+Block+2,+Khalid+bin+waleed+road,+PECHS,+Jamshed+Town,+Karachi+east.!3m5!1s0x3eb33f93bda572e3:0xa3950341de28cb6f!8m2!3d24.8723551!4d67.0558747!15sCmZPZmZpY2UgYXQgMm5kIGZsb29yLCBQbG90IG5vLjEyNUwsIEJsb2NrIDIsIEtoYWxpZCBiaW4gd2FsZWVkIHJvYWQsIFBFQ0hTLCBKYW1zaGVkIFRvd24sIEthcmFjaGkgZWFzdC6SARBzb2Z0d2FyZV9jb21wYW55"
                        >
                          Office at 2nd floor, Plot no.125L, Block 2, Khalid bin
                          waleed road, PECHS, Jamshed Town, Karachi east.
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex">
                      <img
                        alt="logo"
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                        }}
                        src="/images/email.png"
                        className="mt-1 logo-contact"
                      />
                      <p className="color-white contact-p  ms-2">
                        <a
                          className="color-white td-none"
                          href="mailto:info@objectual.pk"
                        >
                          info@objectual.pk
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex">
                      <img
                        alt="logo"
                        style={{
                          width: "15px",
                          height: "15px",
                          objectFit: "contain",
                        }}
                        src="/images/telephone.png"
                        className="mt-1 logo-contact"
                      />
                      <p className="color-white contact-p  ms-2">
                        +92 300 179-4141
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="color-white mb-2">Get In Touch</h2>
                  <div className="input-group mb-1 mt-1 ">
                    <div className="input-group-prepend ">
                      <span className="input-group-text" id="basic-addon1">
                        <FaUserAlt className="color-white" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="input-custom ic form-control"
                      placeholder="Full Name"
                      value={fullName}
                      required
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </div>
                  {formErrors.fullNameError && (
                    <div
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {formErrors.fullNameError}
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <div className="input-group mb-1 mt-1 ">
                    <div className="input-group-prepend ">
                      <span className="input-group-text" id="basic-addon1">
                        <FaRegEnvelopeOpen className="color-white" />
                      </span>
                    </div>
                    <input
                      type="text"
                      value={emailAddress}
                      className="input-custom ic form-control"
                      placeholder="Email Address"
                      required
                      onChange={(e) => {
                        setEmailAddress(e.target.value);
                      }}
                    />
                  </div>

                  {formErrors.emailAddressError && (
                    <div
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {formErrors.emailAddressError}
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <div className="input-group mb-1 mt-1 ">
                    <div className="input-group-prepend ">
                      <span className="input-group-text" id="basic-addon1">
                        <FaPhoneAlt className="color-white" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="input-custom ic form-control"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      required
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                  {formErrors.phoneNumberError && (
                    <div
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {formErrors.phoneNumberError}
                    </div>
                  )}
                </div>
                <div className="col-lg-12">
                  <textarea
                    row="10"
                    className="input-custom mt-1 textarea-height"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                  {formErrors.messageError && (
                    <div
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {formErrors.messageError}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-between">
                <div className="text-start">
                  <ReCAPTCHA
                    sitekey="6Lf48JkbAAAAAPkrZrcJPSXlSGjz4pgpul7_dJT-"
                    onChange={handleChange}
                  />
                  {formErrors.captchaError && (
                    <div
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      {formErrors.captchaError}
                    </div>
                  )}
                </div>
                <div className="text-end ">
                  <button
                    onClick={handleSubmit}
                    className="btn-contact btn btn-info btn-blue mt-3"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
      {renderLoader()}
    </div>
  );
};

export default Contact;
