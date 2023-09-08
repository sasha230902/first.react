import { menuTabs } from "../../../../../constants/menuTabs"

export const Menus = () => {
    return (
        <div className="menus">
            {
                menuTabs.map(
                    menu => {
                        return (
                            <div className="menus__item" key={menu?.en}>
                                {
                                    menu?.en
                                }
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}