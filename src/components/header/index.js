import React, { useRef, useState } from "react";
import { Container, Group, Logo, StyledHeader, Link, Search, SearchIcon, SearchInput } from "./styles/headerStyles";

export default function Header({ children, restProps }) {

    return (
        <StyledHeader {...restProps}>{children}</StyledHeader>
    )
}

Header.Container = ({children,...restProps}) => (
    <Container {...restProps}>{ children }</Container>
)

Header.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

Header.Logo = ({ to, ...restProps }) => (
    <Link to={to} noStyle={true} >
        <Logo {...restProps} />
    </Link>
);

Header.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

Header.Search = function NewHeaderSearch({
    searchTerm,
    setSearchTerm,
    slides,
    ...restProps
}) {
    // const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);
    const [searchActive, setSearchActive] = useState(false);

    const toggleSearchBar = () => {
        if (searchTerm) setSearchTerm("");
        setSearchActive(!searchActive)
        if(searchInputRef && !searchActive) searchInputRef.current.focus();
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
                ref={searchInputRef}
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    );
}