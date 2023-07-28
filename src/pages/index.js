import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Breadcrumbs from "@/componentes/Breadcrumbs/Breadcrumbs";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Layout from "@/componentes/Layout/Layout";
import SEO from "@bradgarropy/next-seo";
import Section_uno from "@/componentes/Compro-oro/Section_1/Section_uno";
import Section_dos from "@/componentes/Compro-oro/Section_2/Section_dos";
import Section_tres from "@/componentes/Compro-oro/Section_3/Section_tres";
import Section_cinco from "@/componentes/Compro-oro/Section_5/Section_cinco";
import Section_seis from "@/componentes/Compro-oro/Section_6/Section_seis";

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
        title="Compro Oro al Mejor Precio. Tiendas Compro Oro | Quickgold"
        description="Quickgold es tu tienda compro oro de confianza. Obtén dinero extra por las joyas de oro que ya no quieras. Tasación transparente y segura."
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
            urlUbicacionActual="https://quickgold.es/compro-oro/"
            iconoUbiccionActual={<KeyboardArrowRightIcon />}
            ubicacionActual="Compro Oro"
          />
          <Section_uno ciudad={ciudad} />
          <Section_dos ciudad={ciudad} />
          <Section_tres ciudad={ciudad} ListadoCiudades={ListadoCiudades} />
          <Section_cinco ciudad={ciudad} />
          <Section_seis
            listadoCiudadesServicios={listadoCiudadesServicios}
            ciudad={ciudad}
          />
        </div>
      </Layout>
    </>
  );
}
const idPaginaWp = "326";
export async function getStaticProps() {
  /*const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();*/
  const Listado = await fetch(`https://quickgold.es/listadoCiudades.json`);
  const ListadoCiudades = await Listado.json();

  const listadoServicio = await fetch(
    `https://quickgold.es/listadoCiudadesServicioOro.json`
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
