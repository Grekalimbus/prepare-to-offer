"use client";
import { NavigationContext } from "@/app/modules/navBar/NavigationContext";
import Button from "@/app/ui/Buttons/Button";
import { useContext } from "react";

const MenuButton = () => {
    const { setIsNavigationActive } = useContext(NavigationContext);

    return <Button onClick={() => setIsNavigationActive(prev => !prev)} text={"Меню"} />;
};

export default MenuButton;
