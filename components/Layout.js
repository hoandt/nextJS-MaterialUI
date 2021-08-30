import Head from "next/head";
import HeaderBar from "./Header";

function Layout({ children, title, siteName }) {
  return (
    <>
      <Head>
        <title>{`${title} | ${siteName}`}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <HeaderBar />
      {children}
    </>
  );
}
Layout.defaultProps = {
  title: "",
  siteName: "VNC Shopping - Webos",
};
export default Layout;
