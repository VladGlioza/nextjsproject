import s from "@/styles/header.module.css";
import { CurrencySelector } from "./CurrencySelector";
import { Divider } from "../UI/Divider";
import { Searchbar } from "./Searhbar";
import { Navbar } from "./Navbar";

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.searchbar_container}>
                <div className={s.searchbar}>
                    <div className={s.select_currency}>
                        <span>Сервіс купівлі-продажу автомобілів</span>
                        <CurrencySelector />
                        <Divider />
                    </div>
                    <Searchbar />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;
