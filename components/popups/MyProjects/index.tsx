import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import { connect } from "react-redux";

import IProject from "./project.interface";
import styles from "./myProjects.module.scss";
import Project from "./Project";
import { IPopupInitStore } from "store/popups/initStore";
import ProjectsProps from "./projects.props";

const MyProjectsPopup = ({
    openPopup,
    closePopups,
}: ProjectsProps): JSX.Element => {
    const projectsData: IProject[] = [
        {
            imgSrc: "/icons/user.webp",
            title: "seo-service.com",
            website: "google.ua",
            country: "ukraine",
            id: 0,
        },
        {
            imgSrc: "/icons/user.webp",
            title: "Дублін КП",
            website: "google.ua",
            country: "ukraine",
            id: 1,
        },
        {
            imgSrc: "/icons/user.webp",
            title: "seo-service.com",
            website: "google.ua",
            country: "ukraine",
            id: 2,
        },
        {
            imgSrc: "/icons/user.webp",
            title: "seo-service.com",
            website: "google.ua",
            country: "ukraine",
            id: 3,
        },
    ];

    const [inputValue, setInputValue] = useState<string>("");
    const [projects, setProjects] = useState<IProject[]>(projectsData);

    useEffect(() => {
        if (inputValue.length) {
            setProjects(() =>
                projects.filter((project) =>
                    project.title
                        .toLocaleLowerCase()
                        .includes(inputValue.toLocaleLowerCase()),
                ),
            );
        } else {
            setProjects(projectsData);
        }
    }, [inputValue]);

    return (
        <>
            {openPopup === "projects" ? (
                <>
                    <div
                        className="popup-active-bg"
                        onClick={closePopups}
                    ></div>
                    <div className="popup-wrapper">
                        <div className={styles.top}>
                            <h2 className={styles.title}>Projects</h2>
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
                            {projects.map((project) => (
                                <Project {...project} key={project.id} />
                            ))}
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

export default connector(MyProjectsPopup);
