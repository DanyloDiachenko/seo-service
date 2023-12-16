import styles from "./settings.module.scss";
import Profile from "./Profile";
import Password from './Password';

const SettingsSection = (): JSX.Element => {
    return (
        <div className={styles.settings}>
            <Profile />
            <Password />
        </div>
    );
};

export default SettingsSection;
