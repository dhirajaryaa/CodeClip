"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Code,
  Share2,
  Lock,
  Edit3,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/custom";

export function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Arjun Patel",
      avatar: "/placeholder-avatar.jpg",
      content:
        "CodeClip has revolutionized the way I manage my code snippets. It's an indispensable tool in my daily workflow.",
    },
    {
      name: "Priya Sharma",
      avatar: "/placeholder-avatar.jpg",
      content:
        "As a team lead, CodeClip has made it incredibly easy to share and collaborate on code snippets with my team. Highly recommended!",
    },
    {
      name: "Rahul Gupta",
      avatar: "/placeholder-avatar.jpg",
      content:
        "The code highlighting and editor features in CodeClip are top-notch. It's become an essential part of my development toolkit.",
    },
  ];

  

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground w-full">
      
      {/* header add  */}
      <Header />
      
      <main className="flex-1">
        <section
          className={`  w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero.jpeg')] bg-center bg-cover backdrop-blur-lg`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Code, Clipped and Accessible
                </h1>
                <p className="mx-auto max-w-[700px] sm bg-yellow-500/80 text-white rounded-lg">
                  Store, manage, and share your code snippets with ease.
                  CodeClip is the ultimate tool for developers who value
                  efficiency and collaboration.
                </p>
              </div>
              <div className="space-x-4">
                <Link to={"/dashboard"}>

                <Button  className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
                </Link>


                <Button variant="destructive">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Features that Empower You
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Easy Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Quickly save and organize your code snippets with our
                    intuitive interface.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Lock className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Secure Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Keep your snippets safe with our robust security measures
                    and access controls.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Share2 className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Public Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Share your snippets with the world or keep them private -
                    you're in control.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Code className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Code Highlighting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Syntax highlighting for over 100 programming languages for
                    easy readability.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Edit3 className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Code Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Built-in code editor with auto-completion and error checking
                    for a smooth coding experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Dark Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Easy on the eyes with our default dark mode theme, perfect
                    for late-night coding sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Is CodeClip free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, CodeClip offers a free tier with basic features. We also
                  have premium plans for advanced users and teams.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Can I access my snippets offline?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, CodeClip offers offline access to your saved snippets
                  through our desktop and mobile apps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How secure is my code on CodeClip?
                </AccordionTrigger>
                <AccordionContent>
                  We use industry-standard encryption and security practices to
                  ensure your code snippets are safe and private.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I collaborate with my team on CodeClip?
                </AccordionTrigger>
                <AccordionContent>
                  Our team features allow you to share and collaborate on
                  snippets with your colleagues seamlessly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Users Say
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className={"flex items-center gap-4 text-md"}>
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {testimonials[currentTestimonial].name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"{testimonials[currentTestimonial].content}"</p>
                </CardContent>
              </Card>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Coding Workflow?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of developers who trust CodeClip for their code
                  snippet management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link to={"/signup"} >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up for Free
                </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start organizing your code today!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 CodeClip. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
