import { ThisDayItem } from "./ThisDayItem";

import styles from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { Weather } from "../../../../types/types";

interface Props {
    weather: Weather
}

export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

const ThisDayInfo = ({weather}: Props) => {
    const items = [
        {
            icon_id: "temp",
            name: "Температура",
            value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
        },
        {
            icon_id: "pressure",
            name: "Давление",
            value: `${weather.main.pressure} мм ртутного столба`,
        },
        {
            icon_id: "precipitation",
            name: "Погода",
            value: `${weather.weather[0].description}`
        },
        {
            icon_id: "wind",
            name: "Ветер",
            value: `${weather.wind.speed} м/с`,
        },
    ];

    return (
        <div className={styles.this__day_info}>
            <div className={styles.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.icon_id} item={item} />
                ))}
            </div>
            <img className={styles.cloud__img} src={cloud} alt="облако" />
        </div>
    );
};

export { ThisDayInfo };
