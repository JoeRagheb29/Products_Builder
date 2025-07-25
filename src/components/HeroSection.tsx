import React from "react";
import Button from "./UI/Button";
import NavBar from "./NavBar" ;

export default function HeroSection({ScrollToRef}) {

  const scrollHandler = () => {
    ScrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <NavBar scrollHandler={scrollHandler} />
      <div className="flex min-h-screen items-center">  
      <section className="flex flex-col-reverse md:flex-row w-full items-center justify-between px-6 md:px-16 py-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="lg:text-6xl md:text-3xl sm:text-2xl font-normal text-gray-900 leading-tight">
            Build, Edit & Manage <br /> Your Products Easily
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            An interactive dashboard to manage your product catalog — with ease and clarity.
          </p>
          <Button onClick={scrollHandler}
           width="w-fit" className="mt-6 px-6 py-3 bg-violet-800 hover:bg-violet-900 text-white rounded-md shadow transition duration-300">
            Get Started
          </Button>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://www.thecustomproductbuilder.com/wp-content/uploads/sites/8/2018/06/foot.png"
            alt="Product Dashboard"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>
      </div>
    </div>
  );
}