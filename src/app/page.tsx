
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section className="w-full border-b">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[500px] w-full">
                  <Image
                    src="https://placehold.co/1920x500.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Hero Image 1"
                    data-ai-hint="university campus building"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[500px] w-full">
                  <Image
                    src="https://placehold.co/1920x500.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Hero Image 2"
                    data-ai-hint="students studying library"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                 <div className="relative h-[500px] w-full">
                  <Image
                    src="https://placehold.co/1920x500.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Hero Image 3"
                    data-ai-hint="graduation ceremony students"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
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
