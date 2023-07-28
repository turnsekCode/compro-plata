import React from "react";
import styles from "./sectionSeis.module.css";
import SelectorCiudadesServicio from "@/componentes/SelectorCiudadesServicio/SelectorCiudadesServicio";

const Section_seis = ({ listadoCiudadesServicios }) => {
  return (
    <section className={styles.contenedorSectionSeis}>
      <div className={styles.contenedorSectionSeisMargen}>
        <h5 className={styles.tituloMobil}>Nuestras tiendas compro oro</h5>
        <div className={styles.BannerSelectorCiudad}>
          <h5>Nuestras tiendas compro oro</h5>
          <div className={styles.SelectCiudades}>
            <SelectorCiudadesServicio
              listadoCiudadesServicios={listadoCiudadesServicios}
            />
          </div>
        </div>
        <div className={styles.contenedorTexto}>
          <h5>¿Qué tipo de oro hay en el mercado?</h5>
          <p>
            Existe diferentes tipo de oro según sus quilates, características,
            calidad, etc.
          </p>
        </div>
        <div className={styles.contenedorTiposOro}>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro 24K </p>
            <p>
              Es más conocido por ser el llamado «oro de inversión». Tiene un
              grado de pureza de 99,9% por lo que se le considera oro puro. Lo
              encontrarás en lingotes de oro.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro 18K </p>
            <p>
              El oro alto tiene una pureza del 75%. Es el más usado en joyería y
              orfebrería.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro 14K </p>
            <p>
              Es conocido como oro bajo ya que tiene una pureza del 60% y está
              compuesto por 14 partes de oro y 10 de otros metales.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro amarillo </p>
            <p>
              Se trata de oro noble cuyo color no suele cambiar y suele ser de
              24K o 18K.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro blanco </p>
            <p>
              Comúnmente es de 18K y contiene un 75% de oro fino y una aleación
              de paladio o de Liga Italiana (material proveniente de Italia de
              alta calidad que permite realizar una mejor fundición).
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro rosado </p>
            <p>Es una mezcla de oro fijo, cobre y plata.</p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro rojo </p>
            <p>Oro mezclado con cobre.</p>
          </div>
          <div className={styles.contenedorTiposOroCard2}>
            <p>Oro gris </p>
            <p>
              Mezcla de oro y níquel que se presenta en bajas denominaciones de
              quilates.
            </p>
          </div>
          <div className={styles.contenedorTiposOroCard1}>
            <p>Oro verde </p>
            <p>Oro mezclado con plata.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_seis;
