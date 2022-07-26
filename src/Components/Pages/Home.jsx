import React from "react";
import "../Style/home_style.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    <Navbar/>
    <section class="home bd-grid" id="home">
                <div class="home__information">
                    <span class="home__pressent anime-text">Hello, This is</span>
                    <h1 class="home__title anime-text typing">UW Plan</h1>
                    <p class="home__bio anime-text">PLANNER. SCHEDULER.</p>
                    <span class="anime-text">I can provide you your best schedule for classes at University of Waterloo<br/> according to your preference.</span>
                    <div>
                        <a href="/input" class="home__button anime-text">Get Started</a>
                    </div>
                </div>
            </section>
            <div class="bottom_home">
              <p class="bottom_home_text">Buy us a coffee or watch a video to contribute.</p>
            </div>
    </>
  );
};

export default Home;
