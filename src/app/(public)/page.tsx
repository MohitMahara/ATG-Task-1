import Image from "next/image";
import Hero from "../_landing/Hero";
import Features from "../_landing/Features";
import Guide from "../_landing/Guide";
import Companies from "../_landing/Companies";
import FreeTrial from "../_landing/FreeTrial";
import InTouch from "../_landing/InTouch";
import Dashboard from "../_landing/Dashboard";
// import Head from "next/head";



export default function Home() {
  
  return (
  <div>
    {/* <h1>Welcome to the ATG Project</h1> */}
    <Hero/>
    <Dashboard/>
    <Features/>
    <Guide/>
    <Companies/>
    <FreeTrial/>
    <InTouch/>
    
  </div>
 
  );
}
