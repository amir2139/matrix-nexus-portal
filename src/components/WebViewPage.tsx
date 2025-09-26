import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface WebViewPageProps {
  url: string;
  title: string;
  onBack: () => void;
}

const WebViewPage = ({ url, title, onBack }: WebViewPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border p-4 flex items-center gap-4">
        <Button
          variant="gaming"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          بازگشت
        </Button>
        <h1 className="text-xl font-orbitron text-foreground">{title}</h1>
      </div>

      {/* WebView iframe */}
      <div className="flex-1 p-2">
        <iframe
          src={url}
          className="w-full h-full rounded-lg border border-border shadow-gaming"
          title={title}
          style={{ minHeight: 'calc(100vh - 100px)' }}
        />
      </div>
    </div>
  );
};

export default WebViewPage;