import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

export const JobHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Company Badge */}
          <Badge variant="outline" className="mb-6 bg-glass border-glass backdrop-blur-glass px-4 py-2 text-lg">
            💼 Remote Opportunity
          </Badge>
          
          {/* Job Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Full Stack Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our innovative team building cutting-edge web applications with Next.js, TypeScript, and modern tech stack
          </p>
          
          {/* Job Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-glass border border-glass rounded-lg px-4 py-2 backdrop-blur-glass">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground/90">Remote Worldwide</span>
            </div>
            <div className="flex items-center gap-2 bg-glass border border-glass rounded-lg px-4 py-2 backdrop-blur-glass">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground/90">Full-time / Contract</span>
            </div>
            <div className="flex items-center gap-2 bg-glass border border-glass rounded-lg px-4 py-2 backdrop-blur-glass">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-foreground/90">Competitive Salary</span>
            </div>
            <div className="flex items-center gap-2 bg-glass border border-glass rounded-lg px-4 py-2 backdrop-blur-glass">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground/90">Growing Team</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-glass border-glass backdrop-blur-glass hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};