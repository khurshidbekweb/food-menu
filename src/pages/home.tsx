import Loading from '@/components/loader';
import HomeNav from '@/components/navbar/home-nav';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IMG_BASE_URL } from '@/constants';
import { useCategoryAll, useRestuarantOne } from '@/querys';
import { useStore } from '@/store';
import { category } from '@/types';
import { ChevronRight, } from 'lucide-react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';


const HomePage = () => {
  const { restaurentId } = useParams()
  const { language } = useStore()
  const {t} = useTranslation()
  const { data: restaurant, error, isLoading } = useRestuarantOne(restaurentId!);
  const { data: menuCategories } = useCategoryAll(restaurentId!);
  const navigate = useNavigate();
  useEffect(() => {
    if (restaurant) {
      localStorage.setItem('restaurant', JSON.stringify(restaurant));
    }
  }, [restaurant]);
  if (isLoading) {
    return <Loading/>
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }  

  return (
    <div className="flex flex-col border h-screen max-w-md mx-auto bg-white">
      {/* Header */}
      <HomeNav />

      {/* Online menu header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground font-bold text-xl">{t("kategory")}</span>
          <Button onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${restaurant?.categories[0]?._id}`)} variant="outline" size="sm">
            {t("kategory_btn")}
          </Button>
        </div>
      </div>

      {/* Menu categories */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {menuCategories?.map((category: category) => (
            <Button
              key={category._id}
              variant="ghost"
              className="w-full justify-start h-auto py-4 px-6"
              onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${category._id}`)}
            >
              <span className="mr-4 text-xl"><img className='w-[30px] h-[30px] rounded-full' src={`${IMG_BASE_URL}${category.image.image}`} alt="" /></span>
              <span className="flex-1 text-left">{category.name[language?.code]}</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom navigation */}
      {/* <MiniNav /> */}
    </div>
  );
};

export default HomePage;