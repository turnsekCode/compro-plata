import { useState, useEffect } from "react";
import styles from "./conversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CalculadoraOro = ({ ciudad, ListadoCiudades }) => {
  //const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [ciudadSelect, setCiudadSelect] = useState("alcaladehenares");
  useEffect(() => {
    fetch(
      `https://panel.quickgold.es/archivos-cache/Fixing${ciudadSelect}.txt`,
      {
        cache: "no-cache",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, [ciudadSelect]);
  const datosCiudad = ListadoCiudades?.arrayMarker;
  const [valorInput, setValorInput] = useState("0.00");
  const [valorSelect, setValorSelect] = useState("0.00");
  const [opened, setOpened] = useState(true);
  const [ciudadOpen, setCiudadOpen] = useState(null);
  const [selectKilates, setSelectKilates] = useState(true);
  const [selectKilates2, setSelectKilates2] = useState(null);
  const [selectKilates3, setSelectKilates3] = useState(false);
  const [DataNombre, setDataNombre] = useState("");
  const [DataNombreKilate, setDataNombreKilate] = useState("");
  const [masDe, setMasDe] = useState(true);
  const precio999 =
    (data?.result?.Tarifas?.Plata[3].Productos[0].Precio).toFixed(2);
  const precio925 =
    (data?.result?.Tarifas?.Plata[2].Productos[0].Precio).toFixed(2);
  const precio800 =
    (data?.result?.Tarifas?.Plata[0].Productos[0].Precio).toFixed(2);
  //const masDePlata = ciudad?.acf?.para_mas_de_plata;
  //const PrecioMasPlata = ciudad?.acf?.precio_mas_de_plata;
  const masDePlata = 10;
  const PrecioMasPlata = 20;
  const precio999Suma = (
    parseFloat(precio999) + parseFloat(PrecioMasPlata)
  ).toFixed(2);
  const precio925Suma = (
    parseFloat(precio925) + parseFloat(PrecioMasPlata)
  ).toFixed(2);
  const precio800Suma = (
    parseFloat(precio800) + parseFloat(PrecioMasPlata)
  ).toFixed(2);
  const valorSelectSuma = (
    parseFloat(valorSelect) + parseFloat(PrecioMasPlata)
  ).toFixed(2);
  const valorSelectNormal = parseFloat(valorSelect).toFixed(2);
  return (
    <div className={styles.contenedorAmbosBloquesOro}>
      <div className={styles.contenedorBloqueSuperior}>
        <div className={styles.bloqueIzq}>
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
        <div className={styles.botones}>
          <button
            onClick={() => {
              setMasDe(true);
            }}
            className={
              masDe
                ? `${styles.button} ${styles.botonActivo}`
                : `${styles.button} `
            }
          >
            Más de {masDePlata}kg
          </button>
          <button
            onClick={() => {
              setMasDe(false);
            }}
            className={
              masDe
                ? `${styles.button} `
                : `${styles.button} ${styles.botonActivo}`
            }
          >
            Menos de {masDePlata}kg
          </button>
        </div>
        {masDe ? (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.masde}>Más de {masDePlata}kg</p>
                {!loading ? (
                  <p className={styles.precio18k}>Cargando</p>
                ) : (
                  <p className={styles.precio18k}>
                    {selectKilates ? "--- " : precio999Suma}
                    <span>€/kg</span>
                  </p>
                )}
                <p className={styles.kilates}>999</p>
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {selectKilates ? "--- " : precio925Suma} <span>€/kg</span>
                  </p>
                )}
                <p className={styles.preciok}>925</p>
              </div>
              <div className={styles.OtrosPrecios}>
                {!loading ? (
                  <p className={styles.precio}>Cargando</p>
                ) : (
                  <p className={styles.precio}>
                    {selectKilates ? "--- " : precio800Suma} <span>€/kg</span>
                  </p>
                )}
                <p className={styles.preciok}>800</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contenedorPrecios}>
            <div className={styles.contenedorprecioDestacado}>
              <div className={styles.precioDestacado}>
                <p className={styles.masde}>Menos de {masDePlata}kg</p>
                <p className={styles.precio18k}>
                  {selectKilates ? "--- " : precio999}
                  <span>€/kg</span>
                </p>
                <p className={styles.kilates}>999</p>
              </div>
            </div>
            <div className={styles.contenedorOtrosPrecios}>
              <div className={styles.OtrosPrecios}>
                <p className={styles.precio}>
                  {selectKilates ? "--- " : precio925} <span>€/kg</span>
                </p>
                <p className={styles.preciok}>925</p>
              </div>
              <div className={styles.OtrosPrecios}>
                <p className={styles.precio}>
                  {selectKilates ? "--- " : precio800} <span>€/kg</span>
                </p>
                <p className={styles.preciok}>800</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.contenedorCalculadora}>
        <h2>
          ¿Cuánto <span>te vamos a dar</span> por tus joyas?
        </h2>
        <div className={styles.contenedorSelect}>
          <div className={styles.Select}>
            <p>Selecciona pureza</p>
            <div
              className={styles.SelectDiv}
              onClick={() => {
                setSelectKilates2(!selectKilates2);
              }}
            >
              <span
                className={styles.SelectDivKilate}
                //data-precio={precio18k.toFixed(2)}
              >
                {selectKilates3 ? (
                  DataNombreKilate
                ) : (
                  <>
                    <span style={{ color: "#000" }}>---</span>{" "}
                    <KeyboardArrowDownIcon style={{ marginLeft: "65px" }} />
                  </>
                )}
              </span>
              <div
                className={
                  selectKilates2
                    ? `${styles.contenedorKilates} ${styles.contenedorKilatesActive}`
                    : `${styles.contenedorKilates}`
                }
              >
                <ul className={styles.contenedorUl}>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio999}
                    data-nombre={"999"}
                  >
                    999
                  </li>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio925}
                    data-nombre={"925"}
                  >
                    925
                  </li>
                  <li
                    onClick={(e) => {
                      setValorSelect(e.target.dataset.precio);
                      setDataNombreKilate(e.target.dataset.nombre);
                      setSelectKilates3(true);
                    }}
                    data-precio={precio800}
                    data-nombre={"800"}
                  >
                    800
                  </li>
                </ul>
              </div>
            </div>
            {/*<select
              onChange={(e) => {
                setValorSelect(e.target.value);
              }}
            >
              <option selected={true} disabled="disabled">
                ---
              </option>
              <option value={precio18k.toFixed(2)}>18K</option>
              <option value={precio14k.toFixed(2)}>14K</option>
              <option value={precio24k.toFixed(2)}>24K</option>
            </select>*/}
          </div>
          {/*<div className={styles.Select}>
            <p>Selecciona pureza</p>
            <select
              onChange={(e) => {
                setValorSelect(e.target.value);
              }}
            >
              <option value={0}>---</option>
              <option value={precio999}>999</option>
              <option value={precio925}>925</option>
              <option value={precio800}>800</option>
            </select>
            </div>*/}
          <div className={styles.input}>
            <p>Introduce gramos</p>
            <input
              placeholder="Cantidad"
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={(event) => setValorInput(event.target.value)}
            />
            <span>g</span>
          </div>
        </div>
        <p className={styles.tituloInferior}>TE DAMOS POR TU PLATA</p>
        <p className={styles.precioFinal}>
          {selectKilates3
            ? valorInput >= parseFloat(masDePlata * 1000)
              ? ((valorInput / 1000) * valorSelectSuma).toLocaleString("es", {
                  style: "currency",
                  currency: "EUR",
                })
              : ((valorInput / 1000) * valorSelectNormal).toLocaleString("es", {
                  style: "currency",
                  currency: "EUR",
                })
            : "---"}
          <span></span>
        </p>
        <p className={styles.promocion}>
          <span className={styles.linea}>Promoción Online</span>
        </p>
      </div>
      <a
        className={styles.botonLlamarTienda}
        href={`tel:${ciudad?.acf?.telefono}`}
      >
        LLAMA GRATIS AL {ciudad?.acf?.telefono}
      </a>
    </div>
  );
};

export default CalculadoraOro;
