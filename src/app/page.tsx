import AuthorCard from "@/components/AuthorCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import NavBar from "@/components/NavBar";
import React from "react";


export default function Home() {
  return (
   <div>
        <NavBar/>
        <Features/>
        <Mega/>
        <AuthorCard/>
        <Footer/>
   </div>
  );
}
