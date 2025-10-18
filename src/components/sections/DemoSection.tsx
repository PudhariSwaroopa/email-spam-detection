import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles, AlertCircle, CheckCircle, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ✅ Fully Enhanced Spam & Phishing Detection
const detectSpam = (
  text: string
): { result: "spam" | "ham"; confidence: number; model: string } => {
  if (!text || text.trim().length === 0) {
    return { result: "ham", confidence: 0, model: "Hybrid Heuristic Filter" };
  }

  const lowerText = text.toLowerCase();

  // General spam keywords
  const spamPatterns: RegExp[] = [
    /\bfree\b/,
    /\bwin+er?\b/,
    /\bprize\b/,
    /\bcongratulations\b/,
    /\bclick\s?(here)?\b/,
    /\boffer\b/,
    /\burgent\b/,
    /\bclaim\b/,
    /\blimited\b/,
    /\bdeal\b/,
    /\bbonus\b/,
    /\bguarantee\b/,
    /\bcredit\s?card\b/,
    /\bloan\b/,
    /\binvestment\b/,
    /\brich\b/,
    /\bcash\b/,
    /\bmillion\b/,
    /\bbillion\b/,
    /\bno\s?obligation\b/,
    /\brisk[-\s]?free\b/,
    /\bapply\s?now\b/,
    /\bverify\s?account\b/,
    /\bupdate\s?details\b/,
    /\bpassword\b/,
    /https?:\/\/[^\s]+/,
  ];

  // Phishing-specific patterns
  const phishingPatterns: RegExp[] = [
    /\bsuspended\b/,
    /\bunauthorized\b/,
    /\balert\b/,
    /\bsecurity\b/,
    /\bconfirm\b/,
    /\baccount\s+locked\b/,
    /\bupdate\s+information\b/,
    /\blogin\s+here\b/,
  ];

  const allPatterns = [...spamPatterns, ...phishingPatterns];

  // Urgency keywords
  const urgentWords = ["urgent", "immediately", "action required", "asap"];

  // Heuristics
  const exclamationCount = (text.match(/!/g) || []).length;
  const uppercaseLetters = text.replace(/[^A-Z]/g, "").length;
  const uppercaseRatio = (uppercaseLetters / Math.max(text.length, 1)) * 100;
  const linkCount = (text.match(/https?:\/\/[^\s]+/g) || []).length;
  const suspiciousWords = allPatterns.filter((p) => p.test(lowerText)).length;
  const urgencyScore = urgentWords.filter((word) => lowerText.includes(word))
    .length;

  // Scoring system
  let spamScore =
    suspiciousWords * 2 +
    Math.min(exclamationCount, 5) * 0.5 +
    (uppercaseRatio > 30 ? 2 : 0) +
    linkCount * 2 +
    urgencyScore * 2;

  const isSpam = spamScore >= 4; // Lowered threshold for phishing
  const confidence = Math.min(40 + spamScore * 12, 99); // Adjust confidence scaling

  return {
    result: isSpam ? "spam" : "ham",
    confidence: Math.round(confidence),
    model: "Hybrid Heuristic (Enhanced Naive Filter v2)",
  };
};

const DemoSection = () => {
  const [emailText, setEmailText] = useState("");
  const [prediction, setPrediction] = useState<{
    result: "spam" | "ham" | null;
    confidence: number;
    model: string;
  }>({ result: null, confidence: 0, model: "" });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!emailText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter an email message to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const result = detectSpam(emailText);
      setPrediction(result);
      setIsAnalyzing(false);

      toast({
        title: "Analysis Complete",
        description: `Email classified as ${result.result.toUpperCase()} with ${result.confidence}% confidence.`,
      });
    }, 500);
  };

  const sampleEmails = {
    spam: "URGENT: Your bank account has been suspended. Please verify your account immediately to restore access!",
    ham: "Hi Sarah, I wanted to follow up on our meeting yesterday about the Q4 project timeline. Could you send me the updated documentation when you get a chance? Thanks!",
  };

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Try Spam Detection Live</h2>
          <p className="text-muted-foreground text-lg">
            Enter any email message below and our model will predict if it's
            spam or legitimate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-destructive" />
              Sample Spam Email
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {sampleEmails.spam}
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEmailText(sampleEmails.spam)}
              className="w-full"
            >
              Load Sample
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              Sample Legitimate Email
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {sampleEmails.ham}
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEmailText(sampleEmails.ham)}
              className="w-full"
            >
              Load Sample
            </Button>
          </Card>
        </div>

        <Card className="p-8 shadow-glow">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Message
              </label>
              <Textarea
                placeholder="Paste or type your email message here..."
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
            </div>

            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-pulse" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Analyze Email
                </>
              )}
            </Button>

            {prediction.result && (
              <Card
                className={`p-6 border-2 ${
                  prediction.result === "spam"
                    ? "bg-destructive/5 border-destructive"
                    : "bg-success/5 border-success"
                }`}
              >
                <div className="flex items-start gap-4">
                  {prediction.result === "spam" ? (
                    <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-success flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      {prediction.result === "spam"
                        ? "⚠️ SPAM / PHISHING DETECTED"
                        : "✅ LEGITIMATE EMAIL"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The email has been classified as{" "}
                      <span className="font-semibold">
                        {prediction.result === "spam"
                          ? "spam / phishing"
                          : "legitimate (ham)"}
                      </span>
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Confidence
                        </p>
                        <p className="text-2xl font-bold">
                          {prediction.confidence}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Model Used
                        </p>
                        <p className="text-sm font-semibold">
                          {prediction.model}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
