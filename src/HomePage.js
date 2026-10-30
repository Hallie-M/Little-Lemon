
import SpecialCard from "./SpecialCard";
import TestimonialCard from "./TestimonialCard";
import { Link } from "react-router-dom";





function HomePage() {
  return (
    <div className="home-page">
       <section id="hero">
             <div className="hero-content">
               {/* <h2>
                 Little Lemon
               </h2>
               <h3>Chicago</h3> */}
               <p>Little Lemon is a family-owned Mediterranean
                 restaurant serving traditional recipes
                 with a modern twist.</p>

<Link to="/booking">Reserve a Table</Link>

             </div>

             <div
               className="hero-image"
               role="img"
               aria-label="Placeholder for Little Lemon restaurant food photograph"
             >
               Image Placeholder
             </div>

           </section>

           <section id="menu">
             <h2>
               This Week's Specials
             </h2>
             <div className="specials-grid">
               <SpecialCard
                 name="Greek Salad"
                 price="$12.99"
                 description="Fresh vegetables, olives, feta cheese, and a Mediterranean dressing."
               />

               <SpecialCard
                 name="Bruschetta"
                 price="$5.99"
                 description="Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil."
               />

               <SpecialCard
                 name="Lemon Dessert"
                 price="$5.00"
                 description="A sweet and refreshing lemon dessert made from a traditional family recipe."
               />
             </div>
           </section>

           <section id="testimonials">
             <h2>Testimonials</h2>

             <div className="testimonials-grid" >
               <TestimonialCard
                 name="Monica"
                 rating="★★★★★"
                 review="The food was delicious and the service was excellent!"
               />
     
     
               <TestimonialCard
                 name="James"
                 rating="★★★★★"
                 review="The atmosphere was welcoming and the food was fantastic!"
               />
     
               <TestimonialCard
                 name="Sarah"
                 rating="★★★★★"
                 review="One of my favorite Mediterranean restaurants in Chicago!"
               />
     
               <TestimonialCard
                 name="David"
                 rating="★★★★★"
                 review="Great service, fresh ingredients, and delicious meals!"
               />
             </div>
     
           </section>
     
     
           <section id="about">
     
     
             <div className="about-content">
     
               <h2>Little Lemon</h2>
               <h3>Chicago</h3>
     
               <p>
                 Little Lemon is a family-owned Mediterranean
                 restaurant in Chicago, founded by two brothers,
                 Adrian and Mario.
               </p>
     
               <p>
                 The restaurant combines traditional family
                 recipes with modern flavors to create a
                 welcoming dining experience.
               </p>
             </div>
     
             <div className="about-images">
     
               <div
                 className="about-image-one"
                 role="img"
                 aria-label="Placeholder for a Little Lemon restaurant photo"
               >
                 Restaurant Image
               </div>
     
               <div
                 className="about-image-two"
                 role="img"
                 aria-label="Placeholder for a second Little Lemon restaurant photo"
               >
                 Restaurant Image 2
               </div>
             </div>
     
     
     
           </section>
    </div>
  );
}

export default HomePage;
