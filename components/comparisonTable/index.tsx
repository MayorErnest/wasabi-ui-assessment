import React, { useState } from "react";
import styled from "styled-components";
import { FeaturesIcon, TickIcon } from "../../assets";

type dataType = {
	schools: {
		[key: string]: { [key: string]: string };
	};
	schoolsTableData: {
		[key: string]: {
			[key: string]: {
				[key: string]: string | number | boolean;
			};
		};
	};
};

type ComparsionTableProp = {
	data: dataType;
};

type StyledButtonProp = {
	isActive?: boolean;
};

type StyledComparisonHeaderBoxImageConProp = {
	isBorderLess?: boolean;
};

type StyledRowProps = {
	isOdd?: boolean;
	isEven?: boolean;
};

export const ComparisonTable = ({ data }: ComparsionTableProp) => {
	const [currentTab, setcurrentTab] = useState<string>(
		Object.keys(data.schoolsTableData)[0]
	);
	const handleTableClick = (e: React.SyntheticEvent) => {
		let target = e.target as HTMLInputElement;
		setcurrentTab(target.innerHTML);
	};

	return (
		<StyledComparisonTable>
			<StyledComparisonTableTabs>
				{Object.keys(data.schoolsTableData).map((item, index) => (
					<StyledComparisonTableTabButton
						key={index + item}
						onClick={handleTableClick}
						isActive={currentTab === item}
					>
						{item}
					</StyledComparisonTableTabButton>
				))}
			</StyledComparisonTableTabs>
			<StyledComparisonTableMain>
				<StyledComparisonTableMainHeader>
					<StyledComparisonTableMainHeaderBox>
						<StyledComparisonHeaderBoxImageCon isBorderLess>
							<FeaturesIcon />
						</StyledComparisonHeaderBoxImageCon>
						<StyledCheckboxContainer>
							<StyledCheckbox id="features" />
							<StyledLabel htmlFor="features">
								Hide same features
							</StyledLabel>
						</StyledCheckboxContainer>
					</StyledComparisonTableMainHeaderBox>
					{Object.values(data.schools).map((item, index) => (
						<StyledComparisonTableMainHeaderBox
							key={index + item.name}
						>
							<StyledComparisonHeaderBoxImageCon isBorderLess>
								<StyledComparisonHeaderBoxImage
									src={item.image}
									alt={item.name}
								/>
							</StyledComparisonHeaderBoxImageCon>
							<StyledComparisonHeaderBoxTitle>
								{item.name}
							</StyledComparisonHeaderBoxTitle>
						</StyledComparisonTableMainHeaderBox>
					))}
					{Array.from(
						Array(4 - Object.values(data.schools).length).keys()
					).map((item) => (
						<StyledComparisonTableMainHeaderBox key={item}>
							<StyledComparisonHeaderBoxImageCon />
						</StyledComparisonTableMainHeaderBox>
					))}
				</StyledComparisonTableMainHeader>
				<StyledTable>
					<StyledTableBody>
						{Object.keys(data.schoolsTableData).map(
							(item, index) => (
								<React.Fragment key={index + item}>
									<StyledTableRow>
										<StyledTableHeader>
											{item}
										</StyledTableHeader>
									</StyledTableRow>
									{Object.values(
										data.schoolsTableData[item]
									).map((itemData, index) => (
										<StyledTableRow
											key={index}
											isOdd={index % 2 !== 0}
											isEven={index % 2 === 0}
										>
											<StyledTableData>
												{
													Object.keys(
														data.schoolsTableData[
															item
														]
													)[index]
												}
											</StyledTableData>
											{Object.values(itemData).map(
												(item, index) => (
													<StyledTableData
														key={index}
													>
														{Number(item) &&
														typeof item !==
															"boolean" ? (
															Math.max(
																...Object.values(
																	itemData
																).map((item) =>
																	Number(item)
																		? Number(
																				item
																		  )
																		: 0
																)
															) ===
															Number(item) ? (
																<>
																	{item}
																	<TickIcon />
																</>
															) : (
																item
															)
														) : (
															String(item)
														)}
													</StyledTableData>
												)
											)}
											{Array.from(
												Array(
													4 -
														Object.values(itemData)
															.length
												).keys()
											).map((item) => (
												<StyledTableData
													key={item}
												></StyledTableData>
											))}
										</StyledTableRow>
									))}
								</React.Fragment>
							)
						)}
					</StyledTableBody>
				</StyledTable>
			</StyledComparisonTableMain>
		</StyledComparisonTable>
	);
};

