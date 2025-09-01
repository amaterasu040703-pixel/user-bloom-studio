import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Users, Zap, Globe } from "lucide-react";

export const JobDescription = () => {
  const responsibilities = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Build responsive user interfaces using Next.js 14, React, and TypeScript with modern best practices"
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Collaborate with backend teams to integrate APIs and ensure seamless data flow and user experiences"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Create beautiful interfaces for data analytics, payment flows, and interactive dashboards"
    },
    {
      icon: Users,
      title: "Authentication Systems",
      description: "Implement secure authentication flows using Clerk and manage user access controls"
    },
    {
      icon: Zap,
      title: "Payment Integration",
      description: "Build and enhance payment flows with Stripe integration for seamless transactions"
    },
    {
      icon: Globe,
      title: "Data Visualization",
      description: "Develop interactive dashboards using Chart.js and Recharts for complex data presentation"
    }
  ];

  const techStack = [
    "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", 
    "Stripe", "Clerk", "Chart.js", "Recharts", "AI Tools"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              What You'll Be Building
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our team to create innovative web applications that power modern businesses with cutting-edge technology
            </p>
          </div>

          {/* Responsibilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {responsibilities.map((item, index) => (
              <Card key={index} className="bg-glass border-glass backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack */}
          <Card className="bg-glass border-glass backdrop-blur-glass">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};