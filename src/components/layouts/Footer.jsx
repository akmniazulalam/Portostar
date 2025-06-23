import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import LogoTwo from "../../assets/LOGO (1).png";
import Texts from "../Texts";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import Menu from "../Menu";

const Footer = () => {
  return (
    <section>
      <Container>
        <div className="pt-[113px] px-[150px] pb-[68px] bg-[#333333] rounded-t-3xl">
          <Flex className={"justify-between"}>
            <div className="">
              <Image className={"pb-7"} Src={LogoTwo} Alt={LogoTwo} />
              <Texts
                pText={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit."
                }
                className={"text-white w-[369px]"}
              />
            </div>
            <div className="">
              <div className="">
                <HiOutlineMail className="inline-block mr-3 text-white text-[18px]" />
                <a
                  href="mailto:inquiry@portostar.com"
                  className="underline text-white font-poppins text-[16px]">
                  inquiry@portostar.com
                </a>
              </div>
              <div className="mt-5 mb-7">
                <FiPhone className="inline-block mr-3 text-white text-[18px]" />
                <a
                  href="tel:(001) 1231 3435"
                  className="text-white font-poppins text-[16px]">
                  (001) 1231 3435
                </a>
              </div>
              <div className="">
                <FaFacebook className="text-white inline-block mr-7 text-[28px]" />
                <FiInstagram className="text-white inline-block mr-7 text-[28px]" />
                <FaLinkedinIn className="text-white inline-block mr-7 text-[28px]" />
                <FiDribbble className="text-white inline-block text-[28px]" />
              </div>
            </div>
          </Flex>
          <hr className="text-[#404040] mt-[80px] mb-[52px]"/>
          <Flex className={"justify-between"}>
            <Menu>
            <li className="font-poppins text-[14px] text-white uppercase inline-block pr-12">Home</li>
            <li className="font-poppins text-[14px] text-white uppercase inline-block pr-12">About Us</li>
            <li className="font-poppins text-[14px] text-white uppercase inline-block pr-12">services</li>
            <li className="font-poppins text-[14px] text-white uppercase inline-block">works</li>
          </Menu>
          <Texts className={"text-white"} pText={<>&copy; All Right Reserved</>}/>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
