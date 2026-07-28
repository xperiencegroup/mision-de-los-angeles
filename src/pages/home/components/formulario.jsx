import { useForm } from "react-hook-form";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí tu lógica de envío (API, email, etc.)
    reset();
  };

  return (
    <div className="flex flex-col w-full max-w-[1280px] justify-center items-center px-[60px] py-[34px] gap-[20px]">
      {/* Texto */}
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[40px] text-center font-woodland font-bold text-verde-confianza">
          Conoce tu próximo hogar en Misión de los Ángeles
        </h2>
        <p className="text-paragraph4 text-center leading-[115%]">
          Déjanos tus datos y recibe información sobre modelos, disponibilidad y
          opciones para encontrar el <br /> espacio ideal para tu familia.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-[20px] mt-[40px]"
        noValidate
      >
        {/* Nombre completo */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="nombre"
            className="text-[16px] font-bold font-at-surt text-verde-confianza"
          >
            Nombre completo *
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre completo"
            className="w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
            {...register("nombre", { required: "El nombre es obligatorio" })}
          />
          {errors.nombre && (
            <span className="text-red-500 text-[12px]">
              {errors.nombre.message}
            </span>
          )}
        </div>

        {/* Correo y Teléfono */}
        <div className="flex w-full gap-[44px]">
          <div className="flex flex-col flex-1 gap-[8px]">
            <label
              htmlFor="email"
              className="text-[16px] font-at-surt font-bold"
            >
              Correo electrónico *
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
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
            <label
              htmlFor="telefono"
              className="text-[16px] font-at-surt font-bold"
            >
              Teléfono *
            </label>
            <input
              id="telefono"
              type="tel"
              placeholder="81 1234 5678"
              className="w-full h-[52px] px-[16px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none"
              {...register("telefono", {
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
          <label
            htmlFor="mensaje"
            className="text-[16px] font-at-surt font-bold"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="Cuéntanos más sobre lo que estás buscando..."
            className="w-full px-[16px] py-[12px] bg-verde-confianza text-beige-hogar placeholder:text-beige-hogar outline-none resize-none"
            {...register("mensaje")}
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full py-[20px] bg-celeste-bienestar text-[17px] text-verde-confianza hover:cursor-pointer transition-colors"
        >
          Quiero recibir información
        </button>
      </form>
    </div>
  );
}
