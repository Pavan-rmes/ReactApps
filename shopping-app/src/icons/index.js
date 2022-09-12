import {ChevronRight} from "./chevronRight"
import {ChevronLeft} from "./chevronLeft"
import { CircleIcon } from "./circle"


export function ChevronRightSvg(){
    return(
        <ChevronRight />
    )
}

export function ChevronLeftSvg(){
    return(
        <ChevronLeft />
    )
}

export function CircleSvg({styling}){
    return(
        <CircleIcon styling={styling} />
    )
}