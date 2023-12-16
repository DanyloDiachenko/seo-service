import { useState } from "react";

import LongMenu from "./LongMenu";
import ShortMenu from "./ShortMenu";

const MainAside = (): JSX.Element => {
    const [menuSize, setMenuSize] = useState<"long" | "short">("long");

    const setMenuSizeHandler = (): void => {
        setMenuSize(menuSize === "long" ? "short" : "long");
    };

    return (
        <>
            {menuSize === "long" ? (
                <LongMenu setMenuSize={setMenuSizeHandler} />
            ) : (
                <ShortMenu setMenuSize={setMenuSizeHandler} />
            )}
        </>
    );
};

export default MainAside;
