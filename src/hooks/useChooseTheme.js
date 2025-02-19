import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../assets/contexts/ThemeContext";

export default function useChooseTheme() {
  const [isOpenChooseTheme, setIsOpenChooseTheme] = useState(false);
  const { handleThemeChange } = useContext(ThemeContext);

  const handleClickChooseTheme = () => {
    setIsOpenChooseTheme(!isOpenChooseTheme);
  };

  const handleTheme = (e) => {
    const element = e.target;
    const id = element.id;
    const theme = id.split("-")[0];
    handleThemeChange(theme);
    setIsOpenChooseTheme(false);
  };

  return [isOpenChooseTheme, handleClickChooseTheme, handleTheme];
}
