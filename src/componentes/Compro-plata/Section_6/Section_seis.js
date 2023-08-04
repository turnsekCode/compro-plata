import React from "react";
import styles from "./sectionSeis.module.css";
import Image from "next/image";

const Section_seis = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.bloqueSuperior}>
        <h3>¿Por qué elegirnos?</h3>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas1}>
          <p>Recibo de compra con el precio y el peso desglosado</p>
        </div>
        <div className={styles.contenedorVentajas2}>
          <p>
            Cumplimos la normativa de seguridad privada garantizando una
            custodia segura
          </p>
        </div>
        <div className={styles.contenedorVentajas3}>
          <p>Precios publicados reales y actualizados cada 3 horas</p>
        </div>
        <div className={styles.contenedorVentajas4}>
          <p>
            Protección de sus piezas mediante normas de seguridad exigidas por
            la jefatura de policía
          </p>
        </div>
        <div className={styles.contenedorVentajas5}>
          <p>Comprobación y pesaje a la vista del cliente</p>
        </div>
        <div className={styles.contenedorVentajas6}>
          <p>Básculas homologadas por el ministerio de industria</p>
        </div>
        <div className={styles.contenedorVentajas7}>
          <p>Profesionales formados y en constante formación</p>
        </div>
        <div className={styles.contenedorVentajas8}>
          <p>Descartes según catálogo de gemas</p>
        </div>
        <div className={styles.contenedorVentajas9}>
          <p>Registro de todas las operaciones</p>
        </div>
      </div>
    </section>
  );
};

export default Section_seis;
