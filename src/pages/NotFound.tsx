import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto glass-card p-8 rounded-2xl border border-border/50">
        <h1 className="text-6xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-xl font-semibold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-gradient-primary hover:shadow-glow transition-smooth">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home size={16} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
