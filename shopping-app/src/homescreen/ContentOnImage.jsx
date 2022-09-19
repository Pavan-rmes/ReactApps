import {
  FacebookSvg,
  InstagramSvg,
  SearchSvg,
  UserSvg,
  CartSvg
} from "../icons/index";



export function ContentOnImage() {
  const instagramLink = "";
  const facbookLink = "";

  return (
    <div className="relative lg:px-36 md:px-28 sm:px-20 px-5">
      <div className="sm:flex py-2 flex-row-reverse gap-2 hidden">
        <a href={instagramLink}>
          <FacebookSvg />
        </a>
        <a href={facbookLink}>
          <InstagramSvg />
        </a>
      </div>
      <hr className="text-black sm:block hidden"></hr>
      <div className="flex pt-4 flex-row items-center justify-center sm:justify-between">
        <div className="text-3xl text-white hidden sm:block">
          <SearchSvg className="md:w-8 md:h-8" />
        </div>
        <div className="flex flex-row gap-4 items-center justify-center text-xl md:text-4xl text-white pt-2">
          <p>logo</p>
          <p>Name</p>
        </div>
        <div className="flex flex-row hidden sm:gap-2 sm:flex">
          <span>
            <UserSvg />
          </span>
          <span>
            <CartSvg />
          </span>
        </div>
      </div>
    </div>
  );
}
