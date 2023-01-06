import React from "react";
import styled, { css } from "styled-components";
import { ArrowDown, Avatar, Logo } from "../../assets";
import { Search } from "../search";

type StyledHeaderDivProp = {
	isFlex?: boolean;
};

export const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledHeaderDiv isFlex>
					<Logo />
					<StyledHeaderDiv as="nav">
						<StyledListContainer>
							<StyledListItem>Home</StyledListItem>
							<StyledListItem>About</StyledListItem>
							<StyledListItem>Solutions</StyledListItem>
							<StyledListItem>Pricing</StyledListItem>
							<StyledListItem>Contact</StyledListItem>
						</StyledListContainer>
					</StyledHeaderDiv>
				</StyledHeaderDiv>
				<StyledSearchAndMenuContainer>
					<Search />
					<Avatar />
					<ArrowDown />
				</StyledSearchAndMenuContainer>
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background: ${(props) => props.theme["--wasabi-white"]};
`;

const StyledHeaderContainer = styled.div`
	display: none;
	align-items: center;
	justify-content: space-between;
	max-width: ${(props) => props.theme["--wasabi-max-width"]};
	margin: 0 auto;
	@media (min-width: 992px) {
		display: flex;
		padding: 0rem 4%;
	}
	@media (min-width: 1280px) {
		padding: 0rem 0%;
	}
`;

const StyledHeaderDiv = styled.div<StyledHeaderDivProp>`
	${(props) => {
		switch (props.isFlex) {
			case true:
				return css`
					display: flex;
					align-items: center;
				`;
			default:
				return css`
					display: block;
				`;
		}
	}}
`;

const StyledListContainer = styled.ul`
	list-style-type: none;
	display: flex;
	margin-left: 2.5rem;
	padding: 1.7rem 0rem;
`;

const StyledListItem = styled.li`
	margin-right: 1rem;
	font-size: 0.875rem;
	color: ${(props) => props.theme["--wasabi-blue-100"]};
	&:nth-of-type(1) {
		color: ${(props) => props.theme["--wasabi-blue-50"]};
		font-weight: 600;
	}
`;

const StyledSearchAndMenuContainer = styled.div`
	display: flex;
	align-items: center;
	& span {
		margin-right: 1.2rem;
	}
	& svg:last-of-type {
		margin-left: 0.3rem;
	}
`;
