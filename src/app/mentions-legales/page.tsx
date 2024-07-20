"use client";

import Link from "next/link";

const MentionsLegales = () => {
  return (
    <div className="text-17px lg:text-20px font-light px-8 lg:px-20 lg:leading-31px">
      <h1 className="text-26px lg:text-45px font-medium text-customTitle py-12">Mentions légales</h1>
      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : www.chiropracteurajaccio.com les informations suivantes :
      </p>
      <h2 className="py-8">1. Informations légales :</h2>
      <p>Statut du propriétaire : particulier</p>
      <p>Le Propriétaire est : Pauline Marlin</p>
      <p>Adresse postale du propriétaire : 6 Bd Albert 1er, 20000 Ajaccio</p>
      <p className="pt-8">Le Créateur du site est : SAS What’s In The Box</p>
      <p>Le Responsable de la publication est : Pauline Marlin</p>
      <p>Contacter le responsable de la publication : chiroajaccio@gmail.com</p>
      <p>Le responsable de la publication est une personne physique</p>
      <p className="pt-8">Le Webmaster est : Tamara Syrovatsky</p>
      <p>Contacter le Webmaster : contact@tamarasyrovatsky.com</p>
      <p>L'hébergeur du site est : Vercel</p>
      <div className="pt-8 mb-8">
        <Link href="/" className="text-customTitle hover:text-customHover">
          Retour à la page précédente
        </Link>
      </div>
    </div>
  );
};

export default MentionsLegales;
