import { Header } from "@/components/Header";

export default function TutorialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                System Tutorials
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Watch videos on how to use the online examination system.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Video player placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
