import Reachout from "../links";
import programmer from "/programmer-iaITJH6X.svg"
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="row mt-5 px-4">
        <div className=" col-md-7">
          <h1>
            Hello 👋  I'm Caleb .<br />A fullstack devloper based in <br /> Lagos ,
            Nigeria.
          </h1>
          <Reachout/>

          <div className="servies mt-5">
            <h1>Services</h1>
            <div className="row gap-2">
              <div className=" col-md-4 service_item p-3">
                <h3>Art Direction</h3>
                <p className="des">We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.</p>
              </div>
              <div className="col-md-4 service_item p-3">
                <h3>Web Design</h3>
                <p className="des">We build and optimize your online presence. Website is the digital entry point into your business and a powerful revenue channel.</p>
              </div>
            </div>
            <div className="row mt-4 gap-2">
              <div className="col-md-4 service_item p-3">
                <h3>Responsive Design</h3>
                <p className="des">Ensure your website looks great on any device. With a focus on responsive design, I can create a seamless user experience across desktop, tablet, and mobile devices. From wireframing to prototyping, I'll work with you to create a design that adapts to any screen size.</p>
              </div>
              <div className="col-md-4 service_item p-3">
                <h3>Collaboration</h3>
                <p className="des">Collaborating with team members, utilizing pair programming techniques, to share knowledge, expertise, and ideas, and to develop high-quality software products, with improved code quality and reduced bugs.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <img src={programmer} alt="" className=" mt-5"  />
        </div>
      </div>
    </div>
  );
};

export default Banner;
