import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 md:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Plusieurs solution pour acheter:{" "}
            <span className="underline text-blue">Trouver une boutique</span> or{" "}
            <span className="underline text-blue">point de vente</span> proche
            de vous
          </p>
          <p className="font-semibold text-gray text-xs">
            Ou Appeler 06 24 38{" "}
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs">
            Copyright @2025 Appel INC Mohamed; All right reserved
            </p>
            <div className="flex">
                {footerLinks.map((link,index) =>(
                    <p key={link} className="font-semibold text-gray text-xs">
                        {link}{' '}
                        {index !== footerLinks.length-1 && (<span className="mx-2"> | </span>)}
                    </p>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
