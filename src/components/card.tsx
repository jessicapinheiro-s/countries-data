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
        <section className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

            {/* IMAGE */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    alt="Country Flag"
                    src={srcImage}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* badge região */}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {countryRegion}
                </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-4">

                {/* TITLE */}
                <div>
                    <h2 className="text-lg font-bold text-slate-800 line-clamp-1">
                        {countryName}
                    </h2>
                    <p className="text-xs text-slate-500">
                        {Array.isArray(countryCapital)
                            ? countryCapital.join(", ")
                            : countryCapital}
                    </p>
                </div>

                {/* INFO */}
                <ul className="text-sm text-slate-600 space-y-1">
                    <li><span className="font-medium text-slate-700">Area:</span> {countryArea}</li>
                    <li><span className="font-medium text-slate-700">Population:</span> {countryPopulation}</li>
                </ul>

                {/* BUTTON */}
                <a
                    href={linkGoogleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium py-2 rounded-lg transition-all"
                >
                    Ver no mapa →
                </a>

            </div>
        </section>
    )
}