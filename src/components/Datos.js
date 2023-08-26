import React from "react";
const obtenerFechaFormateada = () => {
  const opcionesFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const fechaActual = new Date();
  return fechaActual.toLocaleDateString("es-ES", opcionesFecha);
};

export const Datos = () => {
  const fechaFormateada = obtenerFechaFormateada();
  return (
    <div className=" p-4">
      <div className="max-w-md mx-auto  p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Historial de Notas
        </h1>
        <div className="mb-4">
          <p>
            <span className="font-semibold w-32 inline-block">Nombre:</span>{" "}
            EST. GABRIEL FLORES, ROBERT
          </p>
          <p>
            <span className="font-semibold w-32 inline-block">Código:</span>{" "}
            C7342-3
          </p>
          <p>
            <span className="font-semibold w-32 inline-block">CI:</span>{" "}
            10475442
          </p>
          <p>
            <span className="font-semibold w-32 inline-block">
              Especialidad:
            </span>{" "}
            INGENIERIA DE SISTEMAS
          </p>
          <p>
            <span className="font-semibold w-32 inline-block">Gestión:</span>{" "}
            II/2023 ~ Sexto Semestre
          </p>
          <p>
            <span className="font-semibold w-32 inline-block">Fecha:</span>{" "}
            {fechaFormateada}
          </p>
        </div>
      </div>
    </div>
  );
};
