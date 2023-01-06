import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../assets";

export const Search = () => {
	return (
		<StyledSearchContainer>
			<StyledSearch />
			<SearchIcon />
		</StyledSearchContainer>
	);
};

const StyledSearchContainer = styled.span`
	position: relative;
	& svg {
		position: absolute;
		right: 1rem;
		top: 1rem;
	}
`;

const StyledSearch = styled.input.attrs({
	type: "text",
	placeholder: "Search",
})`
	padding: 1rem 0.75rem;
	border: 0.063rem solid ${(props) => props.theme["--wasabi-black-50"]};
	border-radius: 0.25rem;
	font-size: 0.875rem;
	width: 12.5rem;
	&::placeholder {
		color: ${(props) => props.theme["--wasabi-black-100"]};
		font-family: "Quicksand", sans-serif;
	}
`;
