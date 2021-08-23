import React from "react";
import Layout from "@/components/Layout";
import { Grid, Typography } from "@material-ui/core";
import ProductCard from "@/components/ProductCard";
function Homepage() {
  return (
    <Layout title="Homepage">
      <Grid container spacing={1}>
        {[...new Array(5)].map(() => (
          <Grid key={Math.random()} item xs={12} md={4}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

export default Homepage;
