import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";

import styles from "./longMenu.module.scss";
import LongMenuProps from "./longMenu.props";
import { IPopupInitStore } from "store/popups/initStore";
import { ChangeEvent } from "react";
import { IAsideKeywordsNumberInitStore } from "store/asideKeywordsNumber/initStore";

const LongMenu = ({
    setMenuSize,
    setOpenPopup,
    setInputSearchValue,
    asideKeywordsNumber,
}: LongMenuProps): JSX.Element => {
    const setOpenPopupHandler = (
        popupToOpen: IPopupInitStore["openPopup"],
    ): (() => void) => {
        return () => setOpenPopup(popupToOpen);
    };

    return (
        <aside className={styles.aside}>
            <div className={styles.top}>
                <Link href="/" className={styles.logo}>LOGO</Link>
                <Image
                    src="/icons/menu.svg"
                    alt="menu icon"
                    width="18"
                    height="12"
                    className={styles.menuIcon}
                />
            </div>
            <div className={styles.user}>
                <Image
                    src="/icons/user.webp"
                    alt="seo-service.com photo"
                    width="64"
                    height="64"
                />
                <h3>seo-service.com</h3>
                <p className="small">google.ua</p>
                <div className={styles.country}>
                    <Image
                        src="/icons/ukraine.svg"
                        alt="ukraine icon"
                        width="16"
                        height="12"
                    />
                    <span className="small">Україна</span>
                </div>
            </div>
            <div className={styles.search}>
                <Image
                    src="/icons/search.svg"
                    alt="search icon"
                    width="18"
                    height="18"
                />
                <input
                    placeholder="Search..."
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInputSearchValue(e.target.value)
                    }
                />
            </div>
            <div className={styles.browseSection}>
                <div className={styles.caption}>Browse</div>
                <Link href="/" className={styles.dashboard}>
                    <Image
                        src="/icons/dashboard.svg"
                        alt="dashboard icon"
                        width="18"
                        height="18"
                    />
                    <h3>Dashboard</h3>
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
                    <h3>Keywords</h3>
                    <div className={styles.number}>{asideKeywordsNumber}</div>
                </div>
            </div>
            <div className={styles.profileSection}>
                <div className={styles.caption}>Your profile</div>
                <Link href="/settings" className={styles.item}>
                    <Image
                        src="/icons/settings.svg"
                        alt="settings icon"
                        width="20"
                        height="20"
                    />
                    <span>My settings</span>
                </Link>
                <div
                    onClick={setOpenPopupHandler("projects")}
                    className={styles.item}
                >
                    <Image
                        src="/icons/projects.svg"
                        alt="projects icon"
                        width="20"
                        height="20"
                    />
                    <span>My projects</span>
                </div>

                <div
                    onClick={setOpenPopupHandler("history")}
                    className={styles.item}
                >
                    <Image
                        src="/icons/history.svg"
                        alt="history icon"
                        width="20"
                        height="20"
                    />
                    <span>My history</span>
                </div>
                <div className={styles.item}>
                    <Image
                        src="/icons/logout.svg"
                        alt="log out icon"
                        width="18"
                        height="18"
                    />
                    <span>Log Out</span>
                </div>
            </div>
            <div className={styles.changeAsideWidth}>
                <button aria-label="decrease menu width" onClick={setMenuSize}>
                    <Image
                        src="/icons/arrow-left.svg"
                        alt="decrease menu width arrow icon"
                        width="14"
                        height="12"
                    />
                </button>
            </div>
        </aside>
    );
};

const mapState = (state: {
    asideKeywordsNumber: IAsideKeywordsNumberInitStore;
}) => {
    return {
        asideKeywordsNumber: state.asideKeywordsNumber.asideKeywordsNumber,
    };
};

const mapDispatch = {
    setOpenPopup: (popupToOpen: IPopupInitStore["openPopup"]) => ({
        type: "SET_OPEN_POPUP",
        popupToOpen,
    }),
    setInputSearchValue: (valueToChange: string) => ({
        type: "SET_ASIDE_SEARCH_INPUT_VALUE",
        valueToChange,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(LongMenu);
