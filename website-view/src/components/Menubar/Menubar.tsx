import { motion } from "framer-motion";
import "./menubar.scss";
import logo from "../../assets/book-square.svg";
import { menuItems } from "../../data/menu_data";
import MenuList from "./MenuList";


type Props = {}


const Menubar = ({}: Props) => {
  return (
    <div className="menubar">
      <div className="menubar__top">
        <motion.div className="menubar__top__logo">
          <img src={logo} alt="logo" />
          <h1>DNX</h1>
        </motion.div>
        <MenuList data={menuItems}/>
      </div>
    </div>
  );
}

export default Menubar