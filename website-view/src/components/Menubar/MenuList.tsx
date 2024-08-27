import { Link, useLocation } from "react-router-dom"
import { menuProps } from "../../data/menu_data"
import { motion } from "framer-motion";
import "./menubar.scss";


type Props = {
  data: menuProps[]
}

const MenuList = ({ data }: Props) => {

  const location = useLocation();

  return (
    <div className="menubar__top__lists">
      {data.map((item, key) => (
        <Link
          className={`menubar__top__lists__item ${
            location.pathname === item.link ? "link__active" : ""
          } `}
          key={key}
          to={item.link}
        >
          <motion.div className="menubar__top__lists__item__each">
            <span>
              <item.icon />
            </span>
            <p>{item.title}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default MenuList