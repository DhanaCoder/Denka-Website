import FooterNavigation from "@/components/footer";
import MainNavbar from "@/components/navigation/MainNavbar";
import ProductsHero from "@/components/products/Hero";

export default function RootLayout({ children }) {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <MainNavbar className="sticky left-0 top-0 z-[10000] bg-white py-0.5" />
      <ProductsHero />
      {children}
      <FooterNavigation />
    </div>
  );
} 
