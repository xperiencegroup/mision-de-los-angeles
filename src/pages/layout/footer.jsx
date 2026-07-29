import misionLogo from "../../assets/logos/misionLogo.svg";
import instagramLogo from "../../assets/icons/instagram-green.svg";
import facebookLogo from "../../assets/icons/facebook-green.svg";
import whatsappLogo from "../../assets/icons/whatsapp-green.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import pinIcon from "../../assets/icons/pin.svg";
import xperienceGroup from "../../assets/icons/xperience-group.svg";

export default function Footer() {
  return (
    <div className="flex flex-col  justify-end items-center w-full pt-[60px] bg-verde-confianza">
      {/* Info */}
      <div className="flex flex-col justify-center items-center pb-[30px] gap-[30px]">
        <img src={misionLogo} alt="Logo Misión d elos Ángeles Serafines" />

        {/* Social media */}
        <div className="flex justify-center items-center w-full h-fit gap-[20px]">
          {/* Instagram */}
          <a
            href="#"
            className="flex size-[56px] justify-center items-center bg-celeste-bienestar"
          >
            <img
              src={instagramLogo}
              alt="Logo de Instagram"
              className="size-[24.5px]"
            />
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="flex size-[56px] justify-center items-center bg-celeste-bienestar"
          >
            <img
              src={facebookLogo}
              alt="Logo de Instagram"
              className="size-[24.5px]"
            />
          </a>

          {/* Whatsapp */}
          <a
            href="#"
            className="flex size-[56px] justify-center items-center bg-celeste-bienestar"
          >
            <img
              src={whatsappLogo}
              alt="Logo de Instagram"
              className="size-[24.5px]"
            />
          </a>
        </div>

        {/* Teléfono */}
        <div className="flex gap-[20px] px-3 py-1 rounded hover:bg-black/20 hover:cursor-pointer">
          <img src={phoneIcon} alt="Ícono del teléfono" />
          <p className="text-[25px] text-beige-hogar">81 29 10 4413</p>
        </div>

        <div className="flex gap-[20px]">
          <img src={pinIcon} alt="Ícono de pin" />
          <p className="text-[25px] text-beige-hogar">
            Av. Mision de Los Angeles, sector serafines, 66609 Cdad. Apodaca,
            N.L.
          </p>
        </div>

        <img src={xperienceGroup} alt="Desarrollado por Xperience Group" />
      </div>

      {/* Derechos */}
      <div className="flex justify-center items-center w-full h-10 pt-[60px] py-[30px] bg-[#192D26]">
        <p className="text-[14px] text-center text-beige-hogar">
          © 2026 Beneva. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
