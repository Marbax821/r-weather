import { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/storeHook";
import styles from "./Home.module.scss";
import { Day, Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { fetchCurrentWeatherThunk } from "../../store/thunks/fetchCurrentWeatherThunk";
import { Weather } from "../../types/types";
import { Popup } from "../../shared/Popup/Popup";

interface Props {}

const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const { weather, city } = useCustomSelector(
        (state) => state.currentWeatherSlice
    );

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<Day | null>(null);

    const openPopup = (selectedDay: Day) => {
        setSelectedCard(selectedDay);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        dispatch(fetchCurrentWeatherThunk(city));
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.wrapper}>
                <ThisDay weather={weather} />
                <ThisDayInfo weather={weather} />
            </div>
            <Days openPopup={openPopup} />
            {isPopupOpen && selectedCard && (
                <Popup
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    selectedCard={selectedCard}
                />
            )}
        </div>
    );
};

export { Home };
