import { ReactNode } from "react";
import "./general.scss";
import Slider from "react-slick";


type Props = {
    title: string,
    cards: ReactNode
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ title, cards }: Props) => {

    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <div className="carousel">
        <h1 className="carousel__title">{title}</h1>
      <Slider {...settings}>
        {cards}
      </Slider>
    </div>
  );
}

export default Carousel