import Analytics from "./components/Analytics";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function LandingPage() {
  return (
    <div className="min-h-screen mb-[100vh]">
        <Header />
        <Hero />
        <Feature />
        <Analytics />
    </div>
  )
}
