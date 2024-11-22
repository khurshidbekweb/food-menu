import MiniNav from '@/components/mini-nav';
import HomeNav from '@/components/navbar/home-nav';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronRight, } from 'lucide-react'

const menuCategories = [
    { id: 1, name: "Основные блюда", icon: "🍽️" },
    { id: 2, name: "Супы", icon: "🥣" },
    { id: 3, name: "Салаты", icon: "🥗" },
    { id: 4, name: "Пицца", icon: "🍕" },
    { id: 5, name: "Закуски к пиву", icon: "🍺" },
    { id: 6, name: "Сладкое", icon: "🍰" },
  ]

const HomePage = () => {
    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-white">
      {/* Header */}
      <HomeNav/>

      {/* Online menu header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Online menu</span>
          <Button variant="outline" size="sm">
            Все блюда
          </Button>
        </div>
      </div>

      {/* Menu categories */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className="w-full justify-start h-auto py-4 px-6"
            >
              <span className="mr-4 text-xl">{category.icon}</span>
              <span className="flex-1 text-left">{category.name}</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom navigation */}
        <MiniNav/>
    </div>
    );
};

export default HomePage;