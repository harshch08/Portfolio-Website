import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090a0f] px-4">
      <div className="text-center max-w-md mx-auto p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
        <div className="text-5xl font-mono font-bold text-white mb-3">
          404
        </div>
        <h2 className="text-lg font-semibold text-zinc-200 mb-2">Page Not Found</h2>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="bg-white hover:bg-zinc-200 text-zinc-950 font-medium">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
