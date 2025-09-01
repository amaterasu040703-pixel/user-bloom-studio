import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Calendar, FileText } from "lucide-react";

export const JobApply = () => {
  return (
    <section className="py-20 bg-gradient-hero relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <Badge variant="outline" className="mb-6 bg-glass border-glass backdrop-blur-glass px-4 py-2 text-lg">
            🚀 Ready to Join Us?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Start Your Journey With Us
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take the next step in your career and help us build the future of web applications. 
            We're excited to hear from passionate developers who want to make an impact.
          </p>

          {/* Application Process */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-glass border-glass backdrop-blur-glass text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-white">1. Apply</h3>
                <p className="text-white/70 text-sm">Submit your application with portfolio and resume</p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass backdrop-blur-glass text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-white">2. Interview</h3>
                <p className="text-white/70 text-sm">Technical discussion and cultural fit assessment</p>
              </CardContent>
            </Card>
            
            <Card className="bg-glass border-glass backdrop-blur-glass text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-white">3. Start</h3>
                <p className="text-white/70 text-sm">Join our team and begin your journey with us</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              <Mail className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-white hover:bg-white/10">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
          
          <p className="text-white/60 mt-8 text-sm">
            Have questions? Reach out to us at{" "}
            <a href="mailto:careers@company.com" className="text-white underline hover:text-white/80">
              careers@company.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};