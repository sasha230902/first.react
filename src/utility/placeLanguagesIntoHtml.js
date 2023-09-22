export const placeLanguagesIntoHtml = (languages) => {
    if (typeof languages == "object") {
        let languagesArray = Object.values(languages);

        let resultString = "";

        for (let i in languagesArray) {
            let operator = "";

            if(i < languagesArray.length - 1){
                operator = ", ";
            }
            else{
                operator = ".";
            }

            resultString += languagesArray[i] + operator;
        }

        return resultString;
    }
    return "-"
}