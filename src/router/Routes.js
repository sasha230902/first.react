export const Routes = {
    Main: "/first.react/",
    Countries: "/first.react/countries/all",
    AboutUs: "/first.react/aboutUs",
    CurrentCountry(currentCountryID) {
        return `/first.react/countries/${currentCountryID}`
    }
}