import Cta from '@/components/ui/CallToAction'
import CardsSection from '@/components/ui/Cards'
import Hero from '@/components/ui/Hero'
import TestimonialsSection from '@/components/ui/Testimonial'


export const metadata = {
    title: 'Nutribert',
}

const Home = () => {
    return (
        <>
            
                
                <Hero />
                <CardsSection />
                <Cta />
                 <TestimonialsSection />

            
        </>
    )
}

export default Home

