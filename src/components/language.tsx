import { useStore } from "@/store";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IMG_BASE_URL } from "@/constants";
import { Language, Restaurant } from "@/types";
import { useTranslation } from "react-i18next";

const LanguageComponent = () => {
    const {language, changeLanguage} = useStore()
    const {i18n} = useTranslation()
    const restaurant:Restaurant = JSON.parse(localStorage.getItem('restaurant') as string)
    const languages:Language[] = restaurant?.languages
    const handelChangeLanguage = (lang: Language) => {
        changeLanguage(lang)
        i18n.changeLanguage(lang.code)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><img className="w-[30px] h-[30px] rounded-full" src={`${IMG_BASE_URL}${language?.image}`} alt="" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages?.length && languages.map((lang) => (
                        <DropdownMenuItem className="cursor-pointer" key={lang._id} onClick={() => handelChangeLanguage(lang)}><img className="w-[30px] h-[30px] rounded-full" src={`${IMG_BASE_URL}${lang.image}`} alt="language image" /> {lang.name}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageComponent;