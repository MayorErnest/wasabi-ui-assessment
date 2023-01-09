import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { schoolsData } from "../assets/data";
import { ComparisonTable, Header, Search } from "../components";

export default function Home() {
	const { query, push } = useRouter();

	if (query) {
		axios(`https://isdhidhidhsi?q=${query.token}`)
			.then((res) => console.log(res))
			.catch((err) => push("/dummy"));
		return <></>;
	}

	return (
		<>
			<Header />
			<StyledHomeWrapper>
				<StyledHomeWrapperContainer>
					<StyledHomeHeader>Compare Schools</StyledHomeHeader>
					<StyledHomeParagraph>
						Compare top four schools you&#39;re interested in and
						pick the right one for you.
					</StyledHomeParagraph>
					<StyledHomeParagraph>
						Use the search field to add schools to compare. You can
						drag to reorder schools after selection.
					</StyledHomeParagraph>
					<StyledSearchContainer>
						<Search />
					</StyledSearchContainer>
				</StyledHomeWrapperContainer>
				<ComparisonTable data={schoolsData} />
			</StyledHomeWrapper>
		</>
	);
}

const StyledHomeWrapper = styled.main`
	background: ${(props) => props.theme["--wasabi-gray-50"]};
	color: ${(props) => props.theme["--wasabi-blue-200"]};
	padding: 2rem 0rem;
	min-height: 100vh;
`;

const StyledHomeWrapperContainer = styled.div`
	max-width: 45rem;
	margin: 0 auto;
	padding: 0rem 4%;
	@media (min-width: 1280px) {
		padding: 0rem 0%;
	}
`;

const StyledHomeHeader = styled.h1`
	text-align: center;
	font-size: 1.5rem;
	font-weight: 600;
	margin: 1.4rem 0rem;
`;

const StyledHomeParagraph = styled.p`
	text-align: center;
	font-size: 0.875rem;
	line-height: 1.313rem;
`;

const StyledSearchContainer = styled.div`
	margin: 2.5rem 0rem;
	& span {
		display: inline-block;
		width: 100%;
		& input {
			width: 100%;
		}
	}
`;
