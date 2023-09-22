import { Link } from "react-router-dom"
import { Routes } from "../../../../../../router/Routes"

import { placeLanguagesIntoHtml } from "../../../../../../utility/placeLanguagesIntoHtml"

import "./style.sass"

export const Country = ({ currentCountry }) => {
    return (
        <div className="country">
            <div className="country__name">
                <Link to={Routes.CurrentCountry(currentCountry?.cca3)}>
                    {
                        currentCountry?.name?.official
                    }
                </Link>
            </div>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png}></img>
            </div>
            <div className="country__capital">
                Capital: {currentCountry?.capital?.length > 0 ? currentCountry?.capital[0] : "-"}
            </div>
            <div className="languages">
                Languages: {placeLanguagesIntoHtml(currentCountry?.languages)}
            </div>
            <div className="country__area">
                Area: {currentCountry?.area} км²
            </div>
            <div className="country__population">
                Population: {currentCountry?.population} человек
            </div>
            <div className="country__population">
                Continent: {currentCountry?.continents[0]}
            </div>
        </div>
    )
}