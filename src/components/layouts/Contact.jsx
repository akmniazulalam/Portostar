import React from "react";
import ContactBG from "../../assets/Group 42.png";
import ContactH from "../ContactH";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";
import Container from "../Container";

const Contact = () => {
  return (
    <section className="mt-[400px] mb-32">
      <Container>
        <div
          className="py-[124px] bg-no-repeat bg-center bg-cover text-center rounded-3xl"
          style={{ backgroundImage: `url(${ContactBG})` }}>
          <ContactH contactH={"Interested Working With me? Let's connect!"} />
          <Button
            className={"py-5 mt-9 m-auto"}
            btnText={
              <>
                <HiOutlineMail className="inline-block mr-2 text-[18px]" />
                CONTACT ME
              </>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
