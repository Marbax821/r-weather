import { ThisDayItemPopup } from "../../pages/Home/components/ThisDayInfo/ThisDayItemPopup";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import styles from "./Popup.module.scss";

export interface ItemPopup {
    id: string;
    icon_id: string;
    name: string;
    value: string;
}

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selectedCard: any;
}

//реализовать поп-ап через стор
//нет подкалдки у поп-апа

const Popup = ({isOpen, onClose, selectedCard}: Props) => {
    console.log(selectedCard);
    
    const items = [
        {
            id: "temp-day",
            icon_id: "temp",
            name: "Температура днем",
            value: `${selectedCard.temp_day}°`,
        },
        {
            id: "temp-night",
            icon_id: "temp",
            name: "Температура ночью",
            value: `${selectedCard.temp_night}°`,
        },
        {
            id: "precipitation",
            icon_id: "precipitation",
            name: "Осадки",
            value: `${selectedCard.info}`,
        },
        {
            id: "wind",
            icon_id: "wind",
            name: "Ветер",
            value: "3 м/с юго-запад - легкий ветер",
        },
    ];

    return (
        <>
            <div className={styles.blur} onClick={onClose}></div>
            <div className={styles.popup}>
                <div className={styles.day}>
                    <div className={styles.day__temp}>{selectedCard.temp_day}°</div>
                    <div className={styles.day__name}>{selectedCard.day}</div>
                    <div className={styles.img}>
                        <GlobalSvgSelector id={selectedCard.icon_id} />
                    </div>
                    <div className={styles.day__time}>
                        Время: <span>21:54</span>
                    </div>
                    <div className={styles.day__city}>
                        Время: <span>Санкт-Петербург</span>
                    </div>
                </div>
                <div className={styles.this__day_info_items}>
                    {items.map((item: ItemPopup) => (
                        <ThisDayItemPopup key={item.id} item={item} />
                    ))}
                </div>
                <div className={styles.close} onClick={onClose}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    );
};

export { Popup };
