import styles from "./LngChanger.module.scss"

function LngChanger() {
    return (
        <div className={styles.lngChangerInput}>
            <select name="LanguageChanger">
                <option selected value="uz">uz</option>
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="kz">kz</option>
            </select>
        </div>
    );
}

export default LngChanger;