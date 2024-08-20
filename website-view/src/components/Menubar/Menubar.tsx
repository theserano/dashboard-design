import { motion } from "framer-motion";
import "./menubar.scss";
import logo from "../../assets/book-square.svg";
import { menuItems } from "../../data/menu_data";
import MenuList from "./MenuList";
import question from "../../assets/Question.svg";


type Props = {}


const Menubar = ({}: Props) => {
  return (
    <div className="menubar">
      <div className="menubar__top">
        <motion.div className="menubar__top__logo">
          <img src={logo} alt="logo" />
          <h1>DNX</h1>
        </motion.div>
        <MenuList data={menuItems} />
      </div>
      <div className="menubar__bottom">
        <div className="menubar__bottom__top">
          <h4>Help center</h4>
          <p>
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>
        <motion.button className="menubar__bottom__btn">Go to help center</motion.button>
        <img src={question} alt="stuff" />
      </div>
    </div>
  );
}

export default Menubar