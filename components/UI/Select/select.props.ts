import IVariant from './select.interface';

export default interface SelectProps {
	variants: IVariant[];
	setActiveVariant: (variant: IVariant) => void;
	className?: string;
	activeVariant: IVariant;
};