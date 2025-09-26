import { useState } from "react";
import MainMenu from "@/components/MainMenu";
import WebViewPage from "@/components/WebViewPage";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [currentView, setCurrentView] = useState<'menu' | 'webview'>('menu');
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const handleNavigate = (url: string, title: string) => {
    setCurrentUrl(url);
    setCurrentTitle(title);
    setCurrentView('webview');
    
    toast({
      title: "در حال بارگذاری...",
      description: `باز کردن ${title}`,
      duration: 2000,
    });
  };

  const handleBack = () => {
    setCurrentView('menu');
  };

  const handleExit = () => {
    toast({
      title: "خروج از برنامه",
      description: "تا به زودی!",
      duration: 3000,
    });
    
    // در اپ واقعی، اینجا می‌توانید از Capacitor App API استفاده کنید
    // App.exitApp();
    setTimeout(() => {
      if (window.confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
        window.close();
      }
    }, 1000);
  };

  if (currentView === 'webview') {
    return (
      <WebViewPage
        url={currentUrl}
        title={currentTitle}
        onBack={handleBack}
      />
    );
  }

  return (
    <MainMenu
      onNavigate={handleNavigate}
      onExit={handleExit}
    />
  );
};

export default Index;
