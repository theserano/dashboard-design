import { ReactNode, Suspense } from "react";
import Menubar from "../Menubar/Menubar";
import "./layout.scss";
import Loader from "./Loader";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {

  return (
    <div className="layout">
      <div className="layout__menu">
        <Menubar />
      </div>
      <div className="layout__main">
          <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
    </div>
  );
};

export default Layout;
