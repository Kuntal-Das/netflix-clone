import React, { useRef, useState } from "react";
import { Container, Group, Logo, StyledHeader, Link, Search, SearchIcon, SearchInput, ButtonLink } from "./styles/newHeaderStyles";

export default function NewHeader({ children, restProps }) {

    return (
        <StyledHeader {...restProps}>{children}</StyledHeader>
    )
}

NewHeader.Container = ({children, ...restProps}) => (
    <Container {...restProps}>{children}</Container>
)

NewHeader.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

NewHeader.Logo = ({ to, ...restProps }) => (
    <Link to={to} nostyle="true" >
        <Logo {...restProps} />
    </Link>
);

NewHeader.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

NewHeader.ButtonLink = ({ children, ...restProps }) => (
    <ButtonLink {...restProps}>{children}</ButtonLink>
);

NewHeader.Search = function NewHeaderSearch({
    searchTerm,
    setSearchTerm,
    slides,
    ...restProps
}) {
    // const [searchTerm, setSearchTerm] = useState("");
    const srcInputRef = useRef(null)
    const [searchActive, setSearchActive] = useState(false);
    const toggleSearchBar = () => {
        if (searchTerm) setSearchTerm("");
        setSearchActive(!searchActive);
        if(!searchActive) srcInputRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`TODO: searchbar : handleSubmit`)
    }

    return (
        <Search {...restProps} onSubmit={ handleSubmit }>
            <SearchIcon onClick={toggleSearchBar} type="button">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                ref={srcInputRef}
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    );
}