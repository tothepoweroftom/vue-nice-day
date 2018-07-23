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

        // Check humidity
        if(weatherData.main.humidity >= userData.humidity[0] && weatherData.main.humidity < userData.humidity[1]){
            result.humidity = true
        } else {
            result.humidity = false
        }

        // Total result

        if(result.temperature && result.wind && result.humidity) {
            result.total = true
        } else {
            result.total = false
        }


        return result
    }


}