import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
//@ts-ignore
import Checkbox from "react-custom-checkbox";

import ResultsSelect from "./ResultsSelect";
import styles from "./dashboardSection.module.scss";
import IDashboardItem from "./dashboardContentItem.interface";
import { IAsideSearchInitStore } from "store/asideSearch/initStore";
import DashboardProps from "./dashboardSection.props";

const DashboardSection = ({
    asideSearchValue,
    setAsideKeywordsNumber,
}: DashboardProps): JSX.Element => {
    const renderNumber = (number: number): string => {
        const numberString: string = number.toString();
        if (numberString.length > 5) {
            return numberString.slice(0, 3) + "...";
        } else {
            return numberString;
        }
    };

    const renderDate = (date: Date): string => {
        const day: number = date.getDate();
        const month: number = date.getMonth() + 1;
        const year: number = date.getFullYear();

        const formattedDate = `${month < 10 ? "0" + month : month}.${
            day < 10 ? "0" + day : day
        }.${year}`;

        return formattedDate;
    };

    const dashboardContentCopy: IDashboardItem[] = [
        {
            id: 1,
            keyword: "free download",
            isFeatureSelected: true,
            position: 64703,
            positionWasDiffernce: 123,
            /*  positionNowDifference: number, */
            estTrafic: 52749,
            estTraficWasDiffernce: 123,
            /* estTraficNowDifference: number, */
            volume: 72763,
            /* volumeWasDiffernce: number, */
            volumeNowDiffernce: 7,
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 2,
            keyword: "Meadows blue",
            isFeatureSelected: false,
            position: 84042,
            /* positionWasDiffernce: 123, */
            positionNowDifference: 34,
            estTrafic: 23293,
            /* estTraficWasDiffernce: 123, */
            estTraficNowDifference: 23,
            volume: 66277,
            /* volumeWasDiffernce: number, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 3,
            keyword: "virtual Granite",
            isFeatureSelected: true,
            position: 92455,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 69974,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 54266,
            volumeWasDiffernce: 3,
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 4,
            keyword: "transmitting",
            isFeatureSelected: true,
            position: 77758,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 49311,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 1279,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 5,
            keyword: "panel deposit navigate",
            isFeatureSelected: false,
            position: 33024,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 63132,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 72265,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 6,
            keyword: "Future",
            isFeatureSelected: false,
            position: 5586,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 23779,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 3620,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 7,
            keyword: "Account Graphic",
            isFeatureSelected: false,
            position: 49313,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 64003,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 31213,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 8,
            keyword: "Nuevo connect",
            isFeatureSelected: false,
            position: 69306,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 32558,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 17817,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 9,
            keyword: "withdrawal Internal",
            isFeatureSelected: false,
            position: 16035,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 57564,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 39989,
            /* volumeWasDiffernce: 3, */
            volumeNowDiffernce: 7,
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 10,
            keyword: "Specialist Account Cotton",
            isFeatureSelected: false,
            position: 97067,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 59517,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 81941,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 11,
            keyword: "even-keeled Car",
            isFeatureSelected: false,
            position: 24521,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 21118,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 31743,
            /* volumeWasDiffernce: 3, */
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 12,
            keyword: "multi-byte Solutions protocol",
            isFeatureSelected: false,
            position: 24385,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 94085,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 260321,
            volumeWasDiffernce: 0.5,
            /* volumeNowDiffernce: 7, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 13,
            keyword: "Ergonomic Computers HDD",
            isFeatureSelected: false,
            position: 5565,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 94441,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 99683,
            /* volumeWasDiffernce: 3, */
            volumeNowDiffernce: 2,
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 14,
            keyword: "high-level",
            isFeatureSelected: false,
            position: 10815,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 66597,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 83254,
            /* volumeWasDiffernce: 3, */
            volumeNowDiffernce: 4,
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 15,
            keyword: "Sausages Path",
            isFeatureSelected: false,
            position: 75515,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 6824,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 595321,
            /* volumeWasDiffernce: 3, */
            volumeNowDiffernce: 4.9,
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
        {
            id: 16,
            keyword: "turn-key Identity",
            isFeatureSelected: false,
            position: 2032,
            /* positionWasDiffernce: 123, */
            /* positionNowDifference: 34, */
            estTrafic: 33224,
            /* estTraficWasDiffernce: 123, */
            /* estTraficNowDifference: 23, */
            volume: 54225,
            /* volumeWasDiffernce: 3, */
            /*  volumeNowDiffernce: 4.9, */
            bestPageRoute: "/dinero/",
            bestPageLink: "http://localhost:3000/",
            updatedAt: new Date("12.04.2022"),
        },
    ];

    const [dashboardContent, setDashboardContent] =
        useState<IDashboardItem[]>(dashboardContentCopy);
    const [selectedDashboardItems, setSelectedDashboardItems] = useState<
        number[]
    >([]);

    const CheckedIcon = (): JSX.Element => {
        return (
            <div className={styles.checkedCheckbox}>
                <Image
                    width="11"
                    height="10"
                    src="/icons/checkbox-checked.svg"
                    alt="checked icon"
                />
            </div>
        );
    };

    const sortPerId = (type: "highToSmall" | "smallToHigh"): (() => void) => {
        if (type === "highToSmall") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => a.id - b.id),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => b.id - a.id),
                ]);
        }
    };

    const sortPerKeyword = (
        type: "firstToLast" | "lastToFirst",
    ): (() => void) => {
        if (type === "firstToLast") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) =>
                        a.keyword.localeCompare(b.keyword),
                    ),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) =>
                        b.keyword.localeCompare(a.keyword),
                    ),
                ]);
        }
    };

    const sortPerFeatures = (
        type: "firstSelected" | "firstUnselected",
    ): (() => void) => {
        if (type === "firstSelected") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => {
                        if (a.isFeatureSelected && !b.isFeatureSelected) {
                            return -1; // `a` должен быть перед `b`
                        } else if (
                            !a.isFeatureSelected &&
                            b.isFeatureSelected
                        ) {
                            return 1; // `b` должен быть перед `a`
                        }
                        return 0; // порядок не важен
                    }),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => {
                        if (!a.isFeatureSelected && b.isFeatureSelected) {
                            return -1; // `a` должен быть перед `b`
                        } else if (
                            a.isFeatureSelected &&
                            !b.isFeatureSelected
                        ) {
                            return 1; // `b` должен быть перед `a`
                        }
                        return 0; // порядок не важен
                    }),
                ]);
        }
    };

    const sortPerPosition = (
        type: "highToSmall" | "smallToHigh",
    ): (() => void) => {
        if (type === "highToSmall") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => a.position - b.position),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => b.position - a.position),
                ]);
        }
    };

    const sortPerEstTrafic = (
        type: "highToSmall" | "smallToHigh",
    ): (() => void) => {
        if (type === "highToSmall") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort(
                        (a, b) => a.estTrafic - b.estTrafic,
                    ),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort(
                        (a, b) => b.estTrafic - a.estTrafic,
                    ),
                ]);
        }
    };

    const sortPerVolume = (
        type: "highToSmall" | "smallToHigh",
    ): (() => void) => {
        if (type === "highToSmall") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => a.volume - b.volume),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort((a, b) => b.volume - a.volume),
                ]);
        }
    };

    const sortPerUpdate = (
        type: "earlierToLater" | "laterToEarlier",
    ): (() => void) => {
        if (type === "earlierToLater") {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort(
                        (a, b) => a.updatedAt.getTime() - b.updatedAt.getTime(),
                    ),
                ]);
        } else {
            return () =>
                setDashboardContent([
                    ...dashboardContent.sort(
                        (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime(),
                    ),
                ]);
        }
    };

    const setSelectedDashboardItemsHandler = (
        dashboardItemId: number,
    ): (() => void) => {
        if (selectedDashboardItems.includes(dashboardItemId)) {
            return () => {
                setSelectedDashboardItems((prevItems) =>
                    prevItems.filter((itemId) => itemId !== dashboardItemId),
                );
            };
        } else {
            return () => {
                setSelectedDashboardItems((prevItems) => [
                    ...prevItems,
                    dashboardItemId,
                ]);
            };
        }
    };

    const setAllSelectedDashboardItemsHandler = (): void => {
        if (selectedDashboardItems.length > 0) {
            setSelectedDashboardItems([]);
        } else {
            const allDashboardItemIds = dashboardContent.map(
                (dashboardItem) => dashboardItem.id,
            );
            setSelectedDashboardItems(allDashboardItemIds);
        }
    };

    const removeAllSelectedItemsHandler = (): void => {
        setSelectedDashboardItems([]);
    };

    useEffect(() => {
        if (asideSearchValue.length) {
            setDashboardContent(() =>
                dashboardContent.filter((dashboardItem) =>
                    dashboardItem.keyword
                        .toLocaleLowerCase()
                        .includes(asideSearchValue.toLocaleLowerCase()),
                ),
            );
        } else {
            setDashboardContent(dashboardContentCopy);
        }
    }, [asideSearchValue]);

    useEffect(() => {
        setAsideKeywordsNumber(dashboardContent.length);
    }, []);

    return (
        <>
            <h2>16 keywords</h2>
            <div className={styles.buttons}>
                {selectedDashboardItems.length ? (
                    <>
                        <button
                            className={styles.buttonSelect}
                            onClick={removeAllSelectedItemsHandler}
                        >
                            <span>
                                {selectedDashboardItems.length} selected
                            </span>
                            <Image
                                src="/icons/close.svg"
                                alt="clear icon"
                                width="10"
                                height="9"
                            />
                        </button>
                        <button className={styles.buttonDelete}>
                            <span>Delete</span>
                            <Image
                                src="/icons/delete.svg"
                                alt="delete icon"
                                width="10"
                                height="13"
                            />
                        </button>
                    </>
                ) : (
                    ""
                )}
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.checkbox}>
                            <div>
                                <Checkbox
                                    size={24}
                                    icon={<CheckedIcon />}
                                    checked={false}
                                    onChange={
                                        setAllSelectedDashboardItemsHandler
                                    }
                                    className={styles.checkbox}
                                />
                            </div>
                        </th>
                        <th className={styles.id}>
                            <span className={styles.thItem}>
                                #
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerId("highToSmall")}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerId("smallToHigh")}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.keyword}>
                            <span className={styles.thItem}>
                                Keyword
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerKeyword("firstToLast")}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerKeyword("lastToFirst")}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.features}>
                            <span className={styles.thItem}>
                                <div className={styles.helpIconTitle}>
                                    <Image
                                        src="/icons/help-circle.svg"
                                        alt="help icon"
                                        width="12"
                                        height="12"
                                    />
                                    Features
                                </div>
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerFeatures(
                                            "firstSelected",
                                        )}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerFeatures(
                                            "firstUnselected",
                                        )}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.position}>
                            <span className={styles.thItem}>
                                Position
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerPosition("highToSmall")}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerPosition("smallToHigh")}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.estTrafic}>
                            <span className={styles.thItem}>
                                <div className={styles.helpIconTitle}>
                                    <Image
                                        src="/icons/help-circle.svg"
                                        alt="help icon"
                                        width="12"
                                        height="12"
                                    />
                                    Est.
                                    <br /> traffic
                                </div>
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerEstTrafic(
                                            "highToSmall",
                                        )}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerEstTrafic(
                                            "smallToHigh",
                                        )}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.volume}>
                            <span className={styles.thItem}>
                                <div className={styles.helpIconTitle}>
                                    <Image
                                        src="/icons/help-circle.svg"
                                        alt="help icon"
                                        width="12"
                                        height="12"
                                    />
                                    Volume
                                </div>
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerVolume("highToSmall")}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerVolume("smallToHigh")}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.buttonColumn}>
                            <div></div>
                        </th>
                        <th className={styles.bestPage}>
                            <span className={styles.thItem}>
                                <div className={styles.helpIconTitle}>
                                    <Image
                                        src="/icons/help-circle.svg"
                                        alt="help icon"
                                        width="12"
                                        height="12"
                                    />
                                    Best Page
                                </div>
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.updated}>
                            <span className={styles.thItem}>
                                Updated
                                <div className={styles.filters}>
                                    <Image
                                        src="/icons/arrow-table-top.svg"
                                        alt="arrow to top icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerUpdate(
                                            "earlierToLater",
                                        )}
                                    />
                                    <Image
                                        src="/icons/arrow-table-bottom.svg"
                                        alt="arrow to bottom icon"
                                        width="9"
                                        height="6"
                                        onClick={sortPerUpdate(
                                            "laterToEarlier",
                                        )}
                                    />
                                </div>
                            </span>
                        </th>
                        <th className={styles.optionsColumn}>
                            <div></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dashboardContent.map((dashboardItem) => (
                        <tr key={dashboardItem.id}>
                            <td className={styles.checkbox}>
                                <div>
                                    <Checkbox
                                        size={24}
                                        icon={<CheckedIcon />}
                                        checked={
                                            selectedDashboardItems.includes(
                                                dashboardItem.id,
                                            )
                                                ? true
                                                : false
                                        }
                                        onChange={setSelectedDashboardItemsHandler(
                                            dashboardItem.id,
                                        )}
                                        className={styles.checkbox}
                                    />
                                </div>
                            </td>
                            <td>{dashboardItem.id}</td>
                            <td>{dashboardItem.keyword}</td>
                            <td className={styles.features}>
                                <div>
                                    <Image
                                        src="/icons/help-circle.svg"
                                        alt="help icon"
                                        width="12"
                                        height="12"
                                    />
                                    {dashboardItem.isFeatureSelected ? (
                                        <Image
                                            src="/icons/feature-selected.svg"
                                            alt="link icon"
                                            width="14"
                                            height="8"
                                            className={styles.linkIcon}
                                        />
                                    ) : (
                                        <Image
                                            src="/icons/feature.svg"
                                            alt="link icon"
                                            width="14"
                                            height="8"
                                            className={styles.linkIcon}
                                        />
                                    )}
                                </div>
                            </td>
                            <td className={styles.position}>
                                <div>
                                    {dashboardItem.position}
                                    {dashboardItem.positionNowDifference && (
                                        <span>
                                            <Image
                                                src="/icons/arrow-dropdown-green.svg"
                                                alt="decrease icon"
                                                width="8"
                                                height="6"
                                            />
                                            <span className={styles.increase}>
                                                {
                                                    dashboardItem.positionNowDifference
                                                }
                                            </span>
                                        </span>
                                    )}
                                    {dashboardItem.positionWasDiffernce && (
                                        <span>
                                            <Image
                                                src="/icons/arrow-dropdown-red.svg"
                                                alt="decrease icon"
                                                width="8"
                                                height="6"
                                            />
                                            <span className={styles.decrease}>
                                                {
                                                    dashboardItem.positionWasDiffernce
                                                }
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className={styles.estTrafic}>
                                <div>
                                    {dashboardItem.estTrafic}
                                    {dashboardItem.estTraficNowDifference && (
                                        <span>
                                            <Image
                                                src="/icons/arrow-dropdown-green.svg"
                                                alt="decrease icon"
                                                width="8"
                                                height="6"
                                            />
                                            <span className={styles.increase}>
                                                {
                                                    dashboardItem.estTraficNowDifference
                                                }
                                            </span>
                                        </span>
                                    )}
                                    {dashboardItem.estTraficWasDiffernce && (
                                        <span>
                                            <Image
                                                src="/icons/arrow-dropdown-red.svg"
                                                alt="decrease icon"
                                                width="8"
                                                height="6"
                                            />
                                            <span className={styles.decrease}>
                                                {
                                                    dashboardItem.estTraficWasDiffernce
                                                }
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className={styles.volume}>
                                {dashboardItem.volumeNowDiffernce && (
                                    <div>
                                        <Image
                                            src="/icons/volume-green.svg"
                                            alt="volume increase icon"
                                            width="14"
                                            height="14"
                                        />
                                        {renderNumber(dashboardItem.volume)}
                                        <span className={styles.increase}>
                                            {dashboardItem.volumeNowDiffernce}%
                                        </span>
                                    </div>
                                )}
                                {dashboardItem.volumeWasDiffernce &&
                                    !dashboardItem.volumeNowDiffernce && (
                                        <div>
                                            <Image
                                                src="/icons/volume-red.svg"
                                                alt="volume decrease icon"
                                                width="14"
                                                height="14"
                                            />
                                            {renderNumber(dashboardItem.volume)}
                                            <span className={styles.increase}>
                                                {
                                                    dashboardItem.volumeWasDiffernce
                                                }
                                                %
                                            </span>
                                        </div>
                                    )}
                                {!dashboardItem.volumeNowDiffernce &&
                                    !dashboardItem.volumeWasDiffernce && (
                                        <div>
                                            <Image
                                                src="/icons/volume.svg"
                                                alt="volume icon"
                                                width="14"
                                                height="14"
                                            />
                                            {renderNumber(dashboardItem.volume)}
                                        </div>
                                    )}
                            </td>

                            <td className={styles.serpButton}>
                                <button>serp</button>
                            </td>
                            <td className={styles.bestPage}>
                                <div>
                                    <Image
                                        src="/icons/plus.svg"
                                        alt="plus icon"
                                        width="10"
                                        height="10"
                                    />
                                    <Image
                                        src="/icons/lock.svg"
                                        alt="lock icon"
                                        width="12"
                                        height="14"
                                        className={styles.lockIcon}
                                    />
                                    {dashboardItem.bestPageRoute}
                                    <Link
                                        target="_blank"
                                        href={dashboardItem.bestPageLink}
                                    >
                                        <Image
                                            src="/icons/visit.svg"
                                            alt="visit icon"
                                            width="12"
                                            height="12"
                                            className={styles.visitIcon}
                                        />
                                    </Link>
                                </div>
                            </td>
                            <td className={styles.updated}>
                                {renderDate(dashboardItem.updatedAt)}
                            </td>
                            <td className={styles.more}>
                                <div>
                                    <Image
                                        src="/icons/more.svg"
                                        alt="more icon"
                                        width="5"
                                        height="16"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ResultsSelect />
        </>
    );
};

const mapState = (state: { asideSearch: IAsideSearchInitStore }) => {
    return {
        asideSearchValue: state.asideSearch.asideSearchValue,
    };
};
const mapDispatch = {
    setAsideKeywordsNumber: (number: number) => ({
        type: "SET_ASIDE_KEYWORDS_NUMBER",
        number,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(DashboardSection);
