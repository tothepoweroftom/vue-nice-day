export default {

    result(weatherData, userData) {
        // Check Temperature
        let result = {}
        if(weatherData.main.temp >= userData.temperature[0] && weatherData.main.temp < userData.temperature[1]) {
            result.temperature = true
        } else {
            result.temperature = false
        }

        // Check wind speed
        if(weatherData.wind.speed >= userData.wind.speed[0] && weatherData.wind.speed < userData.wind.speed[1]){
            result.wind = true
        } else {
            result.wind = false
        }


        return result
    }


}