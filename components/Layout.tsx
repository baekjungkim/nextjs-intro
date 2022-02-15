import { ReactNode } from "react";
import NavBar from "./NavBar";
import Seo from "./Seo";

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Seo />
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;

interface ILayoutProps {
  children: ReactNode;
}
