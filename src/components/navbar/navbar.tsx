import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { FaChevronLeft } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-[#8833EE] text-white">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-white border hover:bg-white/20">
        <FaChevronLeft size={25} className="text-white"/>
          <span className="sr-only">Back</span>
        </Button>
        <span className="text-lg font-medium">Menyu</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
        <div className="w-10 h-10" /> {/* Placeholder for empty icon space */}
        <Button
          variant="ghost" 
          className="text-white hover:bg-white/20 font-medium px-2.5"
        >
          RU
        </Button>
      </div>
    </nav>
    );
};

export default Navbar;