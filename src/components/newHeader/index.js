import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { Container, Group, Logo, StyledHeader, Linklike, Search, SearchIcon, SearchInput, ButtonLink } from "./styles/newHeaderStyles";

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
    <Link to={to} style={{display:"block"}} >
        <Logo {...restProps} />
    </Link>
);

NewHeader.Linklike = ({ children, ...restProps }) => (
    <Linklike {...restProps}>{children}</Linklike>
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
        if (searchTerm) {
            setSearchTerm("");
            srcInputRef.current.disabled = true
        }
        setSearchActive(prevVal => !prevVal);
        if(!searchActive) {
            srcInputRef.current.focus();
            srcInputRef.current.disabled = false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`TODO: searchbar : handleSubmit`)
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