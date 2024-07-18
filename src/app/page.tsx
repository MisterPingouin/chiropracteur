import Header from './components/Header/Header';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Header />
      <main>
      <Image src="/images/img1chiro.jpg" width={428} height={323} alt="Image Chiropracteur Ajaccio" className='w-auto h-auto' />
      <div className="flex flex-col justify-center items-center font-light px-6 mt-4">
      <div className='flex flex-col px-2 pb-1'>
        <h1 className="text-customTitle text-30px px-3">
          Qui suis-je ?
        </h1>
        <p className='text-14 leading-22px pb-6 px-2'>
        Passionnée depuis toujours par la santé et le corps humain, j’ai effectué mes 6 ans d’études à l’Institut Franco-Européen de Chiropraxie à Paris. Diplômée en 2017.</p>
        </div>
        <Image src="/images/photos_cadre1.webp" width={374} height={372} alt="Image Chiropracteur Pauline" className='w-auto h-auto'/>
        <p className='text-center text-base px-2 font-title text-15 uppercase leading-8 py-8'>
        J’ai la volonté de remettre la santé au cœur de nos vies. c’est pourquoi je continue de me former régulièrement pour apporter à mes patients les meilleurs soins et conseils possibles…</p>
        <Image src="/images/Arrowdown.png" width={42} height={42} alt="Image Chiropracteur Ajaccio" className='w-auto h-auto mb-6' />
        <Image src="/images/img2chiro.png" width={374} height={372} alt="Image Chiropracteur Ajaccio" className=' mb-6' />
        </div>
      </main>
    </div>    
  );
}