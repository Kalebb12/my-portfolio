import scrutz from "/scrutz.png"
import edge from "/edge.png"
import food from "/food.png"
const Project = () => {
  return (
    <div>
      <div className="p-4" id="projects">
        <h1>Projects ...</h1>
        <div className="projects_view row">
          <div className="item col-md-4">
            <div className="img_container">
              <img src={scrutz} className="w-100 h-100" alt="" />
            </div>
            <h3>Scrutz front end challenge</h3>
            <p className="des">
              This project was aimed at improving my skills in HTML, CSS,
              JavaScript and React. I wanted to create a simple and
              user-friendly interface for displaying a list of campaigns.
            </p>
            <a href="https://frontend-test-nt4k.vercel.app/" className="hosted_link" target="_blank">live-preview</a>
          </div>
          <div className="item col-md-4">
            <div className="img_container">
              <img src={edge} className="w-100 h-100" alt="" />
            </div>
            <h3>Edge M5 landing page</h3>
            <p className="des">
            This project was aimed at improving my skills in CSS
               and React. I wanted to create a simple and
              rensponsive landing pagefor the edge m5 website.
            </p>
            <a href="https://kalebb12.github.io/edge-m5/" className="hosted_link" target="_blank">live-preview</a>
          </div>
          <div className="item col-md-4">
            <div className="img_container">
              <img src={food} className="w-100 h-100" alt="" />
            </div>
            <h3>Search food receipes</h3>
            <p className="des">
              This project was aimed at improving my skills in HTML, CSS,
              JavaScript and React. I wanted to create a simple and
              user-friendly interface for searching food recipes by dish name.
            </p>
            <a href="https://kalebb12.github.io/food-receipe/" className="hosted_link" target="_blank">live-preview</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
