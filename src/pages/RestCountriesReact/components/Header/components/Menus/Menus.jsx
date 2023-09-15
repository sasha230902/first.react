import { Link } from "react-router-dom"

import { menuTabs } from "../../../../../../constants/menuTabs"

import "./style.sass"

export const Menus = () => {
    return (
        <div className="menus">
            {
                menuTabs.map(
                    menu => {
                        return (
                            <Link key={menu?.name?.en} to={menu?.link}>
                                <div className="menus__item" >
                                    {
                                        menu?.name?.en
                                    }
                                </div>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}