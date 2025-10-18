import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Code, Database, TrendingUp } from "lucide-react";

const DocumentationSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Complete Documentation
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Project Documentation</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technical report and methodology
          </p>
        </div>

        {/* Abstract */}
        <Card className="p-8 mb-8 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Abstract</h3>
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This project implements and compares three machine learning classification algorithms for email spam detection: 
            Logistic Regression, Support Vector Machine (SVM), and Naive Bayes. The system processes email text data through 
            comprehensive preprocessing including text cleaning, stop word removal, and TF-IDF vectorization. Through systematic 
            evaluation on a dataset of 2000 emails split into 80-20 train-test sets, we achieved accuracies ranging from 95.2% 
            to 98.5%. Naive Bayes emerged as the best performer with 98.5% accuracy, demonstrating the effectiveness of 
            probabilistic approaches for text classification tasks.
          </p>
        </Card>

        {/* Algorithms Explained */}
        <Card className="p-8 mb-8 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <Code className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Machine Learning Algorithms</h3>
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">1. Logistic Regression</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A linear classification algorithm that models the probability of binary outcomes. It uses the sigmoid function 
                to map predictions to probabilities between 0 and 1, making it interpretable and efficient for text classification.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                P(y=1|x) = 1 / (1 + e^(-wx + b))
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold">Achieved:</span> 95.2% accuracy, 94.8% precision
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">2. Support Vector Machine (SVM)</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A powerful algorithm that finds the optimal hyperplane to separate classes in high-dimensional space. 
                It maximizes the margin between different classes, making it robust to outliers and effective for text data.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                max(margin) = 2 / ||w|| subject to y_i(w·x_i + b) ≥ 1
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold">Achieved:</span> 97.1% accuracy, 96.8% precision
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">3. Naive Bayes (MultinomialNB)</h4>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A probabilistic classifier based on Bayes' theorem with the assumption of feature independence. 
                Particularly effective for text classification due to its ability to handle high-dimensional data efficiently.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
                P(spam|words) = P(words|spam) × P(spam) / P(words)
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold">Achieved:</span> 98.5% accuracy, 98.2% precision
              </p>
            </div>
          </div>
        </Card>

        {/* Dataset & Preprocessing */}
        <Card className="p-8 mb-8 shadow-card">
          <div className="flex items-start gap-4 mb-6">
            <Database className="w-8 h-8 text-success flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Dataset & Preprocessing</h3>
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Dataset Details</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Total Samples:</strong> 2000 emails (1000 spam, 1000 ham)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Split Ratio:</strong> 80% training (1600), 20% testing (400)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Source:</strong> Public email spam dataset with balanced classes</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 mt-6">Preprocessing Pipeline</h4>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge>1</Badge>
                  <div>
                    <p className="font-semibold">Text Cleaning</p>
                    <p className="text-sm text-muted-foreground">Remove special characters, URLs, email addresses, and numbers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge>2</Badge>
                  <div>
                    <p className="font-semibold">Lowercasing</p>
                    <p className="text-sm text-muted-foreground">Convert all text to lowercase for uniformity</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge>3</Badge>
                  <div>
                    <p className="font-semibold">Stop Word Removal</p>
                    <p className="text-sm text-muted-foreground">Remove common words that don't carry significant meaning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge>4</Badge>
                  <div>
                    <p className="font-semibold">TF-IDF Vectorization</p>
                    <p className="text-sm text-muted-foreground">Transform text into numerical features (max 5000 features)</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-8 shadow-card bg-gradient-card">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Conclusion</h3>
              <div className="h-1 w-20 bg-gradient-primary rounded-full" />
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This project successfully demonstrated the application of three machine learning algorithms for email spam detection. 
              Through comprehensive data preprocessing and feature extraction using TF-IDF vectorization, we achieved high accuracy 
              rates across all models.
            </p>
            <p>
              <span className="font-semibold text-foreground">Naive Bayes</span> emerged as the most effective algorithm with 98.5% 
              accuracy, followed closely by SVM at 97.1%. The probabilistic nature of Naive Bayes, combined with its efficiency in 
              handling text data, made it particularly suitable for this task.
            </p>
            <p>
              The project demonstrates the importance of proper text preprocessing and feature engineering in natural language 
              processing tasks. The confusion matrices revealed low false positive rates across all models, which is crucial for 
              practical spam filtering systems where false positives (legitimate emails marked as spam) can have significant consequences.
            </p>
            <p className="font-semibold text-foreground">
              Future enhancements could include deep learning approaches, real-time classification, and integration with email systems 
              for practical deployment.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DocumentationSection;
