import React from "react";
import styles from "./sectionTres.module.css";
import Image from "next/image";
import CalculadoraOro from "@/componentes/ConversorPlata/CalculadoraOro";

const Section_tres = ({ ciudad, ListadoCiudades }) => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorSectionTresMargen}>
        <div className={styles.bloqueIzq}>
          <h2>
            Vender oro en <span className={styles.linea}>quickgold</span> es
            fácil
          </h2>
          <p>
            El proceso de venta es muy sencillo y cómodo. Primeramente,
            realizamos la tasación por parte de nuestro equipo de profesionales
            que te informarán en todo momento de los pasos que van efectuando.
            Además, ésta se realiza siempre a la vista para que puedas comprobar
            por ti mismo los datos aportados por nuestras compañeras.{" "}
          </p>
          <p>
            Puedes traernos cualquier pieza de oro de la cual te quieras
            desprender, no importa si está deteriorada o desparejada. Una vez
            que hayamos comprobado la pureza de la misma y estés conforme con el
            precio de venta, basado en la cotización del momento, se te otorgará
            el efectivo.
          </p>
          <p>
            En quickgold llevamos al frente más de 15 años ofreciendo nuestro
            servicio de compro oro, por lo que cuentas con especialistas con una
            larga trayectoria que te ayudarán en todo lo que necesites. Como nos
            encanta recibir tu satisfacción y confianza nos adaptamos a tus
            circunstancias ofreciéndote siempre el mejor servicio posible.
          </p>
          <div className={styles.bloqueIzqInferior}>
            <p>
              Ven a cualquier tienda quickgold sin necesidad de cita previa,
              estaremos encantados de atenderte y ayudarte en la venta de tus
              joyas de oro.
            </p>
          </div>
        </div>
        <div id="calculadoraOro" className={styles.bloqueDer}>
          <div className={styles.bloqueSuperiorTexto}>
            <div>
              <img src="../../../../logoOro.png" alt="Logo Oro" />
            </div>
            <div>
              <p>Compra de oro</p>
              <p>Ciudad donde quieres comprar</p>
            </div>
          </div>
          <CalculadoraOro ciudad={ciudad} ListadoCiudades={ListadoCiudades} />
        </div>
      </div>
    </section>
  );
};

export default Section_tres;
