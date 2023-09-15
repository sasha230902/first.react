import { Outlet } from "react-router-dom"
import { createContext, useEffect, useState } from "react"

import { ApiConnect } from "../../services/ApiConnect"

import { Header } from "./components/Header"

import "./style.sass"

export const countryListContext = createContext([])

export const RestCountriesReact = () => {
    const [countryList, setCountryList] = useState([]);

    const getResponse = () => {
        ApiConnect.sendRequest().then(
            (response) =>
                setCountryList(response.response)
        );
    }

    useEffect(getResponse, [])


    return (
        <div className="rest-countries-react">
            <div className="background-blur">
                <Header />
                <countryListContext.Provider value={countryList}>
                    <Outlet />
                </countryListContext.Provider>
            </div>
        </div>
    )
}