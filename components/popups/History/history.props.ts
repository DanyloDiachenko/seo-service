import { IPopupInitStore } from 'store/popups/initStore';

export default interface HistoryProps {
	closePopups: () => void;
	openPopup: IPopupInitStore["openPopup"];
};