import styled from 'styled-components';

const Container = styled.div<{ background: string }>`
	background-color: ${(props) => props.background};

	height: 100vh;
	span {
		width: 140px;
	}
`;

const Text = styled.p<{ color: string; background: string }>`
	font-size: 300px;
	color: ${(props) => props.color};
	background-color: ${(props) => props.background};
	margin-bottom: 10px;
	font-weight: bold;
	text-transform: uppercase;
`;

export const Styles = {
	Container,
	Text,
};
