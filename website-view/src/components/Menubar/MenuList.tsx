import { Link } from "react-router-dom"
import { menuProps } from "../../data/menu_data"
import { motion } from "framer-motion";


type Props = {
  data: menuProps[]
}

const MenuList = ({ data }: Props) => {
  return (
    <div>
      {data.map((item, key) => (
        <Link key={key} to={item.link}>
          <motion.div>
            <item.icon />
            {item.title}
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default MenuList