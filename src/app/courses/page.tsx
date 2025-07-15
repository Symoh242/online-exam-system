import { Header } from "@/components/Header";

export default function StudentPortal() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Student Portal
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Access your courses, grades, and  resources.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
