
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section className="w-full border-b">
           <div className="relative h-[500px] w-full">
              <Image
                src="https://law.riarauniversity.ac.ke/wp-content/uploads/2014/10/Riara-Law-School-Slide-2-scaled.jpeg"
                fill
                style={{objectFit: "cover"}}
                alt="Riara Law School Building"
                data-ai-hint="law school building"
                priority
              />
            </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Academics</h2>
                <p className="mt-3 text-lg text-muted-foreground">Providing solutions through education, training, research and community service</p>
                <Separator className="my-8 max-w-lg mx-auto" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="font-semibold text-lg hover:text-primary transition-colors">
                        <Link href="#">School of Health Sciences</Link>
                    </div>
                     <div className="font-semibold text-lg hover:text-primary transition-colors">
                        <Link href="#">School of Business</Link>
                    </div>
                     <div className="font-semibold text-lg hover:text-primary transition-colors">
                        <Link href="#">School of Agriculture,</Link>
                    </div>
                     <div className="font-semibold text-lg hover:text-primary transition-colors">
                        <Link href="#">School of Education & Social</Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
