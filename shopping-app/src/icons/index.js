import {ChevronRight} from "./chevronRight"
import {ChevronLeft} from "./chevronLeft"
import { CircleIcon } from "./circle"
import { InstagramIcon } from "./instagram";
import { FacebookIcon } from "./facebook";
import { SearchIcon } from "./search";
import { UserIcon } from "./user";
import {CartIcon} from "./cart"
import { StarIcon } from "./star";


export function StarSvg({className}){
    return(
        <StarIcon className={className} />
    )
}

export function UserSvg(){
    return(
        <UserIcon />
    )
}

export function CartSvg(){
    return(
        <CartIcon />
    )
}


export function InstagramSvg(){
    return(
        <InstagramIcon />
    )
}
export function FacebookSvg(){
    return(<FacebookIcon />)
}

export function SearchSvg({className}){
    return(
        <SearchIcon className={className} />
    )
}


export function ChevronRightSvg({className}){
    return(
        <ChevronRight className={className} />
    )
}

export function ChevronLeftSvg({className}){
    return(
        <ChevronLeft className={className} />
    )
}

export function CircleSvg({styling,radius}){
    return(
        <CircleIcon styling={styling} radius={radius} />
    )
}