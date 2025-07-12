
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ArrowRight, BookOpen, Building2, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Future at XYZ University
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A place where innovation, community, and academic excellence meet. Join us to build a brighter future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/admissions">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                   <Button asChild size="lg" variant="outline">
                    <Link href="/courses">
                      Explore Programs
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="university campus"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="mt-4">Explore Our Programs</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Discover a wide range of undergraduate and graduate programs designed to challenge and inspire.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button variant="outline" asChild>
                          <Link href="/courses">Learn More</Link>
                        </Button>
                    </CardFooter>
                 </Card>

                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                           <Building2 className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="mt-4">Vibrant Campus Life</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          Engage with a diverse community, join clubs, and experience the rich culture of our campus.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                         <Button variant="outline" asChild>
                           <Link href="/tutorials">Student Life</Link>
                         </Button>
                    </CardFooter>
                 </Card>
                 
                 <Card className="text-center flex flex-col h-full">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                           <Users className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="mt-4">Start Your Application</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                            Ready to join us? Our admissions team is here to guide you through every step of the process.
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                         <Button variant="outline" asChild>
                           <Link href="/admissions">Apply Today</Link>
                         </Button>
                    </CardFooter>
                 </Card>
            </div>
        </section>
      </main>
    </div>
  );
}
