const ApiURL = "https://restcountries.com/v3.1/all";

export class ApiConnect {

    static async sendRequest() {
        let startTime = new Date();
        const proxyResponse = await fetch(ApiURL);
        const unwrappedResponse = await proxyResponse.json();
        return {
            response: unwrappedResponse.map(
                (country) => {
                    return {
                        id: country?.cca3,
                        data: country
                    }
                }
            ),
            requestTime: new Date() - startTime,
        };
    }
}