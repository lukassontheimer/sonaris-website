import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OliverAndrees = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/#team">
          <Button variant="ghost" className="mb-8 hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zum Team
          </Button>
        </Link>

        <article className="bg-card border border-card-border rounded-lg p-8 sm:p-12">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-headline mb-4">
              Oliver Andrees
            </h1>
            <p className="text-xl text-primary font-semibold">
              Sales & Strategy
            </p>
          </div>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-xl leading-relaxed">
              Content placeholder for Oliver Andrees's detailed profile.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OliverAndrees;
