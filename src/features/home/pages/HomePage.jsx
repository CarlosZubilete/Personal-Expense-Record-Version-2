import "../styles/HomePage.css";
import { HomeHero } from "../components/HomeHero";
import { HomeFeature } from "../components/HomeFeature";
import { HomeWorkFlow } from "../components/HomeWorkFlow";

export const HomePage = () => {
  return (
    <div className="home-root">
      <HomeHero />
      <HomeFeature />
      <HomeWorkFlow />
    </div>
  );
};
