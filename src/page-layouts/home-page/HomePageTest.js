//src/page-layouts/HomePagesTest.js
"use client";

import classes from "../../../styles/HomePageTest.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';


function HomePageTest() {
  const router = useRouter();

  const navigateToAnotherPage = () => {
    router.push("/upload");
  };

  return (
    <section>
      <header>
        <h1>My Header</h1> {/* Apply CSS class */}
        <button onClick={navigateToAnotherPage}>
          Navigate to Another Page
        </button>
      </header>
      <section className={classes.main_container}>
        <section className={classes.main_content}>
          <h1 className={classes.section_title}>Home</h1>
          <section className={classes.main_grid}>
            <section className={classes.main_thumbnail}>
              <section className={classes.thumbnail_box}></section>
            </section>
            <section className={classes.main_canvas_heading}>
              <h2 className={classes.main_text}>
                <span>Nightly News Full Broadcast -</span>
                <br />
                <span>Aug. 13</span>
              </h2>
            </section>
          </section>
          <section className={classes.main_grid}>
            <section className={classes.main_thumbnail}>
              <section className={classes.thumbnail_box}></section>
            </section>
            <section className={classes.main_canvas_heading}>
              <h2 className={classes.main_text}>
                <span>Nightly News Full Broadcast -</span>
                <br />
                <span>Aug. 13</span>
              </h2>
            </section>
          </section>
          <h1 className={classes.section_title}>Recent</h1>
          <section className={classes.main_grid}>
            <section className={classes.main_thumbnail}>
              <section className={classes.thumbnail_box}></section>
            </section>
            <section className={classes.main_canvas_heading}>
              <h2 className={classes.main_text}>
                <span>Recent News Full Broadcast -</span>
                <br />
                <span>Aug. 14</span>
              </h2>
            </section>
          </section>
          <section className={classes.main_grid}>
            <section className={classes.main_thumbnail}>
              <section className={classes.thumbnail_box}></section>
            </section>
            <section className={classes.main_canvas_heading}>
              <h2 className={classes.main_text}>
                <span>Recent News Full Broadcast -</span>
                <br />
                <span>Aug. 14</span>
              </h2>
            </section>
          </section>
        </section>
      </section>
      <section className={classes.main_banner_container}>
        <section className={classes.main_banner}>
          <section className={classes.main_end}>
            <button className={classes.main_banner_options}>
              <Image
                src="../../theme/home_page/threedots.svg"
                className={classes.main_button_settings}
                width={40}
                height={40}
                alt="Settings"
              />
            </button>
            <button className={classes.main_sign_in_box}>
              <Image
                src="../../theme/home_page/user.svg"
                className={classes.main_yticon}
                width={40}
                height={40}
                alt="Sign In"
              />
              <span className={classes.nav_text}>
                <span>Sign up</span>
              </span>
            </button>
            <section className={classes.main_divlogo}>
              <Image
                alt="ARIS_Logo"
                src="/logo.png"
                className={classes.main_bannerlogo}
                width={40}
                height={40}
              />
            </section>
          </section>
        </section>
      </section>
      <section id="nav-bar" className={classes.main_nav_bar}>
        <section id="nav-box-upper" className={classes.main_nav_box_upper}>
          <section id="nav-grid-upper" className={classes.main_nav_grid_upper}>
            <section className={classes.nav_box}>
              <Image
                src="public/external/yticonyticonshapeiconshapesvg3117-oaiv.svg"
                className={classes.main_yticon}
                alt="Home"
                width={24}
                height={24}
              />
              <h3 className={classes.nav_text}>
                <span>Home</span>
              </h3>
            </section>
            <section className={classes.nav_box}>
              <Image
                src="public/external/yticonyticonshapeiconshapesvg3118-q1q.svg"
                className={classes.main_yticon}
                alt="Shorts"
                width={24}
                height={24}
              />
              <h3 className={classes.nav_text}>
                <span>Shorts</span>
              </h3>
            </section>
            <section className={classes.nav_box}>
              <Image
                src="public/external/yticonyticonshapeiconshapesvg3119-bkoo.svg"
                className={classes.main_yticon}
                alt="Subscriptions"
                width={24}
                height={24}
              />
              <h3 className={classes.nav_text}>
                <span>Subscriptions</span>
              </h3>
            </section>
            <section className={classes.nav_box}>
              <Image
                src="public/external/yticonyticonshapeiconshapesvg3119-bk0e.svg"
                className={classes.main_yticon}
                alt="Library"
                width={24}
                height={24}
              />
              <h3 className={classes.nav_text}>
                <span>Library</span>
              </h3>
            </section>
            <section className={classes.nav_box}>
              <Image
                src="public/external/yticonyticonshapeiconshapesvg3120-ks2a.svg"
                className={classes.main_yticon}
                alt="History"
                width={24}
                height={24}
              />
              <h3 className={classes.nav_text}>
                <span>History</span>
              </h3>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default HomePageTest;