import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import { connect } from "react-redux";

import styles from "./history.module.scss";
import HistoryProps from "./history.props";
import { IPopupInitStore } from "store/popups/initStore";
import IHistory from "./history.interface";

const HistoryPopup = ({
    openPopup,
    closePopups,
}: HistoryProps): JSX.Element => {
    const historyData: IHistory[] = [
        {
            id: 1,
            title: "free download",
        },
        {
            id: 2,
            title: "utilize",
        },
        {
            id: 3,
            title: "Islands, niches",
        },
        {
            id: 4,
            title: "systems",
        },
        {
            id: 5,
            title: "Cambridgeshire",
        },
        {
            id: 6,
            title: "fresh-thinking matrix strategize",
        },
        {
            id: 7,
            title: "Wyoming program",
        },
        {
            id: 8,
            title: "Euro Hawaii Checking",
        },
        {
            id: 9,
            title: "Garden",
        },
    ];

    const [inputValue, setInputValue] = useState<string>("");
    const [history, setHistory] = useState<IHistory[]>(historyData);
    const [clickedMoreId, setClickedMoreId] = useState<number>(0);

    useEffect(() => {
        if (inputValue.length) {
            setHistory(() =>
                history.filter((historyItem) =>
                    historyItem.title
                        .toLocaleLowerCase()
                        .includes(inputValue.toLocaleLowerCase()),
                ),
            );
        } else {
            setHistory(historyData);
        }
    }, [inputValue]);

    const setClickedMoreIdHandler = (clickedHistoryItemId: number) => {
        if (clickedHistoryItemId === clickedMoreId) {
            return () => setClickedMoreId(0);
        } else {
            return () => setClickedMoreId(clickedHistoryItemId);
        }
    };

    return (
        <>
            {openPopup === "history" ? (
                <>
                    <div
                        className="popup-active-bg"
                        onClick={closePopups}
                    ></div>
                    <div className="popup-wrapper">
                        <div className={styles.top}>
                            <h2 className={styles.title}>History</h2>
                            <button
                                onClick={closePopups}
                                className={styles.closeButton}
                            >
                                <Image
                                    src="/icons/close-large.svg"
                                    width="14"
                                    height="14"
                                    alt="close icon"
                                />
                            </button>
                        </div>
                        <div className={styles.search}>
                            <Image
                                src="/icons/search.svg"
                                alt="search icon"
                                width="18"
                                height="18"
                            />
                            <input
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setInputValue(e.target.value)
                                }
                                value={inputValue}
                                placeholder="Search..."
                            />
                        </div>
                        <div className={styles.projects}>
                            <table className={styles.table}>
                                <tbody>
                                    {history.map((historyItem) => (
                                        <tr key={historyItem.id}>
                                            <td className={styles.number}>
                                                <div>{historyItem.id}</div>
                                            </td>
                                            <td className={styles.title}>
                                                <div>{historyItem.title}</div>
                                            </td>
                                            <td className={styles.more}>
                                                <div>
                                                    <Image
                                                        src="/icons/more.svg"
                                                        width="5"
                                                        height="16"
                                                        alt="more icon"
                                                        onClick={setClickedMoreIdHandler(
                                                            historyItem.id,
                                                        )}
                                                    />
                                                </div>
                                            </td>
                                            {clickedMoreId ===
                                            historyItem.id ? (
                                                <div className={styles.delete}>
                                                    <Image
                                                        src="/icons/delete-red.svg"
                                                        alt="delete icon"
                                                        width="10"
                                                        height="13"
                                                    />
                                                    <div>Delete forever</div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

const mapState = (state: { popups: IPopupInitStore }) => {
    return {
        openPopup: state.popups.openPopup,
    };
};

const mapDispatch = {
    closePopups: () => ({
        type: "CLOSE_POPUPS",
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(HistoryPopup);
