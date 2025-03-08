import DefaultLayout from "../../layout/DefaultLayout"
import about from './../../images/about.jpg'

const About = () => {
    return (
        <DefaultLayout>
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">About Jusoor</h1>
                </div>
                <img src={about} alt="" />
            </div>
            <div className="about-sec" style={{marginTop: 24}}>
                <div className="container">
                    <h2>Our Vision</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        Effectively changing the traditional patterns of insurance brokerage in the Egyptian market and identifying the latest international technologies that enable the Egyptian insurance brokerage market to be at the forefront of the Arab and international markets Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum quod error officia dolor aspernatur nobis quasi dolores vitae, consectetur similique! Eligendi voluptate cum quo esse facilis temporibus exercitationem unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis qui voluptatibus adipisci tempora, nihil repellendus amet perferendis quisquam veniam voluptas ut aut totam voluptatum officia illo dolor maiores beatae. 
                    </p>
                </div>
            </div>

            <div className="about-sec">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                    Strengthening the Egyptian insurance market by providing the highest levels of insurance services and solutions in its various sectors, using all energies, expertise and tools to impose a competitive and effective performance that serves both clients and insurance companies at the technical and financial levels. Promoting insurance awareness simulates the strongest global insurance markets that developing the technical expertise, which in turn supports the country’s Gross National Product Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni saepe quae! Similique beatae eos eum minus voluptate distinctio, debitis quae corrupti neque nostrum et illo a amet obcaecati assumenda.
                    </p>
                </div>
            </div>
            <div className="about-sec">
                <div className="container">
                    <h2>Our Objective</h2>
                    <p style={{
                        padding: '16px 0 24px', fontSize: '16px', lineHeight: '32px'
                    }}>
                        Improving the professional and service level of the insurance brokerage activities in the Arab Republic of Egypt, by targeting an elite group of leaders and expertise in the Egyptian insurance market of all its sectors, who have the ability to provide the insurance activities for companies and individuals at a professional level that simulates the business size and aspirations of the Egyptian market Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nesciunt facere inventore, iure accusamus veritatis reprehenderit numquam vel ipsum, explicabo molestiae similique velit eligendi voluptatum adipisci nulla incidunt commodi culpa!. 
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default About