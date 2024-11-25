import React from "react";

function Footer() {
  console.log("footer mounted");

  return (
    <footer className="text-surface/75 text-center">
      <div className="flex items-center justify-center border-b-2 p-6 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Puedes aprender el lenguaje de señas en nuestra página web:</span>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/S-kkipie/DuoSings"
            className="[&>svg]:h-4 [&>svg]:w-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              {/* ... (SVG del icono de GitHub) ... */}
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* ... (SVG del icono de aprendizaje) ... */}
                </svg>
              </span>
              Aprender Sign Language
            </h6>
            <p>
              En un mundo donde la comunicación es clave, estamos comprometidos con enseñar y difundir el lenguaje de señas para facilitar la interacción y el entendimiento entre las personas con discapacidad auditiva y el mundo alrededor.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Recursos de aprendizaje
            </h6>
            <p className="mb-4">
              <a href="#!">Lecciones básicas</a>
            </p>
            <p className="mb-4">
              <a href="#!">Práctica interactiva</a>
            </p>
            <p className="mb-4">
              <a href="#!">Videos tutoriales</a>
            </p>
            <p>
              <a href="#!">Guía de signos</a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Enlaces útiles
            </h6>
            <p className="mb-4">
              <a href="#!">Inicio</a>
            </p>
            <p className="mb-4">
              <a href="#!">Categorías</a>
            </p>
            <p className="mb-4">
              <a href="#!">Ayuda</a>
            </p>
            <p>
              <a href="#!">Acerca de nosotros</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contacto
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* ... (SVG del icono de correo electrónico) ... */}
                </svg>
              </span>
              aprendizaje.senalización@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* ... (SVG del icono de redes sociales) ... */}
                </svg>
              </span>
              @aprendizajodelenguajesigns
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* ... (SVG del icono de ubicación) ... */}
                </svg>
              </span>
             
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
