import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import student from "../../assets/Student.svg";

type Props = {
  image: string;
  title: string;
  base: string;
  progress: number;
  time: string;
};

const ProgressCard = ({ image, title, base, progress, time }: Props) => {
  const [progressValue, setProgressValue] = useState([0, progress]);
  

  return (
    <div className="card">
      <img src={image} alt="image" />
      <div className="card__bottom">
        <div className="card__bottom__top">
          <h3>{title}</h3>
          <h4>{base}</h4>
        </div>
        <div className="card__bottom__middle">
          <div className="card__bottom__middle__text">
            <p>Progress</p>
            <span>{progressValue[1]}%</span>
          </div>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={progressValue}
            onChange={(val) => setProgressValue(val)}
            step={10}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              boxSize={3}
              backgroundColor={`#546FFF`}
              border={`1px solid #fff`}
              index={1}
            />
          </RangeSlider>
        </div>
        <div className="card__bottom__footer">
          <div className="card__bottom__footer__left">
            <CiClock2 />
            <p>{time}</p>
          </div>
          <img src={student} alt="images" />
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
