import { track } from "../../analytics/track";
import { TRACK } from "../../analytics/track.constants";

import misionLogo from "../../assets/logos/misionLogo.svg";
import instagramLogo from "../../assets/icons/instagram-green.svg";
import facebookLogo from "../../assets/icons/facebook-green.svg";
import whatsappLogo from "../../assets/icons/whatsapp-green.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import pinIcon from "../../assets/icons/pin.svg";
import xperienceGroup from "../../assets/icons/xperience-group.svg";

const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    icon: instagramLogo,
    href: "#",
    event: TRACK.home.footer.social,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: facebookLogo,
    href: "#",
    event: TRACK.home.footer.social,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: whatsappLogo,
    href: "#",
    event: TRACK.home.footer.contact,
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col  justify-end items-center w-full pt-[60px] bg-verde-confianza">
      {/* Info */}
      <div className="flex flex-col justify-center items-center pb-[30px] px-[44px] gap-[30px]">
        <img src={misionLogo} alt="Logo Misión d elos Ángeles Serafines" />

        {/* Social media */}
        <div className="flex justify-center items-center w-full h-fit gap-[20px]">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              onClick={() => track(s.event, { item_id: s.id })}
              className="flex size-[56px] justify-center items-center bg-celeste-bienestar"
            >
              <img src={s.icon} alt="" className="size-[24.5px]" />
            </a>
          ))}
        </div>

        {/* Teléfono */}
        <div className="flex gap-[20px] px-3 py-1 rounded hover:bg-black/20 hover:cursor-pointer">
          <img src={phoneIcon} alt="Ícono del teléfono" />
          <a
            href="tel:+528129104413"
            onClick={() =>
              track(TRACK.home.footer.contact, { item_id: "phone" })
            }
            className="parrafos text-beige-hogar"
          >
            81 29 10 4413
          </a>
        </div>

        <div className="flex flex-col justify-center items-center min-[840px]:flex-row gap-[10px] min-[840px]:gap-[20px] py-2 px-4 rounded-2xl hover:bg-black/20">
          <img src={pinIcon} alt="Ícono de pin" className="w-[25px]" />
          <a
            href="https://www.google.com/maps/place/Misi%C3%B3n+de+Los+%C3%81ngeles,+Sector+Serafines/@25.7710356,-100.2189019,279m/data=!3m1!1e3!4m6!3m5!1s0x8662eb002db01cc1:0xdcaefe4fe80a727e!8m2!3d25.7710345!4d-100.2185753!16s%2Fg%2F11mdb62g9_?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(TRACK.home.footer.contact, { item_id: "address" })
            }
            className="parrafos text-center text-beige-hogar"
          >
            Av. Mision de Los Angeles, sector serafines, 66609 Cdad. Apodaca,
            N.L.
          </a>
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
