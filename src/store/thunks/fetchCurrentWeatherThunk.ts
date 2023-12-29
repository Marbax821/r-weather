import { WeatherService } from "../../services/WeatherService";
import { fetchCurrentWeather, fetchCurrentWeatherError, fetchCurrentWeatherSuccess } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";


export const fetchCurrentWeatherThunk = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload);
        console.log("API response:", res.data); 
        if (res.status === 200) {
            dispatch(fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(fetchCurrentWeatherError(res));
        }
    } catch (error) {
        console.log(error);
    }
}