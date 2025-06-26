import Slider from "react-slick";
import "../clients.css"
import Container from "../Container";
import Image from "../Image";
import LogoOne from "../../assets/logo-6.png";
import LogoTwo from "../../assets/logo-7.png";
import LogoThree from "../../assets/logo-3.png";
import LogoFour from "../../assets/logo-5.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 320,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Clients = () => {
  return (
    <section className="pt-10 pb-20">
      <Container>
        <div className="my-css">
          <Slider {...settings}>
          <div>
            <Image className="" Src={LogoOne} Alt="LogoOne" />
          </div>
          <div>
            <Image className="" Src={LogoTwo} Alt="LogoTwo" />
          </div>
          <div>
            <Image className="" Src={LogoThree} Alt="LogoThree" />
          </div>
          <div>
            <Image className="" Src={LogoFour} Alt="LogoFour" />
          </div>
          <div>
            <Image className="" Src={LogoOne} Alt="LogoOne" />
          </div>
          <div>
            <Image className="" Src={LogoTwo} Alt="LogoTwo" />
          </div>
          <div>
            <Image className="" Src={LogoThree} Alt="LogoThree" />
          </div>
          <div>
            <Image className="" Src={LogoFour} Alt="LogoFour" />
          </div>
        </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
