import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RestCountriesReact } from '../pages/RestCountriesReact';
import { MainPage } from "../pages/RestCountriesReact/components/MainPage"
import { CountriesPage } from "../pages/RestCountriesReact/components/CountriesPage"
import { AboutUs } from "../pages/RestCountriesReact/components/AboutUs"
import { CountryList } from '../pages/RestCountriesReact/components/CountriesPage/components/CountryList/CountryList';
import { CurrentCountry } from '../pages/RestCountriesReact/components/CountriesPage/components/CurrentCountry/CurrentCountry';

export const RestCountriesRouter = createBrowserRouter([
    {
        path: "",
        element: <Navigate to="/first.react" />
    },
    {
        path: "/first.react",
        element: <RestCountriesReact />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "countries",
                element: <CountriesPage />,
                children: [
                    {
                        path: "all",
                        element: <CountryList />
                    },

                    {
                        path: ":currentCountryID",
                        element: <CurrentCountry />
                    }
                ]
            },
            {
                path: "aboutUs",
                element: <AboutUs />
            }
        ]
    }
])