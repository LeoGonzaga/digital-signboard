import { COLORS } from '@src/constants/colors';
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${COLORS.details};
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-x: hidden;
`;

const Text = styled.p``;
export const Styles = {
	Container,
	Text,
};
