import Banner from "../composents/Banner"
import bannerImg from "../assets/about-banner.png"
import Collapse from "../composents/Collapse"

import dataAbout from "../data/about.json"

function About() {
    const allAbout = dataAbout.map((about, index) => 
    <Collapse key={`${about.title}-${index}`} title={about.title} content={about.content} />)
    return (<div>
        <Banner picture={bannerImg}/> 
        {allAbout}
         </div> 
)
}

export default About