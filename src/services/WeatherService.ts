import { AxiosResponse } from 'axios';
import api from '../axios';
import { Weather } from '../types/types';


// export class WeatherService {
//     static getCurrentWeather(city: string) {
//         return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c6d01cad259b2c7fcc01721100919bb`);
//     }
// }

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`);
    }
}