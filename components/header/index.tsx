import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
	ArrowDown,
	Avatar,
	CloseIcon,
	HamburgerIcon,
	Logo,
} from "../../assets";
import { Search } from "../search";

type StyledFlexProp = {
	isFlex?: boolean;
};

type StyledResponsiveProp = {
	isMobile?: boolean;
};

type StyledSmallNavProp = {
	isOpen?: boolean;
};

export const Header = () => {
	const [showSmallNav, setShowSmallNav] = useState<boolean>(false);
	return (
		<StyledHeader>
			{/* Big header */}
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
			{/* Small header */}
			<StyledHeaderContainer isMobile>
				<Logo />
				<HamburgerIcon onClick={() => setShowSmallNav(true)} />
				<StyledSmallNav isOpen={showSmallNav}>
					<StyledListContainer isMobile>
						<CloseIcon onClick={() => setShowSmallNav(false)} />
						<StyledListItem isMobile>Home</StyledListItem>
						<StyledListItem isMobile>About</StyledListItem>
						<StyledListItem isMobile>Solutions</StyledListItem>
						<StyledListItem isMobile>Pricing</StyledListItem>
						<StyledListItem isMobile>Contact</StyledListItem>
					</StyledListContainer>
				</StyledSmallNav>
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background: ${(props) => props.theme["--wasabi-white"]};
`;

const StyledHeaderContainer = styled.div<StyledResponsiveProp>`
	${(props) => {
		switch (props.isMobile) {
			case true:
				return css`
					display: flex;
					align-items: center;
					justify-content: space-between;
					max-width: ${(props) => props.theme["--wasabi-max-width"]};
					margin: 0 auto;
					padding: 2rem 4%;
					& > div > svg:first-of-type {
						width: 9.5rem;
					}
					& > div > svg:first-of-type > * {
						transform: scale(0.8);
					}
					@media (min-width: 992px) {
						display: none;
						padding: 0rem 4%;
					}
					@media (min-width: 1280px) {
						padding: 0rem 0%;
					}
				`;
			default:
				return css`
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
		}
	}}
`;

const StyledHeaderDiv = styled.div<StyledFlexProp>`
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

const StyledListContainer = styled.ul<StyledResponsiveProp>`
	list-style-type: none;
	display: flex;
	flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
	margin-left: 2.5rem;
	padding: 1.7rem 0rem;
`;

const StyledListItem = styled.li<StyledResponsiveProp>`
	margin: ${(props) => (props.isMobile ? "1.5rem 0rem" : "0rem 1rem")};
	font-size: ${(props) => (props.isMobile ? "1.5rem" : "0.875rem")};
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

const StyledSmallNav = styled.nav<StyledSmallNavProp>`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	position: fixed;
	inset: 0;
	background: ${(props) => props.theme["--wasabi-white"]};
	z-index: 10;
	& svg {
		position: absolute;
		right: 1rem;
		width: 50px;
		height: 50px;
	}
`;
