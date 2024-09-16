import ActivityChart from '../../components/General/ActivityChart';
import ProgressCard, { UserCard } from '../../components/General/Card';
import MyDatePicker from '../../components/General/DatePicker';
import OverviewHeader from './OverviewHeader';
import './overview.scss';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Task1 from "../../assets/task1.svg";
import { monthlyMentorsData, upcomingTaskData } from '../../data/data';
import Carousel from '../../components/General/Carousel';

type Props = {}

const progressData = {
  image: Task1,
  title: "Creating Awesome Mobile Apps",
  base: "UI /UX Designer",
  progress: 90,
  time: '1 Hour',
};

const Overview = ({}: Props) => {
  return (
    <div className="overview">
      {/* main */}
      <div className="overview__main">
        {/* header */}
        <OverviewHeader
          title={
            <>
              <h1>Hi, Zoe Serano</h1>
              <p>Let's finish your task today!</p>
            </>
          }
        />

        {/* charts */}
        <div className="overview__main__charts">
          {/* running tasks */}
          <div className="overview__main__charts__progress">
            <div>
              <h4 className="overview__main__charts__progress__h4">
                Running tasks
              </h4>
              <h1 className="overview__main__charts__progress__h1">65</h1>
            </div>
            <div className="overview__main__charts__progress__measure">
              <span>
                <CircularProgress
                  size="80px"
                  thickness="4px"
                  value={40}
                  color="#546FFF"
                >
                  <CircularProgressLabel fontSize={`14px`} color={`#fff`}>
                    40%
                  </CircularProgressLabel>
                </CircularProgress>
              </span>
              <div className="overview__main__charts__progress__measure__div">
                <h1>100</h1>
                <p>Task</p>
              </div>
            </div>
          </div>
          {/* activity chart */}
          <div className="overview__main__charts__activity">
            <ActivityChart />
          </div>
        </div>

        {/* monthly mentors */}
        <div className="overview__main__mentor">
          <Carousel
            title="Monthly Mentors"
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

        {/* upcoming listeners */}
        <div className="overview__main__upcoming">
          <Carousel
            title="Upcoming Tasks"
            cards={upcomingTaskData.map((item, key) => {
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

      {/* side */}
      <div className="overview__side">
        <div className="overview__side__date">
          <MyDatePicker />
        </div>
        <div className="overview__side__task">
          <h4 className="overview__side__task__h1">Task Today</h4>
          <div className="overview__side__task__card">
            <ProgressCard
              time={progressData.time}
              image={progressData.image}
              base={progressData.base}
              progress={progressData.progress}
              title={progressData.title}
              width="100%"
            />
          </div>
          <hr
            style={{ margin: "auto", width: "90%", borderColor: "#F5F5F7" }}
          />
          <div className="overview__side__list">
            <div className="overview__side__list__top">
              <h3>Detail Task</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="overview__side__list__middle">
              <div className="overview__side__list__middle__each">
                <div>1</div>
                <p>Understanding the tools in Figma</p>
              </div>
              <div className="overview__side__list__middle__each">
                <div>2</div>
                <p>Understand the basics of making designs</p>
              </div>
              <div className="overview__side__list__middle__each">
                <div>3</div>
                <p>Design a mobile application with figma</p>
              </div>
            </div>
            <button className="overview__side__list__bottom">
              Go To Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview