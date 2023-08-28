export const ServiceCard = ({ imageSrc, title, description }) => (
    <div className="col-xxl-4 col-lg-3 col-12">
      <div className="card-box rounded-2 p-5 text-center shadow">
        <img src={imageSrc} alt={title} className="img-fluid" width="200px" />
        <h5 className="my-3 fw-normal">{title}</h5>
        <p className="pe-3 mb-5">{description}</p>
      </div>
    </div>
  );

export const serviceCards = [
    {
      imageSrc: "./img/social2.jpg",
      title: "Social Media Management",
      description: "Curate and schedule posts...",
    },
    {
      imageSrc: "./img/emailimg1.jpg",
      title: "Email Marketing",
      description: "Design and send engaging email campaigns...",
    },
    {
      imageSrc:"./img/sco3.jpg",
      title: " Search Engine Optimization (SEO)",
      description: "Design and send engaging email campaigns...",
    },
    {
      imageSrc: "./img/midea4.jpg",
      title: "Video and Multimedia Content",
      description: "Design and send engaging email campaigns...",
    },
    {
      imageSrc: "./img/perform5.jpg",
      title: "Analytics and Performance Tracking",
      description: "Design and send engaging email campaigns...",
    },
    {
      imageSrc: "./img/creation6.jpg",
      title: "Content Creation",
      description: "Design and send engaging email campaigns...",
    },
  ];