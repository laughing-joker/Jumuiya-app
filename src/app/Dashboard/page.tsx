"use client";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-beige-light to-background">
      <Header />
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
