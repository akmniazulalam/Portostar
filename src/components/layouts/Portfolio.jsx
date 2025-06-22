import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Title from "../Title";
import Flex from "../Flex";
import Texts from "../Texts";
import Image from "../Image";
import PortfolioOne from "../../assets/camppusa.jpeg";
import PortfolioTwo from "../../assets/gawwi.jpeg";
import PortfolioThree from "../../assets/poja.jpeg";
import ServicesH from "../ServicesH";

const Portfolio = () => {
  return (
    <section className="pt-11 mb-32 relative">
      <Container>
        <Flex className={"grid grid-cols-2"}>
          <div className="">
            <Title titleText={"portfolio"} />
            <svg
              className="absolute top-0 left-[5%] -z-10"
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
            <Heading className={"pt-1"} heading={"Selected Works."} />
          </div>
          <Texts
            pText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
            }
          />
        </Flex>
        <Flex className={"grid grid-cols-2 grid-rows-2 gap-7 mt-14"}>
          <div className="bg-white rounded-3xl shadow-boxShadow">
            <Image
              className={"rounded-t-3xl"}
              Src={PortfolioOne}
              Alt={PortfolioOne}
            />
            <div className="p-7 bg-white rounded-b-3xl">
              <ServicesH
                className={""}
                serviceHeading={"Creativa - Elementor Template Kit"}
              />
              <Texts className={"font-medium mt-2"} pText={"UI/UX Design"} />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-boxShadow">
            <Image
              className={"rounded-t-3xl"}
              Src={PortfolioTwo}
              Alt={PortfolioTwo}
            />
            <div className="p-7 bg-white rounded-b-3xl">
              <ServicesH
                className={""}
                serviceHeading={"Nusapp - Elementor Template Kit"}
              />
              <Texts className={"font-medium mt-2"} pText={"UI/UX Design"} />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-boxShadow">
            <Image
              className={"rounded-t-3xl"}
              Src={PortfolioThree}
              Alt={PortfolioThree}
            />
            <div className="p-7 bg-white rounded-b-3xl">
              <ServicesH
                className={""}
                serviceHeading={"Webina - Elementor Template Kit"}
              />
              <Texts className={"font-medium mt-2"} pText={"UI/UX Design"} />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-boxShadow">
            <Image
              className={"rounded-t-3xl"}
              Src={PortfolioOne}
              Alt={PortfolioOne}
            />
            <div className="p-7 bg-white rounded-b-3xl">
              <ServicesH
                className={""}
                serviceHeading={"Marketin - Elementor Template Kit"}
              />
              <Texts className={"font-medium mt-2"} pText={"UI/UX Design"} />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Portfolio;
