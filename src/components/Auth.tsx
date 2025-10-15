"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioCard } from "@/components/radio-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cross } from "lucide-react";

type UserType = "member" | "leader" | null;
type LeadershipType = "jumuiya" | "apostolic" | null;
type ApostolicGroup = "viwawa" | "wawata" | "uwata" | "wazee" | null;
type LeadershipPosition =
  | "mwenyekiti"
  | "mwenyekiti_msaidizi"
  | "katibu"
  | "katibu_msaidizi"
  | "mweka_hazina"
  | null;

const Auth = () => {
  const router = useRouter();
  const [step, setStep] = useState<"type" | "details">("type");
  const [userType, setUserType] = useState<UserType>(null);
  const [leadershipType, setLeadershipType] = useState<LeadershipType>(null);
  const [apostolicGroup, setApostolicGroup] = useState<ApostolicGroup>(null);
  const [position, setPosition] = useState<LeadershipPosition>(null);

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === "member") {
      setStep("details");
    }
  };

  const handleLeadershipTypeSelect = (type: LeadershipType) => {
    setLeadershipType(type);
  };

  const canProceedToDetails = () => {
    if (userType === "member") return true;
    if (userType === "leader") {
      if (leadershipType === "jumuiya") {
        return position !== null;
      }
      if (leadershipType === "apostolic") {
        return apostolicGroup !== null && position !== null;
      }
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    console.log({
      isLogin,
      email,
      password,
      name,
      userType,
      leadershipType,
      apostolicGroup,
      position,
    });

    // Navigate after authentication
    router.push("/dashboard"); // Change "/dashboard" to your desired page
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-beige-light to-background">
      {/* Background cross watermark */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/catholic-cross.jpg')" }}
      />

      <div className="w-full max-w-2xl mx-4 relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border overflow-hidden spiritual-glow">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-gold-light to-primary p-8 text-center">
            <Cross className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
            <h1 className="text-3xl font-playfair font-bold text-primary-foreground mb-2">
              Jumuiya ya Wakatoliki
            </h1>
            <p className="text-primary-foreground/90 font-medium">
              Mtakatifu Yosefu
            </p>
          </div>

          <div className="p-8 animate-fade-in">
            {step === "type" ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <p className="text-sm italic text-muted-foreground mb-4">
                    &quot;Prayer enlarges the heart until it is capable of
                    containing God&apos;s gift of Himself.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground">
                    — Mother Teresa of Calcutta
                  </p>
                </div>

                <div>
                  <Label className="text-base mb-4 block font-semibold">
                    Are you a Member or a Leader within the Community?
                  </Label>
                  <div className="grid gap-4">
                    <RadioCard
                      selected={userType === "member"}
                      value="member"
                      onSelect={() => handleUserTypeSelect("member")}
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">Member</h3>
                        <p className="text-sm text-muted-foreground">
                          Join our community for prayer and fellowship
                        </p>
                      </div>
                    </RadioCard>

                    <RadioCard
                      selected={userType === "leader"}
                      value="leader"
                      onSelect={() => handleUserTypeSelect("leader")}
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">Leader</h3>
                        <p className="text-sm text-muted-foreground">
                          Lead and serve the community
                        </p>
                      </div>
                    </RadioCard>
                  </div>
                </div>

                {userType === "leader" && (
                  <div className="space-y-4 animate-fade-in">
                    <Label className="text-base font-semibold">
                      Leadership Type
                    </Label>
                    <div className="grid gap-4">
                      <RadioCard
                        selected={leadershipType === "jumuiya"}
                        value="jumuiya"
                        onSelect={() => handleLeadershipTypeSelect("jumuiya")}
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold">Jumuiya Leadership</h3>
                        </div>
                      </RadioCard>

                      <RadioCard
                        selected={leadershipType === "apostolic"}
                        value="apostolic"
                        onSelect={() => handleLeadershipTypeSelect("apostolic")}
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold">Apostolic Groups</h3>
                        </div>
                      </RadioCard>
                    </div>

                    {leadershipType === "apostolic" && (
                      <div className="space-y-2 animate-fade-in">
                        <Label>Select Your Group</Label>
                        <Select
                          value={apostolicGroup || ""}
                          onValueChange={(value) =>
                            setApostolicGroup(value as ApostolicGroup)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose apostolic group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="viwawa">Viwawa</SelectItem>
                            <SelectItem value="wawata">Wawata</SelectItem>
                            <SelectItem value="uwata">Uwata</SelectItem>
                            <SelectItem value="wazee">
                              Wazee wa Kanisa
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {leadershipType && (
                      <div className="space-y-2 animate-fade-in">
                        <Label>Leadership Position</Label>
                        <Select
                          value={position || ""}
                          onValueChange={(value) =>
                            setPosition(value as LeadershipPosition)
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose your position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mwenyekiti">
                              Mwenyekiti
                            </SelectItem>
                            <SelectItem value="mwenyekiti_msaidizi">
                              Mwenyekiti Msaidizi
                            </SelectItem>
                            <SelectItem value="katibu">Katibu</SelectItem>
                            <SelectItem value="katibu_msaidizi">
                              Katibu Msaidizi
                            </SelectItem>
                            <SelectItem value="mweka_hazina">
                              Mweka Hazina
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <Button
                      onClick={() => setStep("details")}
                      disabled={!canProceedToDetails()}
                      className="w-full btn-gold"
                    >
                      Continue
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-playfair font-semibold mb-2">
                    {isLogin ? "Welcome Back" : "Create Account"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {userType === "leader" ? "Leader Access" : "Member Access"}
                  </p>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <Button type="submit" className="w-full btn-gold">
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>

                <div className="text-center space-y-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-sm"
                  >
                    {isLogin
                      ? "Don't have an account? Sign up"
                      : "Already have an account? Sign in"}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep("type")}
                    className="text-sm block mx-auto"
                  >
                    ← Back to selection
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Quote */}
          <div className="bg-secondary/50 p-4 text-center border-t border-border">
            <p className="text-xs italic text-muted-foreground">
              &quot;Do small things with great love&quot; — Mother Teresa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
