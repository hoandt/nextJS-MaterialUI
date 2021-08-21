import Head from "next/head";
function Layout({ children, title, siteName }) {
  return (
    <>
      <Head>
        <title>{`${title}::${siteName}::`}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {children}
    </>
  );
}
Layout.defaultProps = {
  title: "",
  siteName: "Material UI",
};
export default Layout;
