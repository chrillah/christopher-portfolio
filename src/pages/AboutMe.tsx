function AboutMe() {
    return (
        // hela sidan
        <div className="about-wrapper">
            {/* första man ser */}
            <div className="about-container-1">
                <div className="about-item-1" >
                    <h1 className="big-title">About me</h1>
                </div>

                <div className="about-item-2">
                    <div className="about-item-1-group">
                    <div className="profile-pic-container">
                        </div>
                        <p className="presentation-text">
                            By combining my knowledge of UX, graphic design, and
                            frontend development, I can create innovative and
                            user-friendly digital products that not only look
                            great but also function well for users.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-container-2">
                <div className="competence-item-container">
                    <h3 className="about-title">Competence</h3>
                    <ul className="competence-list">
                        <li>Adobe CC</li>
                        <li>Figma</li>
                        <li>Prototype production</li>
                        <li>Web development</li>
                        <li>Graphic design</li>
                        <li>Express</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Angular.js</li>
                        <li>UX</li>
                        <li>Social</li>
                        <li>Illustration</li>
                        <li>Music</li>
                    </ul>
                </div>

                <div className="education-item-container">
                    <h3 className="about-title">Education</h3>

                    <div className="education-container">
                        <div className="education-item">
                            <h5 className="education-title">
                                Frontend Development
                            </h5>
                            <p className="school-title">IT-Högskolan</p>
                            <h6 className="tools-and-knowledge-header">
                                TOOLS and KNOWLEDGE
                            </h6>
                            <ul className="knowledge-list">
                                <li>HTML & CSS</li>
                                <li>Vanilla JavaScript</li>
                                <li>UX & UI-design</li>
                                <li>JavaScript with frameworks</li>
                                <li>Agile development</li>
                                <li>Full-stack development</li>
                            </ul>
                        </div>
                        <div className="education-item">
                            <h5 className="education-title">UX</h5>
                            <p className="school-title">
                                Berghs School of Communication
                            </p>
                            <h6 className="tools-and-knowledge-header">
                                TOOLS and KNOWLEDGE
                            </h6>
                            <ul className="knowledge-list">
                                <li>Wireframes & Fast iterations</li>
                                <li>Interaction design</li>
                                <li>Clickable prototypes</li>
                                <li>User testing</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>
                        <div className="education-item">
                            <h5 className="education-title">
                                Graphic and Packaging design
                            </h5>
                            <p className="school-title">Nackademin</p>
                            <h6 className="tools-and-knowledge-header">
                                TOOLS and KNOWLEDGE
                            </h6>
                            <ul className="knowledge-list">
                                <li>Graphic design & typography</li>
                                <li>Packaging design & construction</li>
                                <li>CAD technique</li>
                                <li>Marketing & consumer behavior</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-container-3">
                <h3 className="about-title">Work experience</h3>
                <ul className="work-list">
                    <li className="work-item">
                        <h2 className="year-title">2023</h2>
                        <h4 className="work-place">Fill</h4>
                        <h5 className="work-title">Developer, UX&UI Design</h5>
                        <p className="work-text">
                            Angular.js, developed and wrote code, designed,
                            wrote epics and stories, and mentored other intern
                            students. I gained valuable insights into agile
                            methodologies, Git, and the tool Figma.
                        </p>
                    </li>
                    <li className="work-item">
                        <h2 className="year-title">2020 - 2022</h2>
                        <h4 className="work-place">
                            Hässelby Villastad Skola
                        </h4>
                        <h5 className="work-title">
                            Teacher of Swedish, English and Mathematics.
                        </h5>
                        <p className="work-text">
                            Planned lessons, graded assignments, created tasks,
                            taught programming.
                        </p>
                    </li>
                    <li className="work-item">
                        <h2 className="year-title">2017 - 2019</h2>
                        <h4 className="work-place">Vittraskolorna AB </h4>
                        <h5 className="work-title">
                            Substitute teacher in art & crafts.
                        </h5>
                        <p className="work-text">
                            Planned woodworking and handicraft lessons,
                            organized exhibitions, and crafts activities
                        </p>
                    </li>
                    <li className="work-item">
                        <h2 className="year-title">2016 – 2017</h2>
                        <h4 className="work-place">ND Foto AB</h4>
                        <h5 className="work-title">
                            Graphic design, photo assistant.
                        </h5>
                        <p className="work-text">
                            Created layout for magazines, designed
                            advertisements, created logos, and developed visual
                            branding
                        </p>
                    </li>
                    <li className="work-item">
                        <h2 className="year-title">2016</h2>
                        <h4 className="work-place">BASid</h4>
                        <h5 className="work-title">
                            AD assistant, film, photo & graphic production.
                        </h5>
                        <p className="work-text">
                            Assisted in graphic productions, edited
                            informational videos, managed important projects,
                            and reviewed and created presentations for key
                            meetings.
                        </p>
                    </li>
                    <li className="work-item">
                        <h2 className="year-title">2015</h2>
                        <h4 className="work-place">Stockholms Filmfestival</h4>
                        <h5 className="work-title">
                            Layout coordinator, graphic design.
                        </h5>
                        <p className="work-text">
                            Illustrated for the center spread of the festival
                            magazine, created materials for the festival and
                            designed the front cover of one of Hollywood's
                            largest trade magazines, Variety.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe
