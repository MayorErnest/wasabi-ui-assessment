import React, { useState } from "react";
import styled from "styled-components";

type StyledButtonProp = {
	isActive?: boolean;
};

export const ComparisonTable = () => {
	const [currentTab, setcurrentTab] = useState<string>("Test NumberOne");
	const handleTableClick = (e: React.SyntheticEvent) => {
		let target = e.target as HTMLInputElement;
		setcurrentTab(target.innerHTML);
	};

	return (
		<StyledComparisonTable>
			<StyledComparisonTableTabs>
				<StyledComparisonTableTabButton
					onClick={handleTableClick}
					isActive={currentTab === "Test NumberOne"}
				>
					Test NumberOne
				</StyledComparisonTableTabButton>
				<StyledComparisonTableTabButton
					onClick={handleTableClick}
					isActive={currentTab === "Test NumberTwo"}
				>
					Test NumberTwo
				</StyledComparisonTableTabButton>
			</StyledComparisonTableTabs>
		</StyledComparisonTable>
	);
};

const StyledComparisonTable = styled.div``;

const StyledComparisonTableTabs = styled.div`
	display: flex;
	max-width: 42rem;
	margin: 0 auto;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		width: 0rem;
	}
	&::-webkit-scrollbar-track {
		background: none;
	}
	&::-webkit-scrollbar-thumb {
		background: none;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: none;
	}
`;

const StyledComparisonTableTabButton = styled.button<StyledButtonProp>`
	display: inline-block;
	background: none;
	font-size: 0.75rem;
	text-transform: uppercase;
	color: ${(props) =>
		props.isActive
			? props.theme["--wasabi-blue-50"]
			: props.theme["--wasabi-blue-200"]};
	padding: 0.5rem 0rem;
	border: 0.125rem solid transparent;
	border-bottom: ${(props) =>
		props.isActive
			? `0.125rem solid ${props.theme["--wasabi-blue-50"]}`
			: "0.125rem solid transparent"};
	outline: none;
	margin-right: 4%;
	cursor: pointer;
	white-space: nowrap;
`;

const StyledComparisonTableMain = styled.main``;
