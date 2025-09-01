import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Clock, 
  TrendingUp, 
  Heart, 
  Laptop, 
  GraduationCap,
  DollarSign,
  Users
} from "lucide-react";

export const JobBenefits = () => {
  const benefits = [
    {
      icon: Home,
      title: "Remote First",
      description: "Work from anywhere in the world with flexible hours that fit your lifestyle",
      badge: "Worldwide"
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-rate compensation with performance-based bonuses and equity options",
      badge: "Equity"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship and leadership opportunities",
      badge: "Growth"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness stipend for your wellbeing",
      badge: "Full Coverage"
    },
    {
      icon: Laptop,
      title: "Tech Stipend",
      description: "Latest MacBook Pro and $2000 annual budget for equipment and software",
      badge: "$2000/year"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual education budget for courses, conferences, and certifications",
      badge: "$1500/year"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Unlimited PTO and 4-day work week options to maintain healthy balance",
      badge: "Unlimited PTO"
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Join a diverse, inclusive team of passionate developers and creators",
      badge: "Inclusive"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a culture that promotes growth
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-glass border-glass backdrop-blur-glass hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      {benefit.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};