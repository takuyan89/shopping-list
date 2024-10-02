import { FaRegSquare, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItmeType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItmeType[] = [
    {
      id: 1,
      label: "Storege Lists",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "Shopping Lists",
      link: "/shoppingList",
      icon: <FaRegSquare className="size-5" />,
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
