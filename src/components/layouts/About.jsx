import React from "react";
import Container from "../Container";
import Texts from "../Texts";
import Title from "./../Title";
import Button from "../Button";
import rectangleImage from "../../assets/Rectangle.png";
import { HiOutlineMail } from "react-icons/hi";


const About = () => {
  return (
    <section className="mt-7 mb-12 py-[110px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${rectangleImage})`}}>
      <Container>
          <Title titleText={"GRAPHIC DESIGNER"}/>
          <h3 className="font-poppins font-bold text-6xl leading-20 text-[#333333] w-[482px] mt-5 mb-7">Graphic Designer With 10 Years Of Experience.</h3>
          <Texts className={"w-[584px]"} pText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."}/>
          <Button className={"py-5 mt-9"} btnText={<><HiOutlineMail className="inline-block mr-2 text-[18px]"/>CONTACT ME</>}/>
      </Container>
    </section>
  );
};

export default About;