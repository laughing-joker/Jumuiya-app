import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-beige-light to-background">
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cross className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-playfair font-bold text-foreground">
                Jumuiya ya Wakatoliki
              </h1>
              <p className="text-xs text-muted-foreground">Mtakatifu Yosefu</p>
            </div>
          </div>
          <Button variant="outline">Sign Out</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-6 animate-fade-in">
            Welcome to Your Dashboard
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Prayer Intentions</h3>
              <p className="text-sm text-muted-foreground">
                Submit and view community prayer requests
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Announcements</h3>
              <p className="text-sm text-muted-foreground">
                Stay updated with community news
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Saturday Prayers</h3>
              <p className="text-sm text-muted-foreground">
                View upcoming prayer schedules
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
