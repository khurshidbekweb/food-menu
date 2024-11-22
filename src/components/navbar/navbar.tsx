import { Button } from "../ui/button";
import { FaChevronLeft } from "react-icons/fa";
import Language from "../language";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-[#8833EE] text-white">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-white border hover:bg-white/20">
                    <FaChevronLeft size={25} className="text-white" />
                    <span className="sr-only">Back</span>
                </Button>
                <span className="text-lg font-medium">Menyu</span>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 p-1 bg-white/20 rounded-md">
                    <Button variant="ghost" size="icon" className="text-[#8833EE] bg-white flex flex-col">
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white flex flex-col">
                        <span className="blog p-4 bg-white/4a0 rounded-sm"></span>
                    </Button>
                </div>
                <Language />
            </div>
        </nav>
    );
};

export default Navbar;