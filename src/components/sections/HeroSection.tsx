import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Brain, Shield, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            B.Tech AIML Microproject
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Email Spam Detection
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Using Machine Learning Classification Algorithms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate("demo")}
              className="shadow-glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("results")}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Results
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3 ML Algorithms</h3>
            <p className="text-muted-foreground">
              Compare Logistic Regression, SVM, and Naive Bayes for optimal spam detection accuracy.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Preprocessing</h3>
            <p className="text-muted-foreground">
              TF-IDF vectorization with text cleaning, stop word removal, and feature extraction.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">98.5% Accuracy</h3>
            <p className="text-muted-foreground">
              Achieved high precision and recall with comprehensive model evaluation metrics.
            </p>
          </Card>
        </div>

        {/* Project Overview */}
        <Card className="p-8 bg-gradient-card shadow-card">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Develop and compare three machine learning classification algorithms to accurately 
                detect spam emails. The system processes raw email text, extracts meaningful features 
                using NLP techniques, and predicts whether an email is spam or legitimate (ham).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Methodology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Data preprocessing with text cleaning and normalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>TF-IDF vectorization for feature extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Train-test split (80-20) for model validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Comprehensive evaluation with multiple metrics</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
