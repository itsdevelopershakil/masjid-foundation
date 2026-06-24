"use client";
import LogoBangla from "@/public/logo-bangla.png";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import ScrollLink from "../components/ScrollLink";
import { sidebarLinks } from "../constants/navLinks";
import { useAppContext } from "../context/AppContext";
import useOutsideClick from "../hooks/useOutsideClick";

const SidePanel = () => {
    const { selectedLanguage, toggleMenu, setToggleMenu } = useAppContext();

    const boxRef = useRef(null);

    useOutsideClick(boxRef, () => {
        if (toggleMenu) {
            setToggleMenu(false);
        }
    });
    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-black/70 z-99999999 sm:hidden block ${toggleMenu ? "visible opacity-100" : "invisible opacity-0 duration-300"}`}
        >
            <div
                ref={boxRef}
                className={`w-[80%] bg-bg h-full ${toggleMenu ? "translate-x-0" : "-translate-x-full"} duration-400`}
            >
                <div className="px-4 py-2 border-b border-primary/20 flex justify-between items-center bg-container">
                    <Image
                        src={selectedLanguage === "bn" ? LogoBangla : Logo}
                        alt="Brand Logo"
                        className="w-30 max-h-10 object-contain"
                    />
                    <button
                        type="button"
                        className="flex"
                        onClick={() => setToggleMenu(false)}
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>
                <ul
                    className={`p-4 flex flex-col gap-2.5 ${selectedLanguage === "bn" ? "**:font-semibold **:font-noirrit" : "**:font-bold **:font-philosopher"} **:text-text **:leading-7.5`}
                >
                    {sidebarLinks[selectedLanguage].map((link) => (
                        <li key={link.id}>
                            <ScrollLink
                                href={link.link}
                                scrollId={link.scrollId}
                                onClick={() => setToggleMenu(false)}
                            >
                                {link.name}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
