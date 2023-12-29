import styles from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../types/types";
import { useCustomSelector } from "../../../../hooks/storeHook";
import { useEffect, useState } from "react";

interface Props {
    weather: Weather;
}

const ThisDay = ({weather}: Props) => {
    const { city } = useCustomSelector((state) => state.currentWeatherSlice);
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className={styles.this__day}>
            <div className={styles.top__block}>
                <div className={styles.top__block_wrapper}>
                    <div className={styles.this__temp}>
                        {Math.floor(weather.main.temp)}°
                    </div>
                    <div className={styles.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={styles.bottom__block}>
                <div className={styles.this__time}>
                    Время: <span>{currentTime}</span>
                </div>
                <div className={styles.this__city}>
                    Город: <span>{city}</span>
                </div>
            </div>
        </div>
    );
};

export { ThisDay };
