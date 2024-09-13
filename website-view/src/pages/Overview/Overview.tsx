import ActivityChart from '../../components/General/ActivityChart';
import MyDatePicker from '../../components/General/DatePicker';
import OverviewHeader from './OverviewHeader';
import './overview.scss';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

type Props = {}

const Overview = ({}: Props) => {
  return (
    <div className="overview">
      <div className="overview__main">
        {/* header */}
        <OverviewHeader />

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
                  <CircularProgressLabel top={`40%`}  fontSize={`14px`} color={`#fff`}>
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
      </div>
      <div className="overview__side">
        <div className="overview__side__date">
          <MyDatePicker />
        </div>
      </div>
    </div>
  );
}

export default Overview