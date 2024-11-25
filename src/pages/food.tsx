import ColCard from "@/components/card/col-card";
import RowCard from "@/components/card/row-card";
import Navbar from "@/components/navbar/navbar";
import { Badge } from "@/components/ui/badge";
import { useCategoryAll } from "@/querys";
import { useStore } from "@/store";
import { category, Food, Restaurant } from "@/types";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const FoodPage = () => {
    const { viewCard } = useStore()
    const location = useLocation();
    const {restaurentId} = useParams()
    const restaurant:Restaurant = JSON.parse(localStorage.getItem('restaurant'))
    const categorys = restaurant?.categories
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("categoryId");
    const categoryAll = useCategoryAll(restaurentId)?.data
    const {language} = useStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryId) {
            const element = document.getElementById(categoryId);
            if (element) {
                const offset = element.getBoundingClientRect().top + window.pageYOffset - 110;
                window.scrollTo({top: offset, behavior: "smooth"});
            }
        }
    }, [categoryId]);
    
    return (
        <>
            <Navbar />
            <div className="px-2 md:px-5 mt-2">
                <div className="catgory flex items-center gap-x-3 my-2 top-16 fixed">
                    {categoryAll?.length && categoryAll?.map((el:category) => (
                        <Badge onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${el._id}`)} variant={"outline"} className={`bg-white text-black border border-[#8833EE] cursor-pointer px-3 text-[15px] ${categoryId==el._id?'bg-[#8833EE] text-white':''}`}>
                            {JSON.parse(el.name)[language.code]}                            
                        </Badge>
                    ))}
                </div>
                <div className="flex flex-col space-y-2 mt-[100px]">
                    {viewCard == 'row' ?
                        <>
                            {categorys && categorys.map((el:category) => (
                                <div className="flex flex-col space-y-2" key={el._id} id={el._id}>
                                    <h2 className="text-[20px] font-bold">{JSON.parse(el.name)[language.code]}</h2>
                                    {el?.foods.map((food:Food) => (
                                        <RowCard food={food}/>
                                    ))}
                                </div>
                            ))}
                        </>
                        :
                        <>
                            {categorys && categorys.map((el:category) => (
                                <div className="flex flex-col space-y-2" key={el._id} id={el._id}>
                                    <h2 className="text-[20px] font-bold">{JSON.parse(el.name)[language.code]}</h2>
                                    {el?.foods.map((food:Food) => (
                                        <ColCard food={food}/>
                                    ))}
                                </div>
                            ))}
                        </>}
                </div>
            </div>
        </>
    );
};

export default FoodPage;