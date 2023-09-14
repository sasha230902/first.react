import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"

import "./style.sass"

export const RestCountriesReact = () => {
    return (
        <div className="rest-countries-react">
            <Header />
            <Outlet />
        </div>
    )
}