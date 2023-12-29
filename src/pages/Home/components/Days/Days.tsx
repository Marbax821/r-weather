import { Card } from "./Card";
import styles from "./Days.module.scss";
import { Tabs } from "./Tabs";

interface Props {
    openPopup: (day: Day) => void;
}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: "Сегодня",
            day_info: "28 авг",
            icon_id: "sun",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно",
        },
        {
            day: "Завтра",
            day_info: "29 авг",
            icon_id: "small_rain_sun",
            temp_day: "+19",
            temp_night: "+16",
            info: "небольшой дождь",
        },
        {
            day: "Ср",
            day_info: "30 авг",
            icon_id: "small_rain",
            temp_day: "+20",
            temp_night: "+10",
            info: "дождь",
        },
        {
            day: "Чт",
            day_info: "28 авг",
            icon_id: "mainly_cloudy",
            temp_day: "+18",
            temp_night: "+15",
            info: "Облачно",
        },
        {
            day: "Пт",
            day_info: "28 авг",
            icon_id: "rain",
            temp_day: "+28",
            temp_night: "+25",
            info: "Облачно",
        },
        {
            day: "Сб",
            day_info: "28 авг",
            icon_id: "sun",
            temp_day: "+12",
            temp_night: "+10",
            info: "Облачно",
        },
        {
            day: "Вс",
            day_info: "28 авг",
            icon_id: "sun",
            temp_day: "+30",
            temp_night: "+25",
            info: "Облачно",
        },
    ];

    return (
        <>
            <Tabs />
            <div className={styles.days}>
                {days.map((day: any) => (
                    <Card
                        day={day}
                        key={day.day}
                        onClick={() => props.openPopup(day)}
                    />
                ))}
            </div>
        </>
    );
};
