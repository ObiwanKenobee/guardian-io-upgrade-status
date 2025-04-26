
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UpdateStatus = () => {
  return (
    <div className="min-h-screen bg-midnight bg-[radial-gradient(ellipse_at_top,rgba(74,222,128,0.1),transparent_50%)] flex flex-col items-center justify-between p-6">
      {/* Header */}
      <header className="w-full text-center pt-8 md:pt-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="h-8 w-8 text-neon animate-pulse" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">Guardian-IO</h1>
        </div>
        <p className="text-white/80">Securing Ethical Supply Chains</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center px-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We're Upgrading for Greater Impact
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            We are enhancing our systems to bring you even stronger transparency, smarter tracking, and sharper insights.
          </p>

          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-neon animate-spin" />
          </div>

          <div className="mb-8">
            <p className="text-neon font-medium mb-2">Estimated downtime: Under 1 Hour</p>
            <div className="w-full bg-white/10 rounded-full h-2 mb-4">
              <div className="bg-neon h-full w-1/3 rounded-full animate-pulse"></div>
            </div>
          </div>

          <p className="text-white/60 italic mb-8">
            The fight against modern slavery and wildlife crime never stops — and neither do we.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" disabled className="w-full sm:w-auto opacity-50">
              Dashboard Access
            </Button>
            <Button variant="default" className="w-full sm:w-auto bg-neon hover:bg-neon/90 text-midnight">
              Contact Support
            </Button>
          </div>

          <p className="text-xl font-semibold text-white mb-4">
            Raise Your Flag. Rebuild the System.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-white/60">
          <a href="https://status.guardian-io.com" className="hover:text-neon transition-colors">
            🔗 Follow live system updates
          </a>
          <a href="mailto:support@guardian-io.com" className="hover:text-neon transition-colors">
            ✉️ Need help? Email us
          </a>
        </div>
      </footer>
    </div>
  );
};
