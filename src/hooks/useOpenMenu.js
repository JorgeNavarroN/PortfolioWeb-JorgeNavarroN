import { useState } from "react";

export default function useOpenMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return [isOpenMenu, handleClickMenu];
}
