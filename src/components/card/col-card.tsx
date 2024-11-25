// import { Button } from "../ui/button";

const ColCard = () => {
    return (
        <div className="border rounded-lg shadow-sm p-4">
      <img
        src='https://picsum.photos/id/237/200/300'
        alt={'wvw'}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">ververv</h2>
      <p className="text-gray-700 text-sm mb-4">15 000</p>
      {/* <Button className="w-full bg-teal-500 text-white hover:bg-teal-600">
        +Qo'shish
      </Button> */}
    </div>
    );
};

export default ColCard;