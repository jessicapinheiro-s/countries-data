
import Header from "@/components/header";
import { Country } from "@/pages/CardPage";
import CardPage from "@/pages/CardPage"

export default async function Home() {
  const linkRequestuInfo= process.env.NEXT_PUBLIC_COUNTRIES_URL;
  const requestType = process.env.NEXT_PUBLIC_COUNTRIES_REQUEST_TYPE;


  if(!linkRequestuInfo || !requestType) {
    throw new Error('Request Keys not Found')
  }
  const res = await fetch(linkRequestuInfo.concat(requestType));
  const data: Country[] = await res.json();
  const rightData = data?.filter(item => (item.flags.png).includes('flagcdn.com'))

  return (
    <main className='pb-6 bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col justify-center items-centern flex-wrap gap-10 ' >
      <Header />
      <CardPage countries={rightData || []} />
    </main >
  );
}
