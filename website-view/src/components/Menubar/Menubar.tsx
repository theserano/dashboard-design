import { motion } from "framer-motion";
import "./menubar.scss";
import logo from "../../assets/book-square.svg";
import { menuItems } from "../../data/menu_data";
import MenuList from "./MenuList";
import question from "../../assets/Question.svg";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";



type Props = {}


const Menubar = ({}: Props) => {

  const [active, setActive] = useState(true);

  const showMenu = () => {
    setActive(!active);
  }

  return (
    <div>
      <div onClick={showMenu} className="menubar__icon">
        <CgMenuGridO />
      </div>
      <div className={`menubar ${active ? 'menu__active' : ''}`}>
        <div className="menubar__top">
          <motion.div className="menubar__top__logo">
            <img src={logo} alt="logo" />
            <h1 className={`${active ? 'h1__active' : ''}`}>DNX</h1>
          </motion.div>
          <MenuList active={active} data={menuItems} />
        </div>
        <div className={`menubar__bottom ${active ? 'help__active' : ''}`}>
          <div className="menubar__bottom__top">
            <h4>Help center</h4>
            <p>
              Having Trouble in Learning. Please contact us for more questions.
            </p>
          </div>
          <motion.button className="menubar__bottom__btn">
            Go to help center
          </motion.button>
          <img src={question} alt="stuff" />
        </div>
      </div>
    </div>
  );
}

export default Menubar