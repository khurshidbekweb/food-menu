import { ChevronRight, Menu } from "lucide-react";
import { Button } from "../ui/button";

const HomeNav = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-zinc-900 rounded-full h-8 w-8 flex items-center justify-center">
              49
            </div>
            <span className="font-semibold">49 Cafe</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">⭐ 5.0</span>
            <Button variant="ghost" size="icon" className="text-white">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
};

export default HomeNav;