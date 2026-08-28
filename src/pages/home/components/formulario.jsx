import { useState } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "../../../hooks/useInView";

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
    <div className="flex flex-col w-full max-w-[1280px] justify-center items-center px-[44px] md:px-[60px] py-[34px] gap-[20px]">
      {/* Texto */}
      <div
        ref={titleRef}
        className={`reveal ${isTitleInView ? "is-visible" : ""} flex flex-col gap-[20px]`}
      >
        <h2 className="titulos text-center font-woodland font-bold text-verde-confianza">
          Conoce tu próximo hogar en Misión de los Ángeles
        </h2>
        <p className="parrafos text-center leading-[115%]">
          Déjanos tus datos y recibe información sobre modelos, disponibilidad y
          opciones para encontrar el <br className="max-sm:hidden" /> espacio
          ideal para tu familia.
        </p>
      </div>

      {/* Formulario */}
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={`reveal ${isFormInView ? "is-visible" : ""} flex flex-col w-full gap-[20px] mt-[40px]`}
        noValidate
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="name"
            className="boton-label font-bold text-verde-confianza"
          >
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre completo"
            className="input placeholder:input w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.nombre && (
            <span className="text-red-500 text-[12px]">
              {errors.nombre.message}
            </span>
          )}
        </div>

        {/* Correo y Teléfono */}
        <div className="flex flex-col md:flex-row w-full gap-[20px] lg:gap-[44px]">
          <div className="flex flex-col flex-1 gap-[8px]">
            <label htmlFor="email" className="boton-label font-bold">
              Correo electrónico *
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="input placeholder:input w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-[12px]">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-[8px]">
            <label htmlFor="phone" className="boton-label font-bold">
              Teléfono *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="81 1234 5678"
              className="input placeholder:input w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
              {...register("phone", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^[0-9\s]{10,}$/,
                  message: "Teléfono inválido",
                },
              })}
            />
            {errors.telefono && (
              <span className="text-red-500 text-[12px]">
                {errors.telefono.message}
              </span>
            )}
          </div>
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message" className="boton-label font-bold">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Cuéntanos más sobre lo que estás buscando..."
            className="input placeholder:input w-full px-[16px] py-[12px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none resize-none"
            {...register("message")}
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-[20px] bg-celeste-bienestar boton text-verde-confianza hover:cursor-pointer transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Quiero recibir información"}
        </button>
      </form>
    </div>
  );
}
