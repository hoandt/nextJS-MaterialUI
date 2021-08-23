import Head from "next/head";
import HeaderBar from "./Header";
import { Grid } from "@material-ui/core";
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
      <Grid container direction="column">
        <Grid item>
          <HeaderBar />
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            {children}
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
Layout.defaultProps = {
  title: "",
  siteName: "Material UI",
};
export default Layout;
