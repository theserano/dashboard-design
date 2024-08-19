import { ReactNode } from "react";
import Menubar from "../Menubar/Menubar";
import "./layout.scss";

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
        <div className="layout__menu">
            <Menubar />
        </div>
        <div className="layout__main">
            {children}
        </div>
    </div>
  )
}

export default Layout