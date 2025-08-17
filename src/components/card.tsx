import Image from "next/image";

interface propsCard {
    srcImage: string;
    countryName: string;
    countryCapital: string | string[];
    countryRegion: string;
    countryArea: string;
    countryPopulation: string;
    linkGoogleMaps: string
}

export default function Card(props: propsCard) {
    const {
        srcImage,
        countryName,
        countryCapital,
        countryRegion,
        countryArea,
        countryPopulation,
        linkGoogleMaps
    } = props;

    return (
        <section className="border-2 rounded-2xl border-[#c7c7c7] 
            w-full  
            sm:w-4/12  
            lg:w-3/12
            xl:w-2/12
            p-0  
            bg-white"
        >
            <div className='rounded-2xl relative w-[100%] h-[200px] shadow-gray-200 shadow-2xl'>
                <Image
                    alt="Country Flag"
                    src={srcImage}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '5%' }}
                />
            </div>

            <div className="p-6">
                <div className="pb-2 border-b-2 border-[#c7c7c7]">
                    <h2 className="text-3xl font-semibold">{countryName.slice(0, 16)}</h2>
                </div>
                <div className="pt-2 flex flex-col gap-4">
                    <ul className="list-none flex flex-col">
                        <li>Capital: {Array.isArray(countryCapital) ? (countryCapital).join(',') : countryCapital}</li>
                        <li>Region: {countryRegion}</li>
                        <li>Area: {countryArea}</li>
                        <li>Population: {countryPopulation}</li>
                    </ul>
                    <div className="w-full flex flex-col items-center justify-center">
                        <button className="bg-[#00aae7] py-2 px-5 rounded-[5%] text-white ">
                            <a href={linkGoogleMaps} target="_blank" rel="noopener noreferrer" className="font-">Google Maps</a>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}