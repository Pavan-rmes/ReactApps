import { StarSvg } from "../icons/index";

export function ReviewButton() {
  return (
    <div className="fixed -right-11 bottom-36 hover:cursor-pointer md:text-xl rotate-90">
      <div className="bg-gray-600 flex md:gap-2 rounded-b-xl text-white px-4 p-2">
        <StarSvg className="md:w-6 md:h-6 w-5 h-5" />
        <p>Reviews</p>
      </div>
    </div>
  );
}
