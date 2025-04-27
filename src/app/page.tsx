import Feature from "@/components/feature/Feature"
import Footer from "@/components/footer/Footer"
import Hero from "@/components/hero/Hero"
// import Home from "@/components/home/Home"
import Nav from "@/components/navigation/Nav"
import Partner from "@/components/patner/Partner"
import Review from "@/components/review/Review"

const page = () => {
  return (
<>
<Nav/>
<Hero/>
<Feature />
<Partner/>
<Review/>
{/* <Home/> */}
<Footer/>
</>
  )
}

export default page
