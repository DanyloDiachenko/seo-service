import { IPopupInitStore } from 'store/popups/initStore';

export default interface LongMenuProps {
	asideKeywordsNumber: number;
	setMenuSize: () => void;
	setOpenPopup: (popupToOpen: IPopupInitStore["openPopup"]) => void;
	setInputSearchValue: (valueToChange: string) => void;
};