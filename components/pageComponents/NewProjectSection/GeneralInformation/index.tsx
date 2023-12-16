import styles from "./generalInformation.module.scss";
import GeneralInformationForm from "./Form";

const GeneralInformation = (): JSX.Element => {
    return (
        <>
            <h1 className={styles.title}>Общая информация</h1>
            <p className={styles.description}>
                Отслеживайте позиции вашего сайта в режиме реального времени во
                всех основных поисковых системах. Вы можете настроить параметры
                проекта и проверку позиций согласно вашим требованиям
            </p>
            <GeneralInformationForm />
        </>
    );
};

export default GeneralInformation;
