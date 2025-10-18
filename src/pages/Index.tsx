import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DemoSection from "@/components/sections/DemoSection";
import ResultsSection from "@/components/sections/ResultsSection";
import DocumentationSection from "@/components/sections/DocumentationSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentSection={currentSection} onNavigate={scrollToSection} />
      
      <main>
        <div id="home">
          <HeroSection onNavigate={scrollToSection} />
        </div>
        <div id="demo">
          <DemoSection />
        </div>
        <div id="results">
          <ResultsSection />
        </div>
        <div id="docs">
          <DocumentationSection />
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            B.Tech AIML Microproject - Email Spam Detection Using Machine Learning
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Logistic Regression • SVM • Naive Bayes Classification
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
