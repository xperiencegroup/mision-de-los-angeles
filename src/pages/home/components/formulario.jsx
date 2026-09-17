import { useState } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "../../../hooks/useInView";

import userIcon from "../../../assets/icons/form/user.svg";
import mailIcon from "../../../assets/icons/form/mail.svg";
import phoneIcon from "../../../assets/icons/form/phone.svg";
import messageIcon from "../../../assets/icons/form/message.svg";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Animaciones
  const [titleRef, isTitleInView] = useInView();
  const [formRef, isFormInView] = useInView();

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://beneva-backend.vercel.app/api/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source: "Mision de los Ángeles",
            page: "Inicio",
            data: {
              ...values,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      alert("Formulario enviado");
      setIsLoading(false);
      reset();
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[1280px] justify-center items-center px-[44px] md:px-[60px] py-[34px] gap-[16px] min-h-svh">
      {/* Texto */}
      <div
        ref={titleRef}
        className={`reveal ${isTitleInView ? "is-visible" : ""} flex flex-col gap-[5px]`}
      >
        <h2 className="titulos text-center font-woodland font-bold text-verde-confianza">
          Conoce tu próximo hogar en <br className="max-[481px]:hidden" />{" "}
          Misión de los Ángeles: Serafines
        </h2>
        <p className="parrafos text-center">
          Déjanos tus datos y recibe información sobre modelos, disponibilidad y
          opciones para encontrar el <br className="max-sm:hidden" /> espacio
          ideal para tu familia.
        </p>
      </div>

      {/* Formulario */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={`reveal ${isFormInView ? "is-visible" : ""} flex flex-col w-full gap-[15px] mt-[40px]`}
        noValidate
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="name"
            className="boton-label leading-none font-bold text-verde-confianza"
          >
            Nombre completo *
          </label>

          <div className="flex items-center gap-4 px-[16px] rounded-[10px] bg-verde-confianza">
            <img
              src={userIcon}
              alt="Ícono de usuario"
              className="shrink-0 h-[20px]"
            />
            <input
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              className="input placeholder:input w-full h-[52px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && (
              <span className="text-white text-[12px]">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        {/* Correo y Teléfono */}
        <div className="flex flex-col md:flex-row w-full gap-[20px]">
          <div className="flex flex-col flex-1 gap-[8px]">
            <label
              htmlFor="email"
              className="boton-label leading-none font-bold"
            >
              Correo electrónico *
            </label>
            <div className="flex items-center gap-4 px-[16px] rounded-[10px] bg-verde-confianza">
              <img
                src={mailIcon}
                alt="Ícono de correo"
                className="shrink-0 h-[20px]"
              />
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="input placeholder:input w-full h-[52px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo inválido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-white text-[12px]">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-[8px]">
            <label
              htmlFor="phone"
              className="boton-label leading-none font-bold"
            >
              Teléfono *
            </label>
            <div className="flex items-center gap-4 px-[16px] rounded-[10px] bg-verde-confianza">
              <img
                src={phoneIcon}
                alt="Ícono de teléfono"
                className="shrink-0 h-[20px]"
              />
              <input
                id="phone"
                type="tel"
                placeholder="81 1234 5678"
                className="input placeholder:input w-full h-[52px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
                {...register("phone", {
                  required: "El teléfono es obligatorio",
                  pattern: {
                    value: /^[0-9\s]{10,}$/,
                    message: "Teléfono inválido",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-white text-[12px]">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="message"
            className="boton-label leading-none font-bold"
          >
            Mensaje
          </label>

          <div className="flex items-start gap-4 px-[16px] py-[12px] rounded-[10px] bg-verde-confianza">
            <img
              src={messageIcon}
              alt="Ícono de mensaje"
              className="shrink-0 h-[25px] pt-[5px]"
            />
            <textarea
              id="message"
              rows={5}
              placeholder="Cuéntanos más sobre lo que estás buscando..."
              className="input placeholder:input w-full bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none resize-none"
              {...register("message")}
            />
          </div>
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-[18px] bg-celeste-bienestar boton text-verde-confianza hover:cursor-pointer transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Quiero enterarme primero"}
        </button>
      </form>
    </div>
  );
}