const StyledComparisonTable = styled.div`
	padding: 0rem 4%;
	@media (min-width: 1280px) {
		padding: 0rem 0%;
	}
`;

const StyledComparisonTableTabs = styled.div`
	display: flex;
	max-width: 42rem;
	margin: 0 auto;
	margin-bottom: 2rem;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
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

const StyledComparisonTableMain = styled.main`
	max-width: ${(props) => props.theme["--wasabi-max-width"]};
	margin: 0 auto;
`;

const StyledComparisonTableMainHeader = styled.div`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 20;
	display: grid;
	gap: 0;
	background: ${(props) => props.theme["--wasabi-gray-50"]};
	grid-template-columns: repeat(
		5,
		calc(${(props) => props.theme["--wasabi-max-width"]} / 5)
	);
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
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

const StyledComparisonTableMainHeaderBox = styled.div`
	border: 0.063rem solid ${(props) => props.theme["--wasabi-gray-100"]};
	padding: 1rem;
	padding-bottom: 1.5rem;
`;

const StyledComparisonHeaderBoxImageCon = styled.div<StyledComparisonHeaderBoxImageConProp>`
	position: relative;
	width: 100%;
	height: 10rem;
	border-radius: 0.25rem;
	border: 0.125rem dashed
		${(props) =>
			props.isBorderLess
				? "transparent"
				: props.theme["--wasabi-black-50"]};
	& > * {
		position: relative;
		z-index: 10;
	}
	&::after {
		position: absolute;
		display: inline-block;
		font-size: 6rem;
		font-weight: 100;
		font-family: "Times New Roman", Times, serif;
		content: "+";
		color: ${(props) => props.theme["--wasabi-black-50"]};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const StyledComparisonHeaderBoxImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const StyledComparisonHeaderBoxTitle = styled.p`
	color: ${(props) => props.theme["--wasabi-blue-200"]};
	font-size: 1rem;
	font-weight: 600;
	margin-top: 0.6rem;
`;

const StyledCheckboxContainer = styled.div`
	margin-top: 0.8rem;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })``;

const StyledLabel = styled.label`
	font-size: 0.875rem;
	color: ${(props) => props.theme["--wasabi-blue-200"]};
	margin-left: 0.3rem;
`;

const StyledTable = styled.table`
	display: inline-block;
	overflow-x: scroll;
	background: ${(props) => props.theme["--wasabi-gray-100"]};
	width: 100%;
	&::-webkit-scrollbar {
		display: none;
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

const StyledTableBody = styled.tbody``;

const StyledTableHeader = styled.th`
	font-size: 0.75rem;
	font-weight: 600;
	color: ${(props) => props.theme["--wasabi-blue-200"]};
	text-transform: uppercase;
	padding: 0.6rem 0.8rem;
`;

const StyledTableRow = styled.tr<StyledRowProps>`
	background: ${(props) =>
		props.isEven
			? props.theme["--wasabi-white"]
			: props.isOdd
			? props.theme["--wasabi-gray-50"]
			: ""};
	display: inline-block;
	overflow-x: scroll;
`;

const StyledTableData = styled.td`
	position: relative;
	background: inherit;
	font-size: 0.875rem;
	color: ${(props) => props.theme["--wasabi-blue-200"]};
	padding: 0.6rem 0.8rem;
	min-width: calc(${(props) => props.theme["--wasabi-max-width"]} / 5);
	border-right: 1px solid ${(props) => props.theme["--wasabi-gray-100"]};
	&:first-of-type {
		font-weight: 600;
		color: ${(props) => props.theme["--wasabi-blue-200"]};
	}
	& svg {
		position: absolute;
		right: 10px;
	}
`;
