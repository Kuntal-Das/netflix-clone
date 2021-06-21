import React, { createContext, useContext, useState } from "react";
import { DropDown, Group, Linklike, Picture, Profile, Text} from "./styles/headerProfileStyles";

const VisibilityContext = createContext();

export default function HeaderProfile({ children, ...restProps }) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(prevVal => !prevVal);
    return (
        <VisibilityContext.Provider value={{ isVisible }}>
            <Profile onClick={toggleVisibility} {...restProps}>{children}</Profile>
        </VisibilityContext.Provider>
    )
}

HeaderProfile.Picture = ({ ...restProps }) => (
    <Picture {...restProps} />
)

HeaderProfile.Linklike = ({ children, ...restProps }) => <Linklike {...restProps}>{children}</Linklike>

HeaderProfile.Group = ({ children, ...restProps }) => <Group {...restProps}>{children}</Group>

HeaderProfile.Text = ({children, ...restProps}) => <Text {...restProps}>{children}</Text>

HeaderProfile.Dropdown = function HeaderDropDown({ children, ...restProps }) {
    const { isVisible } = useContext(VisibilityContext);
    return <DropDown isVisible={isVisible} {...restProps}> {children} </DropDown>
}