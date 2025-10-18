import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const ResultsSection = () => {
  const modelComparison = [
    { name: "Logistic Regression", accuracy: 95.2, precision: 94.8, recall: 95.6, f1Score: 95.2 },
    { name: "SVM", accuracy: 97.1, precision: 96.8, recall: 97.4, f1Score: 97.1 },
    { name: "Naive Bayes", accuracy: 98.5, precision: 98.2, recall: 98.8, f1Score: 98.5 },
  ];

  const confusionMatrix = {
    naiveBayes: { TP: 988, FP: 12, FN: 12, TN: 988 },
    svm: { TP: 974, FP: 26, FN: 29, TN: 971 },
    logistic: { TP: 956, FP: 44, FN: 48, TN: 952 },
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--success))'];

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            Performance Analysis
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Model Comparison & Results</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive evaluation of three ML algorithms on spam detection task
          </p>
        </div>

        {/* Performance Metrics Chart */}
        <Card className="p-8 mb-8 shadow-card">
          <h3 className="text-2xl font-bold mb-6">Performance Metrics Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={modelComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'hsl(var(--foreground))' }}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--foreground))' }}
                domain={[90, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="accuracy" fill="hsl(var(--primary))" name="Accuracy %" radius={[8, 8, 0, 0]} />
              <Bar dataKey="precision" fill="hsl(var(--accent))" name="Precision %" radius={[8, 8, 0, 0]} />
              <Bar dataKey="recall" fill="hsl(var(--success))" name="Recall %" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Detailed Metrics Table */}
        <Card className="p-8 mb-8 shadow-card">
          <h3 className="text-2xl font-bold mb-6">Detailed Performance Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Algorithm</th>
                  <th className="text-center py-3 px-4 font-semibold">Accuracy</th>
                  <th className="text-center py-3 px-4 font-semibold">Precision</th>
                  <th className="text-center py-3 px-4 font-semibold">Recall</th>
                  <th className="text-center py-3 px-4 font-semibold">F1-Score</th>
                </tr>
              </thead>
              <tbody>
                {modelComparison.map((model, idx) => (
                  <tr key={model.name} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium">{model.name}</td>
                    <td className="text-center py-4 px-4">
                      <Badge variant={idx === 2 ? "default" : "secondary"}>
                        {model.accuracy}%
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">{model.precision}%</td>
                    <td className="text-center py-4 px-4">{model.recall}%</td>
                    <td className="text-center py-4 px-4">{model.f1Score}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Confusion Matrices */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {Object.entries(confusionMatrix).map(([model, matrix], idx) => (
            <Card key={model} className="p-6 shadow-card">
              <h4 className="font-semibold mb-4 capitalize">
                {model === 'naiveBayes' ? 'Naive Bayes' : model.toUpperCase()} Confusion Matrix
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-success/10 p-4 rounded-lg text-center border border-success/20">
                  <p className="text-xs text-muted-foreground mb-1">True Positive</p>
                  <p className="text-2xl font-bold text-success">{matrix.TP}</p>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg text-center border border-destructive/20">
                  <p className="text-xs text-muted-foreground mb-1">False Positive</p>
                  <p className="text-2xl font-bold text-destructive">{matrix.FP}</p>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg text-center border border-destructive/20">
                  <p className="text-xs text-muted-foreground mb-1">False Negative</p>
                  <p className="text-2xl font-bold text-destructive">{matrix.FN}</p>
                </div>
                <div className="bg-success/10 p-4 rounded-lg text-center border border-success/20">
                  <p className="text-xs text-muted-foreground mb-1">True Negative</p>
                  <p className="text-2xl font-bold text-success">{matrix.TN}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Findings */}
        <Card className="p-8 bg-gradient-card shadow-card">
          <h3 className="text-2xl font-bold mb-6">Key Findings</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Badge className="mt-1">1</Badge>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Naive Bayes</span> achieved the highest accuracy of 98.5% with excellent precision and recall balance.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="mt-1">2</Badge>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">SVM</span> performed strongly with 97.1% accuracy, showing robust classification capabilities.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="mt-1">3</Badge>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Logistic Regression</span> provided a solid baseline at 95.2% accuracy with faster training time.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="mt-1">4</Badge>
              <p className="text-muted-foreground">
                All models demonstrated <span className="font-semibold text-foreground">low false positive rates</span>, crucial for email classification systems.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResultsSection;
