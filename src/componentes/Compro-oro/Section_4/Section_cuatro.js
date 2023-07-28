import React, { useState } from "react";
import styles from "./sectionCuatro.module.css";
import CalculadoraOro from "@/componentes/ConversorPlata/CalculadoraOro";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Section_cuatro = ({ ciudad, ListadoCiudades }) => {
  const datosCiudad = ListadoCiudades.arrayMarker;
  const [ciudadSelect, setCiudadSelect] = useState("");
  const [opened, setOpened] = useState(true);
  const [ciudadOpen, setCiudadOpen] = useState(null);
  const [DataNombre, setDataNombre] = useState("");
  const [selectKilates, setSelectKilates] = useState(true);
  const [selectKilates3, setSelectKilates3] = useState(false);

  return (
    <section id="calculadoraOro" className={styles.contenedorSectionCuatro}>
      <div className={styles.contenedorSectionCuatroMargen}>
        <div className={styles.bloqueIzq}>
          <div className={styles.bloqueIzqTexto}>
            <div className={styles.selectCiudad}>
              <div className={styles.select_ciudad}>
                <div
                  onClick={(event) => {
                    setCiudadSelect(false);
                    setCiudadOpen(!ciudadOpen);
                    setSelectKilates(false);
                  }}
                  className={styles.select_ciudadOptionUno}
                >
                  {" "}
                  {opened ? (
                    <>
                      <p>Seleccione ciudad</p>
                      <KeyboardArrowDownIcon />
                    </>
                  ) : (
                    <>
                      {DataNombre} <KeyboardArrowDownIcon />
                    </>
                  )}
                </div>

                <div
                  className={
                    ciudadOpen
                      ? `${styles.contenedorOptions} ${styles.contenedorOptionsActivo}`
                      : `${styles.contenedorOptions}`
                  }
                >
                  <ul>
                    {datosCiudad.map((ciudad, i) => (
                      <li
                        key={i}
                        className={styles.listaCiudad}
                        onClick={(e) => {
                          //captureHabitual(e);
                          //setAcronimo(e.target.dataset.acronimo);
                          //setValorMoneda(e.target.dataset.precio);
                          setCiudadSelect(e.target.dataset.minusculas);
                          setDataNombre(e.target.dataset.nombre);
                          setCiudadOpen(false);
                          setSelectKilates(false);
                          setSelectKilates3(false);
                          setOpened(false);
                        }}
                        data-minusculas={ciudad.nombreMinusculas}
                        data-nombre={ciudad.nombre}
                      >
                        {ciudad.nombre}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.selectCiudad_mobil}>
              <select
                className={styles.select_ciudad_mobil}
                onChange={(e) => {
                  setCiudadSelect(e.target.value);
                  setCiudadOpen(false);
                  setSelectKilates(false);
                  setSelectKilates3(false);
                  setOpened(false);
                }}
              >
                {datosCiudad.map((ciudad, i) => (
                  <option key={i} value={ciudad.nombreMinusculas}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_cuatro;
