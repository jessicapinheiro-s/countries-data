import { MapPinPlusInside } from "lucide-react";


export default function Header () {
    return(
        <header className="w-full flex items-start justify-start gap-2 px-10 py-5 border-b-1 border-[#f1f1f1] rounded-b-2xl">
            <MapPinPlusInside size={30} className="text-sky-400"/>
            <h1 className="text-3xl text-left font-bold text-sky-400"><span className="text-black">Map</span>Countries</h1>
        </header>
    )
}