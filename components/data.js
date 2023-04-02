import strongliftBanner from "../images/banners/5x5stronglift.jpg";
import kampmanBanner from "../images/banners/kampman.jpg";
import kiiliBanner from "../images/banners/kiili.jpg";
import mvwoolBanner from "../images/banners/mvwool.jpg";
import antoniusBanner from "../images/banners/antonius.jpg";
import turismiveebBanner from "../images/banners/turismiveeb.jpg";
import fassaadipesuBanner from "../images/banners/fassaadipesu.jpg";
import estoverBanner from "../images/banners/estover.jpg";
import transportBanner from "../images/banners/transportation_calculator.jpg";
import lottemaaBanner from "../images/banners/lottemaa.jpg";
import spacexBanner from "../images/banners/spacex.jpg";
import productFormBanner from "../images/banners/product_form.jpg";

export const data = [
  {
    id: 0,
    name: "Stronglift 5x5",
    image: strongliftBanner,
    description:
      "A simple gym workout app. User can log exercises, change weight, do warmups, check history and switch workout type if needed. On of the first full-stack apps I created.",
    keywords: ["MERN", "Tailwind CSS", "UI/UX Design"],
    url: "https://stronglift5x5.herokuapp.com/",
    github: "https://github.com/stefanlinde95/Simple5x5WorkoutApp",
  },
  {
    id: 1,
    name: "Kiili kodukvartal",
    image: kiiliBanner,
    description:
      "In cooperation with Nord Creative, the Kiilikodukvartal website was created in the spring of 2021, created with Laravel and Wordpress CMS.",
    keywords: ["Laravel", "Wordpress", "Roots stack"],
    url: "https://kiilikodukvartal.ee/",
  },
  {
    id: 2,
    name: "Transportation calculator",
    image: transportBanner,
    description:
      "Full-stack React app. Form that calculates the cost of transportation based on the distance, quantity and item of the cargo. Orders are saved in PlanetScale DB.",
      keywords: [
      "ReactJS",
      "Node",
      "PlanetScale DB",
      "Formik",
      "MUI",
      "Yup validation",
    ],
    url: "https://transportation-calculator-client.vercel.app/",
    github: "https://github.com/stefanlinde95/Transportation_calculator",
  },
  {
    id: 3,
    name: "Fassaadipesu",
    image: fassaadipesuBanner,
    description: "Simple static website with contact form built with Gatsby.",
    keywords: ["GatsbyJS", "Bootstrap", "Form", "UI Design"],
    url: "https://fassaadipesu.eu/",
    github: "https://github.com/stefanlinde95/fassaadipesu",
  },
  {
    id: 4,
    name: "Turismiveeb",
    image: turismiveebBanner,
    description:
      "Gatsby website that uses Openweather API and a bit of data scraping for finding hotels and events. Content is managed with headless Wordpress.",
      keywords: ["GatsbyJS", "Headless Wordpress", "APIs"],
    url: "https://turismiveeb.ee/",
    github: "https://github.com/stefanlinde95/turismiveeb",
  },
  {
    id: 5,
    name: "SpaceX cargo planner",
    image: spacexBanner,
    description:
      "A simple app (NextJS) that calculates cargo capacity of SpaceX rockets. Based on Figma design.",
    keywords: ["NextJS"],
    url: "https://space-xc-argo-planner.vercel.app/",
    github: "https://github.com/stefanlinde95/SpaceXCargoPlanner",
  },
  {
    id: 6,
    name: "Product form",
    image: productFormBanner,
    description:
      "React app that allows inserting products and adding them cart.",
      keywords: ["ReactJS", "Bootstrap"],
    url: "https://productform.vercel.app/",
    github: "https://github.com/stefanlinde95/productform/tree/main",
  },
  {
    id: 7,
    name: "Lottemaa",
    image: lottemaaBanner,
    description:
      "Lottemaa webiste created in the winter of 2022, developed new features on the existing code (Roots stack).",
    keywords: ["Laravel", "Roots stack"],
    url: "https://lottemaa.ee/",
  },
  {
    id: 8,
    name: "Estover",
    image: estoverBanner,
    description:
      "New Estover website created in the winter of 2022, created with Laravel Blade (Roots stack) on Wordpress.",
    keywords: ["Laravel", "Wordpress", "Roots stack"],
    url: "https://uus.estover.ee/",
  },
  {
    id: 9,
    name: "Hotel Antonius",
    image: antoniusBanner,
    description:
    "Created years ago as one of my first project (originally static site). I have developed and designed entirely by myself.",
    keywords: ["Static website", "UI design", "Bootstrap"],
    url: "https://hotelantonius.ee/",
  },
  {
    id: 10,
    name: "M.V. Wool",
    image: mvwoolBanner,
    description:
      "I have also helped to create and set up ecommerce solutions. One example is M.V. Wools' e-store. After the project, it was said that the new solution is like night and day compared to the previous one.",
    keywords: ["Woocommerce", "Wordpress"],
    url: "https://mvwool.ee/",
  },
  {
    id: 11,
    name: "Kampman",
    image: kampmanBanner,
    description:
      "Wordpress website with SEO solution. The result - hundreds of customers every month, all of whom come through organic traffic.",
    keywords: ["Wordpress", "SEO", "Design"],
    url: "https://kampman.ee/",
  },
];
