import React from "react";
import styles from "./sectionCinco.module.css";
import Image from "next/image";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.contenedorSectionCuatroMargen}>
        <div className={styles.bloqueIzq}>
          <div className={styles.bloqueIzqTexto}>
            <h4>Compra de plata</h4>
            <p>Ciudad donde quieres comprar</p>
            <div className={styles.bloqueIzqSelect}>
              <div className={styles.select}>select aqui</div>
              <button className={styles.botonPopUp} title="texto">
                VER PRECIO ACTUAL DE LA PLATA
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bloqueDer}>
          <p>¿Qué plata compramos?</p>
          <p>
            Compramos todo tipo de objetos de plata como: joyas, monedas,
            bandejas, trofeos, cuberterías y lingotes. Para conocer el precio
            por kilo de este metal accede a la página de tu ciudad o de tu
            tienda favorita.
          </p>
          <a
            className={styles.botonLlamar}
            href={`tel:${ciudad?.acf?.telefono}`}
            title="Teléfono"
          >
            Llama gratis al {ciudad?.acf?.telefono}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
