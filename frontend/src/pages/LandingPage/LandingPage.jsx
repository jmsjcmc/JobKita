import Analytics from "./components/Analytics";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function LandingPage() {
  return (
    <div className="min-h-screen">
        <Header />
        <Hero />
        <Feature />
        <Analytics />
        <Footer />
    </div>
  )
}
