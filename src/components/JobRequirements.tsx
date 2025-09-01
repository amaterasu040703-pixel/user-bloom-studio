import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export const JobRequirements = () => {
  const requirements = [
    "Strong experience in React/Next.js development with TypeScript",
    "Proficiency in modern CSS frameworks, particularly Tailwind CSS",
    "Experience with state management and component architecture",
    "Knowledge of RESTful APIs and GraphQL integration",
    "Understanding of responsive design and cross-browser compatibility",
    "Version control with Git and collaborative development workflows",
    "Strong problem-solving skills and attention to detail",
    "Excellent communication skills for remote collaboration"
  ];

  const preferred = [
    "Experience with Supabase backend integration",
    "Payment integration experience with Stripe or similar platforms",
    "Data visualization libraries (Chart.js, Recharts, D3.js)",
    "Authentication systems implementation (Clerk, Auth0, Firebase)",
    "Experience with AI tools and automation workflows",
    "Knowledge of testing frameworks (Jest, Cypress, Playwright)",
    "Experience with deployment and CI/CD pipelines",
    "Previous remote work experience"
  ];

  return (
    <section className="py-20 bg-gradient-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              What We're Looking For
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team that values innovation, creativity, and technical excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Required Skills */}
            <Card className="bg-glass border-glass backdrop-blur-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Required Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Preferred Skills */}
            <Card className="bg-glass border-glass backdrop-blur-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Nice to Have
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {preferred.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-accent mt-2 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">{skill}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};