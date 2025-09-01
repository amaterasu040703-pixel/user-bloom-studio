import { JobHero } from "@/components/JobHero";
import { JobDescription } from "@/components/JobDescription";
import { JobRequirements } from "@/components/JobRequirements";
import { JobBenefits } from "@/components/JobBenefits";
import { JobApply } from "@/components/JobApply";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <JobHero />
      <JobDescription />
      <JobRequirements />
      <JobBenefits />
      <JobApply />
    </div>
  );
};

export default Index;
