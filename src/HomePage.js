
import SpecialCard from "./SpecialCard";
import TestimonialCard from "./TestimonialCard";
import { Link } from "react-router-dom";
import greekSalad from "./Images/greek salad.jpg";
import lemonDessert from "./Images/lemon dessert.jpg";
import bruschetta from "./Images/bruchetta.svg";
import heroImage from "./Images/restaurantfood.jpg";
import chefPhotoTwo from "./Images/Mario and Adrian b.jpg";
import chefPhotoOne from "./Images/Mario and Adrian A.jpg";


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


        <img
          className="hero-image"
          src={heroImage}
          alt="Mediterranean appetizers served at Little Lemon"
        />


      </section>

      <section id="menu">
        <h2>
          This Week's Specials
        </h2>
        <div className="specials-grid">
          <SpecialCard
            name="Greek Salad"
            image={greekSalad}
            price="$12.99"
            description="Fresh vegetables, olives, feta cheese, and a Mediterranean dressing."
          />

          <SpecialCard
            name="Bruschetta"
            image={bruschetta}
            price="$5.99"
            description="Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil."
          />

          <SpecialCard
            name="Lemon Dessert"
            image={lemonDessert}
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

          <h2>Our Story</h2>
          

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


          <img
            className="about-image-one"
            src={chefPhotoOne}
            alt="Mario and Adrian working together in the Little Lemon kitchen"
          />



          <img
            className="about-image-two"
            src={chefPhotoTwo}
            alt="Mario and Adrian smiling together in the Little Lemon kitchen"
          />

        </div>



      </section>
    </div>
  );
}

export default HomePage;
