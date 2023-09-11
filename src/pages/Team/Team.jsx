import React from "react";
import "./Team.css";

const socialMediaPlatforms = [
  { name: 'linkedin', url: 'www.linkedin.com/in/hadamatdabhi', image: './img/linkedin.png' },
  { name: 'github', url: 'https://github.com/hemsdarji', image: './img/github.png' },
  { name: 'Instagram', url: '#', image: './img/insta.png' },
];

const Team = () => {
  return (
    <section className="team">
      <div className="container text-center common-title fw-bold">
        <h2 className="common-heading">Team</h2>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="row team-member">
        <div className="col-md-6 team-member-data">
          <h2>Hadamat Dabhi</h2>
          <h6>Experienced Frontend developer</h6>
          <p>
            I build websites that work perfectly. From how they look to how they
            function, I take care of it all. Let's make your online presence
            awesome together!
          </p>
          <h4>Contact :-</h4>
          <h6>+91 7698542923</h6>
          <h6>hemsdarji8160304190@gmail.com</h6>

          <div className="mt-5 social-link">
            <h4>Follow Us:-</h4>
            <div className="row">
              {socialMediaPlatforms.map((platform, index) => (
                <div key={index} className="col-md-2">
                  <a href={platform.url} className="btn btn-block">
                    <img src={platform.image} alt={platform.name} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 team-member-img">
          <img src="./img/hems1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
