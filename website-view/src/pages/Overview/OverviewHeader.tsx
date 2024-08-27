import { motion } from "framer-motion";
import "./overview.scss";
import notification from "../../assets/notif.svg";
import profilePicture from "../../assets/Profil.svg";


type Props = {}

const OverviewHeader = ({}: Props) => {
  return (
    <div className="overview__main__header">
      <motion.div className="overview__main__header__left">
        <h1>Hi, Zoe Serano</h1>
        <p>Let's finish your task today!</p>
      </motion.div>
      <div className="overview__main__header__right">
        <img src={notification} alt="notifications" />
        <img src={profilePicture} alt="profile picture" />
      </div>
    </div>
  );
}

export default OverviewHeader