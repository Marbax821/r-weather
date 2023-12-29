import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import styles from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";
import { useCustomDispatch, useCustomSelector } from "../../hooks/storeHook";
import currentWeatherSlice, {
    selectCity,
} from "../../store/slices/currentWeatherSlice";
import { fetchCurrentWeatherThunk } from "../../store/thunks/fetchCurrentWeatherThunk";
import { useEffect } from "react";

interface Props {}

const Header = (props: Props) => {
    const theme = useTheme();
    const dispatch = useCustomDispatch();
    const { city } = useCustomSelector((state) => state.currentWeatherSlice);

    const startCity = city;

    const options = [
        { value: "city-1", label: "Харьков" },
        { value: "city-2", label: "Киев" },
        { value: "city-3", label: "Одесса" },
    ];

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor:
                theme.theme === Theme.DARK
                    ? "#4F4F4F"
                    : "rgba(71, 147, 255, 0.2)",
            width: "194px",
            height: "37px",
            border: "none",
            borderRadius: "10px",
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? "#fff" : "#000",
        }),
    };

    const changeTheme = () => {
        theme.changeTheme(
            theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        );
    };

    const handleOptions = (
        selectValue: { value: string; label: string } | null
    ) => {
        if (selectValue) {
            const label = selectValue.label;
            dispatch(fetchCurrentWeatherThunk(label));
            dispatch(selectCity(label));
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id="header-logo" />
                </div>
                <div className={styles.title}>React weather</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                    onChange={handleOptions}
                />
            </div>
        </header>
    );
};

export { Header };
