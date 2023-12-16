import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

import styles from "./textareaKeywords.module.scss";
import TextareaKeywordsProps from "./textarea.props";

const TextareaKeywords = ({
    textareaValue,
    setTextareaValue,
}: TextareaKeywordsProps): JSX.Element => {
    const [wordsCount, setWordsCount] = useState<number>(0);

    useEffect(() => {
        const textarea: HTMLTextAreaElement | null =
            document.querySelector("#keywords");
        if (textarea) {
            textarea.style.height = "5px";
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }, [textareaValue]);

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            const updatedText =
                textareaValue +
                "\n" +
                (textareaValue.split("\n").length + 1 + ". ");
            setTextareaValue(updatedText);
        }
    };

    const countDigits = (text: string): number => {
        const digitsRegex = /\d/g;
        const matches = text.match(digitsRegex);

        return matches ? matches.length : 0;
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        if (textareaValue === "" && e.target.value.trim() !== "") {
            setTextareaValue("1. " + e.target.value);
        } else {
            setTextareaValue(e.target.value);
        }

        const digitCount = countDigits(e.target.value);
        setWordsCount(digitCount);
    };

    return (
        <>
            <textarea
                onChange={handleChange}
                name="keywords"
                id="keywords"
                onKeyDown={handleKeyDown}
                value={textareaValue}
                className={styles.textarea}
                required
            ></textarea>
            <p className={`small ${styles.length}`}>{wordsCount} / 200</p>
        </>
    );
};

export default TextareaKeywords;
