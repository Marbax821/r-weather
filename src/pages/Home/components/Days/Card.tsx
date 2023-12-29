import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import styles from "./Days.module.scss";

interface Props {
    day: Day;
    onClick: () => void;
}

export const Card = ({ day, onClick }: Props) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.day}>{day.day}</div>
            <div className={styles.day__info}>{day.day_info}</div>
            <div className={styles.img}>
                <GlobalSvgSelector id={day.icon_id} />
            </div>
            <div className={styles.temp__day}>{day.temp_day}</div>
            <div className={styles.temp__night}>{day.temp_day}</div>
            <div className={styles.info}>{day.info}</div>
        </div>
    );
};
