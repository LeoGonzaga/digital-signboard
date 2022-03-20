import React, { useState } from 'react';
import { Styles } from './styles';

export const Create = (): JSX.Element => {
	const [text, setText] = useState<string>('TEXTO');
	const [speed, setSpeed] = useState<number>(1);
	const [color, setColor] = useState<string>('#fff');
	const [backgroundColor, setBackGroundColor] = useState<string>('blue');

	return (
		<Styles.Container>
			<p>Preview</p>
			<Styles.PreviewText>{text}</Styles.PreviewText>
			<Styles.Wrapper>
				<input type="text" name="" id="" placeholder="Digite sua frase" />
				<Styles.WrapperColors>
					<Styles.Label>Fundo:</Styles.Label>
					<input type="color" name="" id="" value={color} />
				</Styles.WrapperColors>

				<Styles.WrapperColors>
					<Styles.Label>Texto:</Styles.Label>
					<input type="color" name="" id="" value={backgroundColor} />
				</Styles.WrapperColors>
				<button>Gerar</button>
			</Styles.Wrapper>
		</Styles.Container>
	);
};
