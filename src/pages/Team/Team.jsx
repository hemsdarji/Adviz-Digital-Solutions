import React from "react";
import "./Team.css";

const socialMediaPlatforms = [
  { name: 'linkedin', url: 'https://www.linkedin.com/in/hadamatdabhi/', image: './img/linkedin.png' },
  { name: 'github', url: 'https://github.com/hemsdarji', image: './img/github.png' },
  { name: 'Instagram', url: '#', image: './img/insta.png' },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team-member">
        <div className="team-member-data">
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
        
          <div class=" mt-5 social-link">
        <h4>Follow Us:-</h4>
        <div className="row">
        {socialMediaPlatforms.map((platform, index) => (
          <div key={index} className="col-md-2">
            <a href={platform.url} className="btn  btn-block">
              <img src={platform.image} alt={platform.name} />
            </a>
          </div>
        ))}
      </div>
        
    </div>
    </div>  
        <div className="team-member-img">
          <img src="./img/HemsProfile.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
