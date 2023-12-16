import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Provider } from "react-redux";

import store from "../store";
import "../styles/globals.scss";
import MainAside from "components/pageComponents/MainAside";
import MyProjectsPopup from "components/popups/MyProjects";
import HistoryPopup from "../components/popups/History";

const poppins: NextFont = Poppins({
    weight: ["400", "500", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
    const router: NextRouter = useRouter();

    return (
        <>
            <Head>
                <title>Seo Service</title>
            </Head>
            <Provider store={store}>
                {router.pathname === "/register" ||
                router.pathname === "/login" ||
                router.pathname === "/new-project" ||
                router.pathname === "/forgot-password" ? (
                    <main className={poppins.className}>
                        <Component {...pageProps} />
                    </main>
                ) : (
                    <main className={`pageWithMainAside ${poppins.className}`}>
                        <MyProjectsPopup />
                        <HistoryPopup />
                        <MainAside />
                        <section
                            className={`mainComponentWrapper ${
                                router.route === "/dashboard" ? "dashboard" : ""
                            }`}
                        >
                            <Component {...pageProps} />
                        </section>
                    </main>
                )}
            </Provider>
        </>
    );
};

export default App;
