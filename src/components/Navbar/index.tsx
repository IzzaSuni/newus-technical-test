import useTheme, { Theme } from "@/src/hooks/useTheme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenuIndex from "./navbar.atom";
import PilledItem from "../PilledItem";

const menus = ["Palindrome", "Foo Bar", "React"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuIndex, setMenuIndex] = useMenuIndex();
  return (
    <div className="p-4">
      <div className="flex items-center justify-left gap-2 relative lg:justify-center">
        {menus?.map((menu, index) => (
          <PilledItem
            isSelected={menuIndex === index}
            onClick={() => setMenuIndex(index)}
            menu={menu}
          />
        ))}
        <button
          className="absolute lg:right-8 right-[-16px]"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon
            color={theme == Theme.light ? "black" : "white"}
            icon={theme === Theme.dark ? faMoon : faSun}
          />
        </button>
      </div>
    </div>
  );
}
