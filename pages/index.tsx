import styled from "styled-components";

export default function Home() {
	return <StyledHomeWrapper></StyledHomeWrapper>;
}

const StyledHomeWrapper = styled.main`
	background: ${(props) => props.theme["--wasabi-gray-50"]};
`;
