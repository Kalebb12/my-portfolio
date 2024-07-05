import Banner from '../components/banner/banner.'
import Footer from '../components/footer';
import Reachout from '../components/links';
import Project from '../components/projects/projects'
const Home = () => {
    return (
        <div>
            <Banner/>
            <Project/>

            <div className="contact mt-2 mx-4">
                <h4>contact:</h4>
                <h1 className=' lh-1'>LET'S WORK <br /> TOGETHER</h1>
                <button className='btn btn-dark'>Schedule a call</button>
                <Reachout/>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;