import styles from "./profile.module.scss";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import PhoneSelect from "./PhoneSelect";
import LanguageSelect from "./LanguageSelect";

const Profile = (): JSX.Element => {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Your Profile Information</div>
            <Input placeholder="Ivan" disabled />
            <Input placeholder="Kalinenko" disabled />
            <Input placeholder="youremail@mail.com" disabled />
            <PhoneSelect />
            <LanguageSelect />
            <div className={styles.buttonWrapper}>
                <Button className={styles.buttonSave}>Save</Button>
            </div>
        </div>
    );
};

export default Profile;
