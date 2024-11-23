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
                <span className="text-2xl font-medium">Menyu</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 p-1 px-2 bg-white/20 rounded-md">
                    <Button variant="ghost" size="icon" className="text-[#8833EE] bg-white flex flex-col">
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                    </Button>
                    <Button variant="ghost" size="icon" className="">
                        <span className="blog p-[18px] bg-white/40 rounded-sm"></span>
                    </Button>
                </div>
                <Language />
            </div>
        </nav>
    );
};

export default Navbar;