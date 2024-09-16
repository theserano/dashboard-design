import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import OverviewHeader from "../Overview/OverviewHeader";
import './mentors.scss';
import Carousel from "../../components/General/Carousel";
import { MentorCard, UserCard } from "../../components/General/Card";
import { mentorsData, monthlyMentorsData } from "../../data/data";

type Props = {};

const Mentors = ({}: Props) => {
  return (
    <div className="mentors">
      {/* header */}
      <OverviewHeader
        title={
          <>
            <h1>Explore Mentors</h1>
          </>
        }
      />
      <div className="mentors__filters">
        <div className="mentors__filters__search">
          <InputGroup>
            <InputRightElement>
              <CiSearch />
            </InputRightElement>
            <Input
              placeholder="Search mentors"
              padding={`14px 28px`}
              fontSize={`12px`}
              type="text"
              borderColor={`#F5F5F7`}
            />
          </InputGroup>
        </div>
        <div className="mentors__filters__buttons">
          <Button
            leftIcon={<BiCategory color="#8E92BC" fontSize={`20px`} />}
            variant="outline"
            borderColor={`#F5F5F7`}
            fontSize={`12px`}
          >
            Category
          </Button>
          <Button
            leftIcon={<MdOutlineSort color="#8E92BC" fontSize={`20px`} />}
            variant="outline"
            borderColor={`#F5F5F7`}
            fontSize={`12px`}
          >
            Sort By: Deadline
          </Button>
        </div>
      </div>

      {/* Recent Mentors */}
      <div className="overview__main__mentor">
        <Carousel
          title="Recent Mentors"
          cards={monthlyMentorsData.map((item, key) => {
            return (
              <UserCard
                name={item.name}
                title={item.title}
                followed={item.followed}
                image={item.image}
                review={item.review}
                task={item.task}
                key={key}
              />
            );
          })}
        />
      </div>

      {/* Mentors list */}
      <h1 className="mentors__heading">Mentors</h1>

      <div className="mentors__group">
        {mentorsData.map((item, key) => {
          return (
            <MentorCard
              name={item.name}
              title={item.title}
              followed={item.followed}
              image={item.image}
              review={item.review}
              task={item.task}
              text={item.text}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
