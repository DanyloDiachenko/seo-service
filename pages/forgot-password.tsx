import RegisterLoginSection from "components/pageComponents/RegisterLoginSection";
import ForgotPasswordAside from 'components/pageComponents/ForgotPasswordAside';

const ForgotPassword = () => {
    return (
        <>
            <section className="register-login">
                <RegisterLoginSection />
                <ForgotPasswordAside />
            </section>
        </>
    );
};

export default ForgotPassword;
