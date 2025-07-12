import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenuData = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        getResMenu();
    }, []);

    const getResMenu = async () => {
        const result = await axios(MENU_API + resId);
        setResMenu(result);
    };
    return resMenu;

}

export default useRestaurantMenuData;