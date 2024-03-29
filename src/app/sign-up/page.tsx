import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Sign Up" />

      <SignUpForm />

      <Footer />
    </>
  );
};
