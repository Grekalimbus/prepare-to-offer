"use client";
import ButtonHide from "@/app/ui/Buttons/ButtonHide";

const ButtonHideMenu = () => {
    const toggleMenu = () => {
        const navBar = document.querySelector("#commonNavBar") as HTMLElement;
        const shadow = document.querySelector("#shadow") as HTMLElement;
        navBar.classList.add("NavBar_hidden__EVgVS");
        navBar.classList.remove("NavBar_show__lCOAW");
        shadow.style.display = "none";
    };
    return <ButtonHide onClick={() => toggleMenu()} text={"Скрыть"} />;
};

export default ButtonHideMenu;
