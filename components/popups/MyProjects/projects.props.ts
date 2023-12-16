import { IPopupInitStore } from 'store/popups/initStore';

export default interface ProjectsProps {
	closePopups: () => void;
	openPopup: IPopupInitStore["openPopup"];
};