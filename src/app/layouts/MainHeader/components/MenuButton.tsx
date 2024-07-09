"use client";
import Button from "@/app/ui/Buttons/Button";

const MenuButton = () => {
    const toggleMenu = () => {
        const navBar = document.querySelector("#commonNavBar") as HTMLElement;
        const shadow = document.querySelector("#shadow") as HTMLElement;
        navBar.classList.add("NavBar_show__lCOAW");
        navBar.classList.remove("NavBar_hidden__EVgVS");
        shadow.style.display = "block";
    };
    return <Button onClick={() => toggleMenu()} text={"Меню"} />;
};

export default MenuButton;
