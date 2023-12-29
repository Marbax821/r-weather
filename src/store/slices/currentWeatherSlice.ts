import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../../types/types";
import { AxiosResponse } from "axios";
import { storageCity } from "../../model/CitySave";


type CurrentWeather = {
    city: string;
    weather: Weather;
    isLoading: boolean,
    response: ResponseCurrent
}

type ResponseCurrent = {
    status: number;
    message: string
}
const savedCity = localStorage.getItem("selectedCity");

const initialState: CurrentWeather = {
    city: 'Харьков',
    weather: {
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0
        },
        weather: [
            { description: '' }
        ],
        wind: {
            speed: 0
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        selectCity: (state, action) => {
            state.city = action.payload;
        },
        fetchCurrentWeather: (state) => {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
    }
});

export const {
    fetchCurrentWeather,
    fetchCurrentWeatherSuccess,
    fetchCurrentWeatherError,
    selectCity
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;