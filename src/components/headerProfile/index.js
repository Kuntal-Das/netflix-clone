import React, { createContext, useContext, useState } from "react";
import { DropDown, Group, Link, Picture, Profile } from "./styles/headerProfileStyles";

const VisibilityContext = createContext();

export default function HeaderProfile({ children, ...restProps }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        console.log("toggleVisibility");
        setIsVisible(prevVal => !prevVal);
    }
    return (
        <VisibilityContext.Provider value={{ isVisible }}>
            <Profile onClick={toggleVisibility} {...restProps}>{children}</Profile>
        </VisibilityContext.Provider>
    )
}

HeaderProfile.Picture = ({ ...restProps }) => (
    <Picture {...restProps} />
)

HeaderProfile.Link = ({ children, ...restProps }) => <Link {...restProps}>{children}</Link>

HeaderProfile.Group = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>

HeaderProfile.Dropdown = function HeaderDropDown({ children, ...restProps }) {
    const { isVisible } = useContext(VisibilityContext);
    return <DropDown isVisible={isVisible} {...restProps}> {children} </DropDown>
}