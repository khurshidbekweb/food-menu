import { useNavigate } from "react-router-dom";

const HomeStatr = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-r flex justify-center items-center h-screen w-screen from-purple-500 to-pink-500 p-4 text-white">
            <button className="shadow-lg p-3 px-7 rounded-md font-bold border" onClick={() =>navigate('/67442150223e9d0ad334fa76')}>Open</button>
        </div>
    );
};

export default HomeStatr;