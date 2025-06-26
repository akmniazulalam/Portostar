import React from "react";
import Container from "../Container";
import Flex from "./../Flex";
import ExperienceH from "../ExperienceH";
import Texts from "../Texts";
import CountUp from 'react-countup'


const Experience = () => {
  return (
    <section className="my-20">
      <Container>
        <div className="text-center">
          <Flex className={"grid grid-cols-4"}>
            <div className="">
              <ExperienceH className={""} experienceHeading={<CountUp start={0} end={100} duration={1.5} enableScrollSpy suffix="+"/>} />
              <Texts className={"font-medium uppercase pt-2"} pText={"Projects"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={<CountUp start={0} end={24} duration={1.5} enableScrollSpy/>} />
              <Texts className={"font-medium uppercase pt-2"} pText={"WINNING AWARD"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={<><CountUp start={0} end={70} duration={1.5} enableScrollSpy/>+</>} />
              <Texts className={"font-medium uppercase pt-2"} pText={"HAPPY CLIENTS"}/>
            </div>
            <div className="">
              <ExperienceH className={""} experienceHeading={<CountUp start={0} end={10} duration={1.5} enableScrollSpy/>} />
              <Texts className={"font-medium uppercase pt-2"} pText={"YEAR EXPERIENCE"}/>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
