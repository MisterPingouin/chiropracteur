import Header from './components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="font-title text-customTitle hover:text-customHover">
          Mon Titre
        </h1>
        <p className="font-light">
          Ceci est un paragraphe avec la police Josefin Sans en light.
        </p>
      </main>
    </div>
  );
}