import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";

import styles from "./shortMenu.module.scss";
import ShortMenuProps from "./shortMenu.props";
import { IPopupInitStore } from "store/popups/initStore";

const ShortMenu = ({
    setMenuSize,
    setOpenPopup,
}: ShortMenuProps): JSX.Element => {
    const setOpenPopupHandler = (
        popupToOpen: IPopupInitStore["openPopup"],
    ): (() => void) => {
        return () => setOpenPopup(popupToOpen);
    };

    return (
        <aside className={`${styles.aside} ${styles.menuShort}`}>
            <div className={styles.top}>
                <Link href="/" className={styles.logo}>
                    L
                </Link>
            </div>

            <Image
                src="/icons/user.webp"
                alt="seo-service.com photo"
                width="40"
                height="40"
                className={styles.user}
            />

            <Image
                src="/icons/search.svg"
                alt="search icon"
                width="18"
                height="18"
                className={styles.search}
            />
            <div className={styles.browseSection}>
                <Link href="/dashboard">
                    <Image
                        src="/icons/dashboard.svg"
                        alt="dashboard icon"
                        width="18"
                        height="18"
                    />
                </Link>
                <div className={styles.keywords}>
                    <div className={styles.rectangle}></div>
                    <Image
                        src="/icons/keywords-icon.svg"
                        alt="keywords icon"
                        width="22"
                        height="12"
                        className={styles.keywordsIcon}
                    />
                </div>
            </div>
            <div className={styles.profileSection}>
                <Link href="/settings">
                    <Image
                        src="/icons/settings.svg"
                        alt="settings icon"
                        width="20"
                        height="20"
                    />
                </Link>
                <Image
                    src="/icons/projects.svg"
                    alt="projects icon"
                    width="20"
                    height="20"
                    onClick={setOpenPopupHandler("projects")}
                />
                <Image
                    src="/icons/history.svg"
                    alt="history icon"
                    width="20"
                    height="20"
                    onClick={setOpenPopupHandler("history")}
                />
                <Image
                    src="/icons/logout.svg"
                    alt="log out icon"
                    width="18"
                    height="18"
                />
            </div>
            <div className={styles.changeAsideWidth}>
                <button aria-label="decrease menu width" onClick={setMenuSize}>
                    <Image
                        src="/icons/arrow-left.svg"
                        alt="decrease menu width arrow icon"
                        width="14"
                        height="12"
                        className={styles.reversed}
                    />
                </button>
            </div>
        </aside>
    );
};

const mapState = (): {} => {
    return {};
};

const mapDispatch = {
    setOpenPopup: (popupToOpen: IPopupInitStore["openPopup"]) => ({
        type: "SET_OPEN_POPUP",
        popupToOpen,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(ShortMenu);
