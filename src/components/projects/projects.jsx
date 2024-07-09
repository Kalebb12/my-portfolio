import trift from "/mini-store.jpg"
import goals from "/tech-goals.jpg"
const Project = () => {
  return (
    <div>
      <div className="p-4" id="projects">
        <h1>Projects ...</h1>
        <div className="projects_view row">
          <div className="item col-md-4">
            <div className="img_container">
              <img src={trift} className="w-100 h-100 img" alt="" />
            </div>
            <h3>Hng front end Store website</h3>
            <p className="des">
              This project was aimed at improving the responsiveness and colaboration of the Store website for various devices and screen sizes. I was responsible for creating a responsive design that would work well on both desktop and mobile devices. The website was built using React.
            </p>
            <a href="https://kalebb12.github.io/mini-store/" className="hosted_link" target="_blank">live-preview</a>
          </div>
          <div className="item col-md-4">
            <div className="img_container">
              <img src={goals} className="w-100 h-100 img" alt="" />
            </div>
            <h3>Hng front end tech goals website</h3>
            <p className="des">
              This project was aimed at creating a website that would be easy for people to find and read about my tech goals and ambitions. I used HTML, CSS, and JavaScript to create a responsive design that would work well on various devices and screen sizes.
            </p>
            <a href="https://kalebb12.github.io/My-Tech-Goals/" className="hosted_link" target="_blank">live-preview</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
