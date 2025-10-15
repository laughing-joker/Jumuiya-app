"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Cross, Users, Heart, BookOpen } from "lucide-react";
import Image from "next/image";
import Join from "@/components/Join";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-beige-light to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/catholic-cross.jpg"
            alt="Catholic Cross Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <Cross className="w-16 h-16 mx-auto mb-6 text-primary animate-spiritual-glow" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4 text-foreground">
              Jumuiya ya Mt.Theresia wa Calcutta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-3">
              Mtakatifu Theresia wa Calcutta
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 italic">
              &quot;Uwe mwaminifu katika mambo madogo maana ndani yake ndipo
              nguvu zako zipo.&quot;
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Mama Teresa of Calcutta
            </p>

            <div className="flex gap-4 justify-center">
              <Join />
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/Auth")}
                className="text-lg px-8"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">
          Our Community
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Unity in Prayer</h3>
            <p className="text-muted-foreground">
              Join our Saturday prayer gatherings and strengthen your faith with
              fellow believers
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Apostolic Groups</h3>
            <p className="text-muted-foreground">
              Participate in Viwawa, Wawata, Uwata, and Wazee wa Kanisa groups
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Spiritual Growth</h3>
            <p className="text-muted-foreground">
              Access reflections, scripture, and guidance for your faith journey
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <Cross className="w-8 h-8 mx-auto mb-4 text-primary" />
          <p className="text-sm italic text-muted-foreground">
            &quot;Fanya mambo madogo kwa upendo mkuu&quot; — Mama Teresa
          </p>
        </div>
      </footer>
    </div>
  );
}
