import React from "react";
import styles from "./sectionCuatro.module.css";

const Section_cuatro = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          Cómo vender plata en <span className={styles.linea}>quickgold</span>
        </h4>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Pesaje</p>
          <p>
            Todas las piezas se pesan a la vista de nuestros clientes en
            balanzas homologadas y certificadas por el Ministerio de Industria.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Comprobación</p>
          <p>
            La pureza de la plata viene determinada por los contrastes que se
            pueden encontrar en las propias piezas. Estas son visibles a simple
            vista.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Importe a pagar</p>
          <p>
            En caso de haber fijado precio, se pagarán los gramos pesados por el
            peso fijado (para fijar precio, llame gratis al{" "}
            <a href={`tel:${ciudad?.acf?.telefono}`}>
              <strong>{ciudad?.acf?.telefono}</strong>
            </a>{" "}
            ). En caso contrario, se aplicará el precio publicado en el momento
            de la venta.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>Pago</p>
          <p>
            Tras esto, se procederá al pago correspondiente a la venta de las
            piezas. Asimismo, en cumplimiento con la legislación vigente, se
            requerirá el DNI del cliente para dejar constancia de la venta. El
            pago puede realizarse en efectivo o por transferencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
