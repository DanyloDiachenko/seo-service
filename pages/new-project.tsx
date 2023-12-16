import Head from "next/head";

import NewProjectAside from "components/pageComponents/NewProjectAside";
import NewProjectSection from 'components/pageComponents/NewProjectSection';

const NewProject = () => {
    return (
        <>
            <Head>
            </Head>
            <section className="new-project">
                <NewProjectAside />
                <NewProjectSection />
            </section>
        </>
    );
};

export default NewProject;
