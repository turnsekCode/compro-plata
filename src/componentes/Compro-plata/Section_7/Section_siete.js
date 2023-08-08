import React from "react";
import styles from "./sectionSiete.module.css";
import SelectorCiudadesServicio from "@/componentes/SelectorCiudadesServicio/SelectorCiudadesServicio";

const Section_siete = ({ ciudad, listadoCiudadesServicios }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <h5 className={styles.tituloMobil}>Nuestras tiendas compro plata</h5>
        <div className={styles.BannerSelectorCiudad}>
          <h5>Nuestras tiendas compro plata</h5>
          <div className={styles.SelectCiudades}>
            <SelectorCiudadesServicio
              listadoCiudadesServicios={listadoCiudadesServicios}
            />
          </div>
        </div>
        <div className={styles.contenedorTexto}>
          <h5>Los contrastes de la plata</h5>
          <p>
            La plata como el oro tiene diferentes características que hace que
            se distingan diferentes tipologías, te indicamos las más comunes.
          </p>
        </div>
        <div className={styles.contenedorTiposOro}>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Plata 800 </p>
            <p>
              Este tipo contiene un 80% de plata y un 20% de otros metales. Se
              le conoce como “plata de segunda ley”. Se suele usar para cadenas
              por su resistencia.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Plata 925 o fina </p>
            <p>
              Está formada por un 92,5% de plata que junto con otras fusiones le
              dan dureza para la elaboración de las joyas. Es la más empleada y
              también muy habitual en monedas de plata.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Plata 999 </p>
            <p>
              Es el tipo con mayor pureza con un 99,9% de plata. No se trabaja
              en joyería porque es blanda y se marca con facilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_siete;
