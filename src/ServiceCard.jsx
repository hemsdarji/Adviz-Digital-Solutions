export const ServiceCard = ({ imageSrc, title, description }) => (
  <div className="col-xxl-4 col-lg-3 col-12">
    <div className="card-box rounded-2 p-5 text-center shadow">
      <img src={imageSrc} alt={title} className="img-fluid" width="200px" />
      <h4 className="my-3 fw-normal">{title}</h4>
      <p className="pe-3 mb-5">{description}</p>
    </div>
  </div>
);

export const serviceCards = [
  {
    imageSrc: "./img/social2.jpg",
    title: "Social Media Management",
    description:
      "Strategize, create, schedule, engage. Amplify brand through captivating content, community interaction, and data-driven optimization across social platforms.",
  },
  {
    imageSrc: "./img/emailimg1.jpg",
    title: "Email Marketing",
    description:
      "Email marketing crafts personalized messages, automates campaigns, and measures performance to cultivate customer connections, boost sales, and foster brand loyalty.",
  },
  {
    imageSrc: "./img/sco3.jpg",
    title: " Search Engine Optimization (SEO)",
    description:
      "Optimizing websites with keywords, quality content, and technical improvements to improve search engine rankings and drive organic traffic growth.",
  },
  {
    imageSrc: "./img/midea4.jpg",
    title: "Video and Multimedia Content",
    description:
      "Creating diverse video content, including animations and graphics, for engaging storytelling, educating, and entertaining audiences.",
  },
  {
    imageSrc: "./img/perform5.jpg",
    title: "Analytics and Performance Tracking",
    description:
      "Constantly measuring and analyzing digital data to gauge the success of marketing efforts, allowing for data-driven optimizations and informed decision-making to achieve better results over time.",
  },
  {
    imageSrc: "./img/creation6.jpg",
    title: "Content Creation",
    description:
      "Strategically crafting and curating valuable and relevant text, images, and multimedia to engage, educate, and resonate with the target audience.",
  },
];
