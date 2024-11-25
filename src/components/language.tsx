import { useStore } from "@/store";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IMG_BASE_URL } from "@/constants";
import { Language, Restaurant } from "@/types";

const LanguageComponent = () => {
    const {language, changeLanguage} = useStore()
    const restaurant:Restaurant = JSON.parse(localStorage.getItem('restaurant'))
    const languages:Language[] = restaurant?.languages
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><img className="w-[30px] h-[30px] rounded-full" src={`${IMG_BASE_URL}${language.image}`} alt="" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages?.length && languages.map((lang) => (
                        <DropdownMenuItem className="cursor-pointer" key={lang._id} onClick={() => changeLanguage(lang)}><img className="w-[30px] h-[30px] rounded-full" src={`${IMG_BASE_URL}${lang.image}`} alt="language image" /> {lang.name}</DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageComponent;