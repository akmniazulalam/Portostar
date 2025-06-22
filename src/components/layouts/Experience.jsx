import React from "react";
import Container from "../Container";
import Flex from "./../Flex";
import ExperienceH from "../ExperienceH";
import Texts from "../Texts";



const Experience = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="text-center">
          <Flex className={"grid grid-cols-4"}>
            <div className="">
              <ExperienceH className={""} experienceHeading={"100+"} />
              <Texts className={"font-medium uppercase pt-2"} pText={"Projects"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={"24"} />
              <Texts className={"font-medium uppercase pt-2"} pText={"WINNING AWARD"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={"70+"} />
              <Texts className={"font-medium uppercase pt-2"} pText={"HAPPY CLIENTS"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={"10"} />
              <Texts className={"font-medium uppercase pt-2"} pText={"YEAR EXPERIENCE"}/>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
