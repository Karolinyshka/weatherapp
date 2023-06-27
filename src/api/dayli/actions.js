
export default {
    async getDailyDataCurrCity(context, payload) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${payload.cities}&appid=${this.APIkey}&units=metric`
        );
        const responseData = await response.json();
        // console.log(responseData);
        if (!response.ok) {
            const error = new Error(
                responseData.message || " Failed to get Daily weather for this city"
            );
            throw error;
        }
        const data = {
            name: responseData.cities.name,
            firstDay: {

            },
            secondDay: {

            },
            thirdDay: {

            },
            fourthDay: {

            },
            fifthDay: {
            },
        };

        context.commit("setDailyDataCurrCity", data);
    },
};
