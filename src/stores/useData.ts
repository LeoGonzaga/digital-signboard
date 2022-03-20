import create from 'zustand';

type Props = {
	text: string;
	color: string;
	speed: number;
};

export const useData = create<Props>(() => ({
	text: 'João',
	color: '18',
	speed: 1,
}));
