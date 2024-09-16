import OverviewHeader from "../Overview/OverviewHeader";
import "./task.scss";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import Carousel from "../../components/General/Carousel";
import { newTaskData, timeLimitData } from "../../data/data";
import ProgressCard from "../../components/General/Card";


type Props = {}

const Task = ({}: Props) => {
  return (
    <div className="task">
      {/* header */}
      <OverviewHeader
        title={
          <>
            <h1>Explore Task</h1>
          </>
        }
      />
      <div className="task__filters">
        <div className="task__filters__search">
          <InputGroup>
            <InputRightElement>
              <CiSearch />
            </InputRightElement>
            <Input
              placeholder="Search Task"
              padding={`14px 28px`}
              fontSize={`12px`}
              type="text"
              borderColor={`#F5F5F7`}
            />
          </InputGroup>
        </div>
        <div className="task__filters__buttons">
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

      {/* carousels */}
      <div className="task__time">
        <Carousel
          title="Time Limit"
          slides={3}
          cards={timeLimitData.map((item, key) => {
            return (
              <ProgressCard
                image={item.image}
                base={item.base}
                progress={item.progress}
                time={item.time}
                title={item.title}
                background="#fff"
                padding="1rem"
                boxShadow="-2px 2px 15px -3px rgba(0,0,0,0.1)"
                key={key}
              />
            );
          })}
        />
      </div>
      <div className="task__new">
        <Carousel
          title="New Task"
          slides={3}
          cards={newTaskData.map((item, key) => {
            return (
              <ProgressCard
                image={item.image}
                base={item.base}
                progress={item.progress}
                time={item.time}
                title={item.title}
                background="#fff"
                padding="1rem"
                boxShadow="-2px 2px 15px -3px rgba(0,0,0,0.1)"
                key={key}
              />
            );
          })}
        />
      </div>
    </div>
  );
}

export default Task