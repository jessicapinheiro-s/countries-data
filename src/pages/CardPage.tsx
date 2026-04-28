'use client';
import Card from "@/components/card";
import { useEffect, useMemo, useState } from "react";

interface PropsHome {
    countries: Country[];
}

export interface Country {
    cca2: string;
    name: {
        common: string;
    }
    capital: string[];
    subregion: string;
    area: string;
    population: string;
    maps: {
        googleMaps: string;
    },
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
}

export default function CardPage({ countries }: PropsHome) {
    const [optionReg, setOptionReg] = useState<string>('North America');
    const [regions, setRegions] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const regions = countries?.map(c => c.subregion);
            const noDuplicatedRegions: string[] = [];

            regions?.forEach(reg => !noDuplicatedRegions.includes(reg) ? noDuplicatedRegions.push(reg) : null);

            setRegions(noDuplicatedRegions.filter(item => item).sort((a, b) => a.localeCompare(b)));
        })()
    }, []);


    const countrie_real_data = useMemo(() => {
        return countries.filter(c => c.subregion === optionReg);
    }, [countries, optionReg]);

    return (
        <>
            <section className="w-full flex flex-row items-center justify-between px-10">
                <div className="flex flex-col">
                    <h2 className="text-2xl text-black font-bold">
                        Filter by region
                    </h2>

                    <p className="text-xm text-slate-400">
                        Select a sub-region to view the countries
                    </p>
                </div>
                <select
                    name="regions"
                    id="regions"
                    className="bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                    value={optionReg}
                    onChange={(e) => setOptionReg(e.target.value)}
                >
                    {
                        regions.map(reg => (
                            <option value={reg} key={reg}>{reg}</option>
                        ))
                    }
                    <option value="North America">North America</option>
                </select>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-2 gap-6 px-10'>
                {
                    countrie_real_data && (countrie_real_data).map((country, index) => (
                        <Card
                            countryArea={country?.area}
                            countryName={country?.name.common}
                            countryCapital={country?.capital}
                            countryPopulation={country?.population}
                            countryRegion={country?.subregion}
                            srcImage={country?.flags?.png}
                            linkGoogleMaps={country?.maps?.googleMaps}
                            key={index} />
                    ))
                }

                {
                    !countries && (
                        <h1>Nenhum país encontrado..</h1>
                    )
                }
            </section>
        </>
    )
}
