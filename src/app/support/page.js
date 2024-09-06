import FooterNavigation from "@/components/footer"
import SupportHero from "@/components/support/Hero"
import OnSite from "@/components/support/OnSite"

const page = () => {
  return (
    <div>
        <SupportHero/>
        <OnSite/>
        <FooterNavigation/>
    </div>
  )
}

export default page