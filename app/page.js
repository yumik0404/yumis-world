import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <main className ="flex min-h-screen flex-col bg-[#f1ede6]">
      <div class="container mt-24 mx-auto px-12 py-4">
        <NavBar />
        <div id="home"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="gallery"><GallerySection /></div>
      </div>
  </main> 
  );
}
