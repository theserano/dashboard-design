import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import student from "../../assets/Student.svg";
import { PiNotepadLight } from "react-icons/pi";
import Star from "../../assets/Star.svg";

type Props = {
  image: string;
  title: string;
  base: string;
  progress: number;
  time: string;
  width?: string;
  padding?: string;
  background?: string;
  boxShadow?: string;
};

export type UserProps = {
  image: string;
  name: string;
  title: string;
  followed: boolean;
  task: number;
  review: string;
}
export type MentorProps = {
  image: string;
  name: string;
  title: string;
  followed: boolean;
  task: number;
  review: string;
  text: string;
}

const ProgressCard = ({ image, title, base, progress, time, width, padding, background, boxShadow }: Props) => {
  const [progressValue, setProgressValue] = useState([0, progress]);
  

  return (
    <div className="card" style={{maxWidth: width && width, backgroundColor: background && background, padding: padding && padding, boxShadow: boxShadow && boxShadow}}>
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


export const UserCard = ({ image, title, name, followed, task, review }: UserProps) => {
  return (
    <div className="userCard">
      <div className="userCard__top">
        <div className="userCard__top__left">
          <img src={image} alt="" className="userCard__top__left__img" />
          <div className="userCard__top__left__text">
            <h4>{name}</h4>
            <h5>{title}</h5>
          </div>
        </div>
        <div className="userCard__top__right">
          {followed ? (
            <p className="userCard__top__right__followed">Followed</p>
          ) : (
            <p className="userCard__top__right__follow">+Follow</p>
          )}
        </div>
      </div>
      <div className="userCard__bottom">
        <div className="userCard__bottom__left">
          <PiNotepadLight />
          <p>{task} Tasks</p>
        </div>
        <div className="userCard__bottom__right">
          <img src={Star} alt="star" />
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}

export const MentorCard = ({ image, title, name, followed, task, review, text }: MentorProps) => {
  return (
    <div className="userCard">
      <div className="userCard__top">
        <div className="userCard__top__left">
          <img src={image} alt="" className="userCard__top__left__img" />
          <div className="userCard__top__left__text">
            <h4 className="mentor__h1">{name}</h4>
            <h5 className="mentor__h5">{title}</h5>
          </div>
        </div>
        <div className="userCard__top__right">
          {followed ? (
            <p className="userCard__top__right__followed">Followed</p>
          ) : (
            <p className="userCard__top__right__follow">+Follow</p>
          )}
        </div>
      </div>
      <div className="userCard__middle">{text}</div>
      <div className="userCard__bottom">
        <div className="userCard__bottom__left">
          <PiNotepadLight />
          <p className="mentor__taskP">{task} Tasks</p>
        </div>
        <div className="userCard__bottom__right">
          <img src={Star} alt="star" />
          <p className="mentor__taskP" >{review}</p>
        </div>
      </div>
    </div>
  );
}


export default ProgressCard;
