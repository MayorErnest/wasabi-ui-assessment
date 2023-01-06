import styled from "styled-components";
import { Header } from "../components";

export default function Home() {
	return (
		<StyledHomeWrapper>
			<Header />
		</StyledHomeWrapper>
	);
}

const StyledHomeWrapper = styled.main`
	background: ${(props) => props.theme["--wasabi-gray-50"]};
`;
