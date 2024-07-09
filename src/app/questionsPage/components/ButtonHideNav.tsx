"use client";

import ButtonHide from "@/app/ui/Buttons/ButtonHide";

const ButtonHideNav = () => {
    const handleHideNav = () => {
        const nav = document.querySelector("#tecnhologiesNavBar") as HTMLElement;
        nav.style.display = "none";
    };
    return <ButtonHide onClick={handleHideNav} text="Скрыть" />;
};

export default ButtonHideNav;
