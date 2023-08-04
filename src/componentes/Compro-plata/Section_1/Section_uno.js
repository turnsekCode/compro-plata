import React from "react";
import styles from "./section_uno.module.css";
import useScreenSize from "@/utilities/useScreenSize";
import Image from "next/image";
import { Link } from "react-scroll";

const Section_uno = ({ ciudad }) => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Tiendas compro plata <span className={styles.linea}>quickgold</span>
        </h1>
        <p>
          En quickgold compramos todo tipo de piezas de plata como joyas,
          monedas, elementos de decoración o cuberterías y lingotes. Si tienes
          plata que quieras vender ven a cualquiera de nuestras tiendas y obtén
          dinero en efectivo por ellas. Garantizamos el mejor servicio y precio
          por tus piezas de plata
        </p>
        <div className={styles.botones}>
          <Link
            to="calculadoraOro"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <button className={styles.botonPopUp} title="texto">
              CONOCE EL PRECIO DE LA PLATA
            </button>
          </Link>
          <a
            className={styles.botonLlamar}
            href={`tel:${ciudad?.acf?.telefono}`}
            title="Teléfono"
          >
            llama gratis al {ciudad?.acf?.telefono}
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        <img
          src="/imagenComproPlata.webp"
          alt="Compro plata"
          className={styles.madridMobil}
          width={480}
          height={364}
        />
      </div>
    </section>
  );
};

export default Section_uno;
