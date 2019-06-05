import React from "react";
import Layout from "../../components/Layout";

const ContactIndex = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Contact Us</h1>
        <div
          className="embed-responsive embed-responsive-16by9 mt-5"
          style={{
            minHeight: "65vh",
          }}
        >
          <div className="embed-responsive-item">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdUT-D6STH2PDtDdwFsbKStaCvw81ZkE_uqCeGQGA-pU0o01Q/viewform?embedded=true"
              frameBorder="0"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactIndex;
