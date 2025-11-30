// This is the Home Page
import Navbar from "@/components/navbar"
import CarouselDemo from "@/components/hero-carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <CarouselDemo />
        <div className="container mx-auto px-4">

          <div className="m-10 p-10">
            <h1 className="text-center text-2xl font-bold uppercase" style={{ color: "#0076bf" }}> New and Featured Coffees </h1>
            <div className="flex justify-center pt-7">
              <Button size="lg" className="center-align uppercase justify-center p-8" style={{ backgroundColor: "#0076bf" }}> Shop all Coffee </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col">
              <Image src="/images/product-images/beans1.png" alt="Holiday Coffee" width={400} height={400} className="max-w-full h-auto" />
              <h3 className="text-center uppercase text-2xl font-bold p-4" style={{ color: "#0076bf" }}> Boun Natale 2025 </h3>
              <p className="text-center text-base"> Strawberry jam filled milk chocolates and sugar-crusted snickerdoodles. Tis the season to brew something special </p>
            </div>

            <div className="col">
              <Image src="/images/product-images/beans2.png" alt="Roaster Choice Sample Pack" width={400} height={400} className="max-w-full h-auto" />
              <h3 className="text-center uppercase text-2xl font-bold p-4" style={{ color: "#0076bf" }}> Roaster Choice Sample Pack </h3>
              <p className="text-center text-base"> Give something everyone will enjoy: our new sample box filled with our favorite blends of the year. Featuring our holiday Buon Natale blend full of sugar and spice notes, sweet and chocolatey Vita Nuova, and our medium-dark roast with a cherry kick La Prima Bar Reserve </p>
            </div>

            <div className="col">
              <Image src="/images/product-images/beans3.png" alt="La Prima Bar Reserve 37" width={400} height={400} className="max-w-full h-auto" />
              <h3 className="text-center uppercase text-2xl font-bold p-4" style={{ color: "#0076bf" }}> La Prima Bar Reserve 37</h3>
              <p className="text-center text-base"> In honor of our 37th anniversary, we have created a special limited edition of our house espresso. Full of chocolate and spice with an unmistakable note of black cherry </p>
            </div>
          </div>

          <Image src="/images/merch-image.png" alt="Merch Image" width={1300} height={1000} className="max-w-full h-auto mx-auto block p-15" />
          <div className="p-2">
            <h3 className="text-center uppercase text-2xl font-bold pb-4" style={{ color: "#0076bf" }}> A Pittsburgh Tradition </h3>
            <p className="text-center font-bold text-lg pb-7"> Take a piece of our caffè home with you </p>
            <div className="flex justify-center pb-7">
              <Button size="lg" className="center-align uppercase justify-center p-8" style={{ backgroundColor: "#0076bf" }}> Shop All Merch </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 pb-10">
            <div className="col p-5">
              <Image src="/images/merch-images/astro-shirt.png" alt="La Prima x Astrobotic T-Shirt" width={400} height={400} className="max-w-full h-auto p-2" />
              <h3 className="text-center uppercase text-lg font-bold" style={{ color: "#0076bf" }}>La Prima x Astrobotic T-Shirt </h3>
              <p className="text-center"> We have partnered with Pittsburgh's own Astrobotic for an out of this world design</p>
            </div>

            <div className="col p-5">
            <Image src="/images/merch-images/oak-shirt.png" alt="La Prima Oak" width={400} height={400} className="max-w-full h-auto p-2" />
              <h3 className="text-center uppercase text-lg font-bold" style={{ color: "#0076bf" }}>LP Seal T-Shirt - French Oak </h3>
              <p className="text-center"> Our La Prima Espresso Co. seal design printed on french oak dyed ultra-durable combed cotton</p>
            </div>

            <div className="col p-5">
            <Image src="/images/merch-images/burro-shirt.png" alt="La Prima Burro" width={400} height={400} className="max-w-full h-auto p-2" />
              <h3 className="text-center uppercase text-lg font-bold" style={{ color: "#0076bf" }}>LP Banner T-Shirt - Burro </h3>
              <p className="text-center"> Our La Prima Espresso Co. banner printed on burro brown dyed ultra-durable combed cotton</p>
            </div>

            <div className="col p-5">
            <Image src="/images/merch-images/mugs.png" alt="La Prima Mugs" width={400} height={400} className="max-w-full h-auto p-2" />
              <h3 className="text-center uppercase text-lg font-bold" style={{ color: "#0076bf" }}>La Prima Mugs </h3>
              <p className="text-center"> Enjoy La Prima coffee in style with our new 15oz. ceramic mug</p>
            </div>
          </div>

          <div className="text-center p-10">
            <h2 className="text-2xl font-bold uppercase" style={{ color: "#0076bf" }}> How can we help you </h2>
            <p className="p-3"> If we can help you make a decision, please reach out, we'd love to assist you. Our founder is a teacher and education is part of the La Prima way.</p>
            <p className="p-2 pb-5"> Email orders@laprima.com or use the button below. </p>
            <Button size="lg" className="center-align uppercase justify-center p-8" style={{ backgroundColor: "#0076bf" }}> Contact Us </Button>
          </div>

        </div>
      </main>
    </div>
  );
}
