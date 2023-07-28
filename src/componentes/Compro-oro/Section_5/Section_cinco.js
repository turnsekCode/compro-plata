import React from "react";
import styles from "./sectionCinco.module.css";

const Section_cinco = ({ ciudad }) => {
  return (
    <section className={styles.contenedorSectionCinco}>
      <div className={styles.contenedorSectionCincoMargen}>
        <h4>
          Cómo vender oro en <span className={styles.linea}>quickgold</span>
        </h4>
      </div>
      <div className={styles.sectionCincoContenido}>
        <div className={styles.contenidoCard}>
          <p>#1</p>
          <p>Comprobación inicial</p>
          <p>
            La comprobación del oro sigue un procedimiento riguroso y claro,
            independientemente de que se trate de nuestro servicio de
            compraventa o empeño. Nuestras compañeras, por seguridad, realizarán
            una comprobación previa para ver el estado y procedencia de éstas.
            No importa si están rotas o desparejadas, utilizaremos un imán y una
            comprobación visual con lupa de los contrastes de la pieza para
            determinar si es oro.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#2</p>
          <p>Tasación profesional a la vista</p>
          <p>
            Una vez realizada la comprobación previa. Comenzamos con el proceso
            de tasación utilizando herramientas homologadas. Todos los pasos que
            nuestras compañeras van efectuando se detallan al cliente, además,
            cada uno de ellos se realiza a la vista para que resulte un proceso
            totalmente transparente. Utilizaremos densímetros para determinar el
            quilataje de la pieza y ácidos que por norma general no será
            inferior a 14K.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#3</p>
          <p>Valoración de las piezas de oro</p>
          <p>
            Una vez tasadas las joyas de oro se ofrece un importe basado en la
            cotización actual del mercado. Si estás de acuerdo con éste tan sólo
            necesitamos tu DNI u otra identificación en vigor para realizar la
            compra de las joyas. Recuerda que debes ser mayor de edad y
            presentar DNI en vigor.
          </p>
        </div>
        <div className={styles.contenidoCard}>
          <p>#4</p>
          <p>Pago inmediato del valor fijado y acordado</p>
          <p>
            Te entregaremos el importe acordado en el momento para que dispongas
            de forma inmediata el efectivo de la transacción. Te garantizamos,
            durante todo el proceso de venta, el mejor servicio y atención para
            tu satisfacción. Siempre con la sonrisa que nos provoca realizar el
            trabajo que nos encanta poder ofrecerte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_cinco;
