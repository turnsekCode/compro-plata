import React from "react";
import styles from "./sectionDos.module.css";
import Image from "next/image";

const Section_dos = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionDos}>
      <div className={styles.bloqueSuperior}>
        <h2>
          Disfruta de ventajas exclusivas en{" "}
          <span className={styles.linea}>quickgold</span>
        </h2>
        <p>
          *Para realizar una venta de plata es necesario ser mayor de edad y
          aportar DNI en vigor.
        </p>
      </div>
      <div className={styles.bloqueInferior}>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja1.png" alt="compro plata" />
          </div>
          <p>Mejor servicio y precio garantizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja2.png" alt="precio plata" />
          </div>
          <p>Precio de la plata siempre actualizado.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja3.png" alt="tiendas compro plata" />
          </div>
          <p>Más de 50 tiendas para vender plata.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja4.png" alt="vender plata" />
          </div>
          <p>Atención personalizada.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja5.png" alt="compra de plata" />
          </div>
          <p>Dinero en efectivo al instante.</p>
        </div>
        <div className={styles.contenedorVentajas}>
          <div className={styles.imagenventaja1}>
            <img src="/imagenVentaja6.png" alt="vender plata precio" />
          </div>
          <p>Tasación profesional, justa y segura.</p>
        </div>
      </div>
    </section>
  );
};

export default Section_dos;
