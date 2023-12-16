import Image from "next/image";

import styles from "./project.module.scss";
import ProjectProps from "./project.props";

const Project = ({
    imgSrc,
    title,
    website,
    country,
}: ProjectProps): JSX.Element => {
    const renderCountry = (country: ProjectProps["country"]) => {
        switch (country) {
            case "ukraine": {
                return (
                    <>
                        <Image
                            src="/icons/ukraine.svg"
                            alt="ukraine icon"
                            width="16"
                            height="12"
                        />
                        <span className="small">Україна</span>
                    </>
                );
            }
            case "germany": {
                return (
                    <>
                        <Image
                            src="/icons/ukraine.svg"
                            alt="deutschland icon"
                            width="16"
                            height="12"
                        />
                        <span className="small">Deutschland</span>
                    </>
                );
            }
            case "usa": {
                return (
                    <>
                        <Image
                            src="/icons/usa.svg"
                            alt="usa icon"
                            width="16"
                            height="12"
                        />
                        <span className="small">USA</span>
                    </>
                );
            }
            default: {
                return (
                    <>
                        <Image
                            src="/icons/ukraine.svg"
                            alt="ukraine icon"
                            width="16"
                            height="12"
                        />
                        <span className="small">Україна</span>
                    </>
                );
            }
        }
    };

    return (
        <article className={styles.item}>
            <Image src={imgSrc} alt={title + "photo"} width="64" height="64" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.website}>{website}</p>
            <div className={styles.country}>{renderCountry(country)}</div>
        </article>
    );
};

export default Project;
