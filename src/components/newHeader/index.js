import React, { useState } from "react";
import { Container, Group, Logo, StyledHeader, Link, Search, SearchIcon, SearchInput } from "./styles/newHeaderStyles";

export default function NewHeader({ children, restProps }) {

    return (
        <StyledHeader>
            <Container {...restProps}>{children}</Container>
        </StyledHeader>
    )
}

NewHeader.Group = ({ children, ...restProps }) => (
    <Group {...restProps}>{children}</Group>
)

NewHeader.Logo = ({ to, ...restProps }) => (
    <Link to={to} noStyle={true} >
        <Logo {...restProps} />
    </Link>
);

NewHeader.Link = ({ children, ...restProps }) => (
    <Link {...restProps}>{children}</Link>
);

NewHeader.Search = function NewHeaderSearch({
    searchTerm,
    setSearchTerm,
    slides,
    ...restProps
}) {
    // const [searchTerm, setSearchTerm] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const toggleSearchBar = () => {
        if (searchTerm) setSearchTerm("");
        setSearchActive(!searchActive)
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
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    );
}