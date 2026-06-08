"use client";
import { LuMenu } from "react-icons/lu";
import { useAppContext } from "../context/AppContext";

const ToggleMenuButton = () => {
  const { toggleMenu, setToggleMenu } = useAppContext();

  return (
    <button
      className="flex sm:hidden"
      id="menu"
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <LuMenu className="text-2xl text-text" />
    </button>
  );
};

export default ToggleMenuButton;
