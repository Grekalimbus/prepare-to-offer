"use client";
const ButtonHideNav = () => {
    const handleHideNav = () => {
        const nav = document.querySelector("#tecnhologiesNavBar") as HTMLElement;
        nav.style.display = "none";
    };
    return <button onClick={handleHideNav}>ButtonHideNav</button>;
};

export default ButtonHideNav;
