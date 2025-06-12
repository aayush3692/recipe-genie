import React from "react";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import DemoVisualization from "@/components/Demo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />

      <Separator className="my-12" />

      {/* Features Grid */}
      <section
        id="features"
        className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >

        <FeaturesGrid />
      </section>

      <Separator className="my-12" />

      {/* Demo Visualization */}
      <section id="demo" className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <DemoVisualization />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="about"
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy home chefs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah K."
            role="Home Chef"
            avatarSeed="Sarah"
            testimonial="This app has completely changed how I cook. I no longer waste food and the voice guidance makes cooking so much easier!"
          />
          <TestimonialCard
            name="Michael T."
            role="Busy Parent"
            avatarSeed="Michael"
            testimonial="As a busy parent, this app is a lifesaver. I can quickly find recipes based on what I have, and the results are always delicious."
          />
          <TestimonialCard
            name="Jamie L."
            role="Culinary Student"
            avatarSeed="Jamie"
            testimonial="The personalized flavor suggestions are incredible. I've learned so many new cooking techniques and flavor combinations."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of home chefs who are cooking smarter, reducing
            waste, and creating delicious meals with AI.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg h-auto"
          >
            Get Started For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
