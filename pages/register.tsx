import RegisterLoginSection from "components/pageComponents/RegisterLoginSection";
import RegisterAside from "components/pageComponents/RegisterAside";

const Register = () => {
    return (
        <>
            <section className="register-login">
                <RegisterLoginSection />
                <RegisterAside />
            </section>
        </>
    );
};

export default Register;
