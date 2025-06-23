import React from "react";
import Container from "../Container";
import Title from "../Title";
import Heading from "../Heading";
import Texts from "../Texts";
import Flex from "../Flex";
import Image from "../Image";
import UI from "../../assets/Group 21.png"
import Product from "../../assets/Group 19.png"
import Motion from "../../assets/Group 27.png"
import ServicesH from "../ServicesH";

const Services = () => {
  return (
    <>
      <section className="pt-14 pb-[120px] relative">
        <Container>
          <Title className={"text-center"} titleText={"services"} />
          <svg
            className="absolute top-5 left-1/2 -z-10"
            width="68"
            height="70"
            viewBox="0 0 68 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.84343 25.5317C0.128886 23.9846 0.732135 21.1616 2.92928 20.4503L63.9 0.712653C66.0971 0.00138519 68.2403 1.93532 67.7577 4.19373L54.3657 66.8647C53.8831 69.1232 51.1366 70.0122 49.4221 68.4651L1.84343 25.5317Z"
              fill="#F1F0FB"
            />
          </svg>
          <Heading className={"text-center"} heading={"What I Do For My Customer."}/>
          <Texts className={"w-[600px] m-auto text-center pt-5"} pText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."}/>
          <Flex className={"grid grid-cols-3 gap-x-9 mt-12"}>
            <div className="py-12 px-9 bg-white rounded-3xl text-center shadow-boxShadow hover:bg-[#f9f9fc] transition-all duration-300">
              <Image Src={UI} Alt={UI} className={"inline-block"}/>
              <ServicesH serviceHeading={"UI/UX Design"} className={"mt-7"}/>
              <Texts className={"mt-5 "} pText={"lorem ipsum dolor sit amet consectur adi pising leo"}/>
            </div>
            <div className="py-12 px-9 bg-white rounded-3xl text-center shadow-boxShadow hover:bg-[#f9f9fc] transition-all duration-300">
              <Image Src={Product} Alt={Product} className={"inline-block"}/>
              <ServicesH serviceHeading={"Product Design"} className={"mt-7"}/>
              <Texts className={"mt-5 "} pText={"lorem ipsum dolor sit amet consectur adi pising leo"}/>
            </div>
            <div className="py-12 px-9 bg-white rounded-3xl text-center shadow-boxShadow hover:bg-[#f9f9fc] transition-all duration-300">
              <Image Src={Motion} Alt={Motion} className={"inline-block"}/>
              <ServicesH serviceHeading={"Motion Graphics"} className={"mt-7"}/>
              <Texts className={"mt-5 "} pText={"lorem ipsum dolor sit amet consectur adi pising leo"}/>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Services;
