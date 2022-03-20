/* eslint-disable no-useless-concat */
import { useData } from '@src/stores/useData';
import Marquee from 'react-fast-marquee';
import { Styles } from './styles';

export const Board = (): JSX.Element => {
	const { background, color, speed, text } = useData();
	return (
		<Styles.Container background={background}>
			<Marquee
				gradient={false}
				speed={speed * 5}
				direction="left"
				style={{
					background,
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Styles.Text color={color} background={background}>
					{`${text}`}
				</Styles.Text>
				<span> </span>
			</Marquee>
		</Styles.Container>
	);
};
