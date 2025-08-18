'use client';
import Card from "@/components/card";
import Header from "@/components/header";
import { useEffect, useState } from "react";

interface Country {
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

export default function Home() {
  const linkRequestuInfo: string = 'https://restcountries.com/v3.1/all?fields=';
  const requestType = 'area,capital,name,population,subregion,cca2,maps,flags';

  const [countries, setCountries] = useState<Country[]>([]);

  const getDataCountries = async () => {
    try {
      const res = await fetch(linkRequestuInfo.concat(requestType));
      const data: Country[] = await res.json();
      if (data) {
        const rightData = data.filter(item => (item.flags.png).includes('flagcdn.com'))
        setCountries(rightData);
      }
    } catch (error) {
      console.error('erro ao obter informações', error);
    }
  }

  useEffect(() => {
    getDataCountries();
  }, []);

  return (
    <main className='flex flex-col justify-center items-centern flex-wrap gap-10 ' >
      <Header />
      <section className='flex flex-row justify-center items-centern flex-wrap gap-10 px-10'>
        {
          countries && (countries).map((country, index) => (
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

    </main >
  );
}
