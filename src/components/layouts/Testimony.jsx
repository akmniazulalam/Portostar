import React from "react";
import Title from "../Title";
import Heading from "../Heading";
import Texts from "../Texts";
import Flex from "../Flex";
import Container from "../Container";
import { FaRegStar } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";

const Testimony = () => {
  return (
    <section className="bg-bannerBg h-[469px] pt-36 relative">
      <Container>
        <div className="text-center">
        <Title className={"relative z-50"} titleText={"TESTIMONY"} />
        <svg
          className="absolute top-[140px] left-1/2 -translate-1/2"
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
        <Heading className={"my-5"} heading={"What Our Clients Say."} />
        <Texts
          className={"w-[580px] m-auto"}
          pText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
          }
        />
      </div>
      <Flex className={"grid grid-cols-2 gap-x-9 mt-12"}>
        <div className="bg-white p-10 rounded-3xl shadow-reviewBoxShadow">
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <p className="font-poppins font-medium text-[18px] leading-7 w-[88%] py-7">Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.</p>
           <Flex>
            <div className="h-16 w-16 bg-primary rounded-full"></div>
            <div className="ml-5">
                <h5 className="font-poppins font-medium text-[18px]">David Gueta</h5>
            <Texts pText={"UI/UX Designer"}/>
            </div>
            <IoChatboxOutline className="text-primary text-[45px] ml-auto"/>
           </Flex>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-reviewBoxShadow">
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <FaRegStar className="inline-block text-star text-2xl mr-1"/>
           <p className="font-poppins font-medium text-[18px] leading-7 w-[88%] py-7">Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem, porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.</p>
           <Flex>
            <div className="h-16 w-16 bg-primary rounded-full"></div>
            <div className="ml-5">
                <h5 className="font-poppins font-medium text-[18px]">David Gueta</h5>
            <Texts pText={"UI/UX Designer"}/>
            </div>
            <IoChatboxOutline className="text-primary text-[45px] ml-auto"/>
           </Flex>
        </div>
      </Flex>
      </Container>
    </section>
  );
};

export default Testimony;
