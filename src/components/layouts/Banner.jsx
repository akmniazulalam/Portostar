import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Title from "./../Title";
import BannerHeading from "../BannerHeading";
import Image from "../Image";
import Avatar from "../../assets/avatar.png"
import Button from "../Button";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";

const Banner = () => {
  return (
    <section className="mt-9">
      <Container>
        <Flex>
          <div className="">
            <Title titleText={"SAKIB AL HASAN"} />
            <BannerHeading
              className={"mt-6 w-[479px]"}
              bannerHeading={
                "Hello, my name’s Sakib. I’m MERN Stack Developer."
              }
            />
            <div className="flex gap-x-5 mt-11">
                <Button className={"py-5"} btnText={<><HiOutlineMail className="inline-block mr-3 text-[18px]"/> CONTACT ME</>}/>
                <button className="py-5 px-3 text-[#333333] font-poppins font-medium text-[14px] flex items-center cursor-pointer"><HiOutlineDownload className="inline-block text-[22px] mr-2"/> DOWNLOAD CV</button>
            </div>
          </div>
          <div className="">
            <Image Src={Avatar} Alt={Avatar}/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
