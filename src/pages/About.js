import profile from '../assets/images/Profile.jpg'

export default function About() {
    return (
        <article>
            <img src={profile} />
            <h1>About Me</h1>
            <p>Coming from a background in Music and creative thinking, I redirected myself into web development and in the never ending learning that comes with it. I am now a full stack web developer using both the critical and innovative skills required for musical study and creation to code.</p>
            <p>Formerly I have been working in the customer service industry, interacting with people from all walks of life. This type of work afforded me the opportunity to backpack through a number of countries and take in various cultures, variety that I hope to use as inspiration. As a web developer I want to be able to work with all types of people and help them accomplish their varied goals; building out business sites, creating new emerging applications, and bringing dreams alive.</p>
            <br></br>
            <h1>Education</h1>
            <ul>
                <li>University of North Carolina at Charlotte
                    Certificate
                    Full Stack Web Development
                </li>
                <li>Appalachain State University
                    Bachelor of Science
                    Music Industry Studies
                </li>
            </ul>
            <br></br>
            <h1>Skills</h1>
            <p>HTML5, CSS3, Javascript, JQuery, Bootstrap, and Git.</p>
            <p>Experience with React.js, Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, APIs, Handlebars.js, and specifically working with the MERN stack.</p>
        </article>
    )
};