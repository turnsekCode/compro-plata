import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Compro-plata/Section_1/Section_uno";
import Section_dos from "@/componentes/Compro-plata/Section_2/Section_dos";
import Section_tres from "@/componentes/Compro-plata/Section_3/Section_tres";
import Section_cuatro from "@/componentes/Compro-plata/Section_4/Section_cuatro";
import Section_cinco from "@/componentes/Compro-plata/Section_5/Section_cinco";
import Section_Seis from "@/componentes/Compro-plata/Section_6/Section_seis";
import Section_seis_mobil from "@/componentes/Compro-plata/Section_6_mobil/Section_seis_mobil";
import Section_siete from "@/componentes/Compro-plata/Section_7/Section_siete";

const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "Quickgold",
  url: "https://quickgold.es/compro-oro/",
  sameAs: [
    "https://instagram.com/quickgold.es",
    "https://twitter.com/quickgoldqg",
    "https://www.facebook.com/quickgold.es",
  ],
  logo: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  image: "https://quickgold.es/wp-content/uploads/img/logo.jpg",
  description:
    "Quickgold es tu tienda compro oro de confianza. Obtén dinero extra por las joyas de oro que ya no quieras. Tasación transparente y segura.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34 900 373 629",
    contactType: "info@quickgold.es",
  },
};

export default function Home({
  menu_list,
  ListadoCiudades,
  listadoCiudadesServicios,
  ciudad,
}) {
  return (
    <>
      <SEO
        title="Vender Plata | Tiendas Compro Plata | Precio Plata Hoy"
        description="Vende tus piezas de plata en nuestras tiendas Quickgold. Precio de la plata siempre actualizado y el mejor precio de tu ciudad. Pago en efectivo."
        icon="/favicon.png"
        facebook={{
          image: "/facebook.png",
          url: "https://www.facebook.com/quickgold.es/",
          type: "article",
        }}
        twitter={{
          image: "/twitter.png",
          site: "@quickgoldQG",
          card: "summary_large_image",
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout menu_list={menu_list}>
        <div className={styles.main}>
          <Breadcrumbs
            raiz="Quickgold"
            iconoRaiz={<KeyboardArrowRightIcon />}
            urlUbicacionActual="https://quickgold.es/compro-plata/"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Compro Plata"
          />
          <Section_uno ciudad={ciudad} />
          <Section_dos ciudad={ciudad} />
        </div>
        <Section_tres ciudad={ciudad} ListadoCiudades={ListadoCiudades} />
        <Section_cuatro ciudad={ciudad} />
        <Section_Seis ciudad={ciudad} />
        <Section_seis_mobil ciudad={ciudad} />
        <Section_siete
          ciudad={ciudad}
          listadoCiudadesServicios={listadoCiudadesServicios}
        />
      </Layout>
    </>
  );
}
const idPaginaWp = "377";
export async function getStaticProps() {
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/
  const Listado = await fetch(`https://quickgold.es/listadoCiudades.json`);
  const ListadoCiudades = await Listado.json();

  const listadoServicio = await fetch(
    `https://quickgold.es/listadoCiudadesServicioPlata.json`
  );
  const listadoCiudadesServicios = await listadoServicio.json();

  const menu = await fetch(
    `https://admin.quickgold.es/wp-json/menus/v1/menus/2`
  );
  const menu_list = await menu.json();

  const ciudad1 = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();

  // Pass data to the page via props
  return {
    props: {
      menu_list,
      ListadoCiudades,
      listadoCiudadesServicios,
      ciudad,
    },
    revalidate: 1,
  };
}
