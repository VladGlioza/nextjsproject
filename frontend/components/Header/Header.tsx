import s from "@/styles/header.module.css";
import { CurrencySelector } from "./CurrencySelector";

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.searchbar_container}>
                <div className={s.searchbar}>
                    <div className={s.select_currency}>
                        <span>Сервіс купівлі-продажу автомобілів</span>
                        <CurrencySelector />
                    </div>
                </div>
            </div>

            <div className={s.navbar}></div>
        </div>
    );
};

export default Header;
