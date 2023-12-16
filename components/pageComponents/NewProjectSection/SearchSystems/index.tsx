import styles from "./searchSystems.module.scss";
import Button from "components/UI/Button";
import SearchSystemSelect from "./SearchSystemSelect";
import CountrySelect from "./CountrySelect";

const SearchSystems = (): JSX.Element => {
    return (
        <>
            <h1 className={styles.title}>Поисковые системы</h1>
            <p className={styles.description}>
                Отслеживайте позиции по интересующим вас ключевым словам в
                Google, Yahoo, Bing, YouTube в любых регионах мира.
            </p>
            <div className={styles.selects}>
                <div>
                    <h3>Добавить поисковую систему</h3>
                    <div className={styles.searchSystemSelect}>
                        <SearchSystemSelect />
                    </div>
                </div>
                <div>
                    <h3>Страна</h3>
                    <div className={styles.countrySelect}>
                        <CountrySelect />
                    </div>
                </div>
            </div>

            <div className={styles.buttonWrapper}>
                <Button type="submit">create</Button>
            </div>
        </>
    );
};

export default SearchSystems;
