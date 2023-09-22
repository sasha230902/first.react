import { useParams } from "react-router-dom"
import { useContext } from "react";

import { placeLanguagesIntoHtml } from "../../../../../../utility/placeLanguagesIntoHtml"
import { countryListContext } from "../../../../RestCountriesReact"

import "./style.sass"

export const CurrentCountry = () => {

    let { currentCountryID } = useParams();

    let countryList = useContext(countryListContext);

    let currentCountry = countryList?.find(
        country => country?.id === currentCountryID
    )?.data;

    console.log(currentCountry)

    return (
        <div className="current-country">
            <div className="sections">
                <div className="left-section">
                    <div className="current-country__name">
                        {
                            currentCountry?.name?.official
                        }
                    </div>
                    <div className="current-country__flags">
                        <div className="current-country__flag">
                            <img src={currentCountry?.flags?.png}></img>
                        </div>
                        <div className="current-country__coat-of-arms">
                            <img src={currentCountry?.coatOfArms?.png}></img>
                        </div>
                    </div>
                    <div className="current-country__capital">
                        Capital: {currentCountry?.capital?.length > 0 ? currentCountry?.capital[0] : "-"}
                    </div>
                    <div className="languages">
                        Languages: {placeLanguagesIntoHtml(currentCountry?.languages)}
                    </div>
                    <div className="current-country__area">
                        Area: {currentCountry?.area} км²
                    </div>
                    <div className="current-country__population">
                        Population: {currentCountry?.population} человек
                    </div>
                    <div className="current-country__population">
                        Continent: {currentCountry?.continents[0]}
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
        </div>
    )
}