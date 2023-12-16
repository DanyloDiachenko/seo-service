import { IPopupInitStore } from 'store/popups/initStore';

export default interface ShortMenuProps {
	setMenuSize: () => void;
	setOpenPopup: (popupToOpen: IPopupInitStore["openPopup"]) => void;
};