import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8 animate-float">
          <h1 className="text-8xl font-orbitron font-bold text-primary mb-4 animate-pulse-glow">404</h1>
          <h2 className="text-2xl font-kalam text-foreground mb-2">صفحه پیدا نشد!</h2>
          <p className="text-muted-foreground font-kalam">
            متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            variant="gaming"
            size="lg"
            onClick={() => window.location.href = "/"}
            className="w-full"
          >
            <Home className="w-5 h-5 ml-2" />
            بازگشت به خانه
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            صفحه قبل
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
