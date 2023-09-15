import "./style.sass"

export const Country = ({ currentCountry }) => {
    return (
        <div className="country">
            <div className="country__name">
                {
                    currentCountry?.name?.official
                }
            </div>
            <div className="country__flag">
                <img src={currentCountry?.flags?.png}></img>
            </div>
            <div className="country__area">
                Area: {currentCountry?.area} км²
            </div>
            <div className="country__population">
                Population: {currentCountry?.population} человек
            </div>
        </div>
    )
}