import React from "react";
import ContactCard from "../components/Contactcard";
import styles from "./contact.module.css";
import ContactForm from "../components/Contactform";

function page() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28144.489383192536!2d77.30493096848254!3d28.14462589493137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd3ad98a3489f%3A0x859799eaeabce205!2sPalwal%2C%20Haryana%20121102!5e0!3m2!1sen!2sin!4v1682945664542!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{ border: 0 }}
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default page;
