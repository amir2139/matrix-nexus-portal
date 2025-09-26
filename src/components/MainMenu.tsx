import { Button } from "@/components/ui/button";
import { Globe, Users, Upload, LogOut } from "lucide-react";
import logoImage from "@/assets/logo.png";
import heroImage from "@/assets/hero-bg.png";

interface MainMenuProps {
  onNavigate: (url: string, title: string) => void;
  onExit: () => void;
}

const MainMenu = ({ onNavigate, onExit }: MainMenuProps) => {
  const menuItems = [
    {
      title: "سایت اصلی",
      url: "https://matrixxmta.ir",
      icon: Globe,
      description: "وب‌سایت رسمی MatrixxMTA"
    },
    {
      title: "انجمن",
      url: "https://forum.matrixxmta.ir", 
      icon: Users,
      description: "انجمن و بحث‌های کاربران"
    },
    {
      title: "آپلود سنتر",
      url: "https://matrixxmta.ir/upload",
      icon: Upload,
      description: "مرکز آپلود فایل‌ها"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-bg flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-bg opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header with Logo */}
        <div className="text-center py-8 px-4">
          <div className="animate-float mb-6">
            <img 
              src={logoImage}
              alt="MatrixxMTA Logo"
              className="h-16 mx-auto filter drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-orbitron font-bold text-foreground mb-2 animate-pulse-glow">
            MatrixxMTA
          </h1>
          <p className="text-muted-foreground font-kalam text-lg">
            تجربه بازی نهایی در دنیای MTA
          </p>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-6 py-8">
          <div className="max-w-md mx-auto space-y-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="glow-effect"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Button
                    variant="menu"
                    size="menu"
                    onClick={() => onNavigate(item.url, item.title)}
                    className="group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center gap-4 w-full">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      <div className="text-center">
                        <div className="font-bold text-lg">{item.title}</div>
                        <div className="text-sm opacity-80">{item.description}</div>
                      </div>
                    </div>
                  </Button>
                </div>
              );
            })}

            {/* Exit Button */}
            <div className="pt-8">
              <Button
                variant="exit"
                size="menu"
                onClick={onExit}
                className="w-full"
              >
                <LogOut className="w-5 h-5 ml-2" />
                خروج از برنامه
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 px-4">
          <p className="text-muted-foreground text-sm font-kalam">
            ساخته شده با ❤️ برای کاربران MatrixxMTA
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;