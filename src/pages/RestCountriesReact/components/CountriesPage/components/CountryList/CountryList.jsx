import { useContext } from "react"

import { countryListContext } from "../../../../RestCountriesReact"

import { Country } from "../Country"

export const CountryList = () => {
    const countryList = useContext(countryListContext)

    console.log(countryList)

    return (
        <div className="countries-page">
            <div className="country-list">
                {
                    countryList.map(
                        country => {
                            return (
                                <Country key={country?.data?.name?.official} currentCountry={country?.data} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}