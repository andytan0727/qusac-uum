import React from "react";

import Layout from "../../components/Layout";
import NewsRoll from "../../components/NewsRoll";

const NewsIndexPage = () => {
  return (
    <Layout>
      <header
        className="container-fluid mt-n3 d-flex justify-content-center align-items-center"
        style={{
          height: "40vh",
          backgroundColor: "rgba(200,200,200,.9)",
        }}
      >
        <h1>Latest News</h1>
      </header>
      <main className="container mt-4">
        <NewsRoll />
      </main>
    </Layout>
  );
};

export default NewsIndexPage;
