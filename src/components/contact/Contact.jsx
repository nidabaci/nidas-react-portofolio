import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  // const handleSubmit = (values, { setSubmitting, resetForm }) => {
  //   fetch("/send-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ...values,
  //       recipientEmail: "jonida.baci99@outlook.com",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       resetForm();
  //       setSubmitting(false);
  //     })
  //     .catch((error) => {
  //       alert("Error:", error);
  //       setSubmitting(false);
  //     });
  // };

  // const validateForm = (values) => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
  //     errors.email = "Invalid email format";
  //   }

  //   if (!values.message) {
  //     errors.message = "Message is required";
  //   }

  //   return errors;
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container services__container">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>jonida.baci99@outlook.com</h5>
          <a href="mailto: jonida.baci99@outlook.com" target="__blank">
            Click here to send email
          </a>
        </article>

        <article className="contact__option">
          <BsLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          <h5>Let's connect</h5>
          <a href="https://www.linkedin.com/in/jonida-baci99/" target="__blank">
            My LinkedIn profile
          </a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>Let's talk bussiness</h5>
          <a
            href="https://api.whatsapp.com/send?phone=355694718883"
            target="__blank"
          >
            Send a whatsapp Message
          </a>
        </article>

        {/* <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form>
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Your Full Name Goes Here"
                required
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Your Email Goes Here"
                required
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                cols="30"
                rows="10"
                placeholder="Type Your Message Here..."
                required
              />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Email
            </button>
          </Form>
        </Formik> */}
      </div>
    </section>
  );
};

export default Contact;
