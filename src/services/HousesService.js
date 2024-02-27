import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {


    async paintHouses() {
        const response = await api.get('api/houses')
        console.log(response.data, 'progress')
        let houses = response.data.map(pojo => new House(pojo))
        AppState.houses = houses
    }
}

export const housesService = new HousesService()