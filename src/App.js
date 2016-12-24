import React, { Component } from 'react';



const Picture = () => <div className="picture">
</div>

const MainHeader = () => <div className="main-header">
    <h1>
        André Rodrigues Pena
    </h1>
    <p>
        Software Developer, Software Architect, Teach Lead, 32 years old
    </p>
</div>

const ButtonBar = () => {
    return <div className="button-bar">
        <div className="button">
            <i className="fa fa-download" aria-hidden="true"></i>
            <span>Download CV</span>
        </div>
        <div className="button">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>Contact me</span>
        </div>
    </div>
}

const Block = ({title, children}) => <div className="block">
    <div className="header">
        <span>
            {title}
        </span>
    </div>
    <div>
        {children}
    </div>
</div>

const Item = ({title, iconClass}) => {
    let icon = icon ? <i className={`fa fa-${iconClass}`} aria-hidden="true"></i> : null;
    return <div className="item">
        <icon />
        <span>{title}</span>
    </div>
}

class App extends Component {


    render() {
        return (
            <div className="container">
                <Picture />
                <MainHeader />
                <ButtonBar />
                <Block title="Bio">
                    <p>
                        I'm self-motivated and passionate about software development and technology in general. I enjoy learning new frameworks, libraries and tools.
                        I like to participate in online communities like Stackoverflow and contribute to open-source on GitHub. I have 10+ years of experience
                        with software development.
                    </p>
                    <p>
                        My hobbies are video-games, playing the guitar, traveling and photography.
                    </p>
                </Block>
                <Block title="Current job">
                    <p>
                        <b>Software Architect</b> at <a href="http://thomsonreuters.com/en.html">Thomson Reuters</a>. Because this title has a different meaning at different places, basically
                        I help designing the architecture for a web practice managament system for laywers called <a href="https://www.thomsonreuters.com.br/pt/juridico/legal-one.html">Legal One</a>. I also
                        help integrating Thomson Reuters technologies across the globe, I review code, I create POCs for new technologies and I provide effort estimation for new requirements.
                        I never stopped coding.
                    </p>
                </Block>
                <Block title="Social Media">
                    <div className="social-media-wrapper">
                        <Item title="Stackoverflow" icon="stack-overflow" />
                        <Item title="Stackoverflow Jobs" icon="stack-overflow" />
                        <Item title="GitHub" icon="github" />
                        <Item title="Medium" icon="medium" />
                        <Item title="Linkedin" icon="linkedin" />
                        <Item title="Facebook" icon="facebook" />
                        <Item title="Twitter" icon="twitter" />
                        <Item title="Hackerrank" icon="header" />
                    </div>
                </Block>
                <Block title="Technologies I'm familiar with">
                    <div className="technologies-wrapper">
                        <Item title="C#" />
                        <Item title=".NET" />
                        <Item title="ASP.NET MVC" />
                        <Item title="ASP.NET WebForms" />
                        <Item title="JavaScript" />
                        <Item title="Node.js" />
                        <Item title="Python" />
                        <Item title="HTML 5" />
                        <Item title="CSS" />
                        <Item title="SASS" />
                        <Item title="Webpack" />
                        <Item title="Babel" />
                        <Item title="Git" />
                        <Item title="TFS" />
                    </div>
                </Block>
                <Block title="Contact">
                    <div className="contact-wrapper">
                        <Item title="+55 32 99916-8204" icon="whatsapp" />
                        <Item title="andrerpena@gmail.com" icon="skype" />
                        <Item title="andrerpena@gmail.com" icon="envelope" />
                    </div>
                </Block>
                <Block title="Location">
                    <iframe width="600" height="300" frameBorder="0" style={{ border: 0, marginTop: 5 }}
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJT5tvl1-bmAAR7llGN0HiHvo&key=AIzaSyA6Wlf-UvJONIzGsyp-g53SMdgcgyLjQG4"></iframe>
                </Block>


            </div>
        );
    }
}

export default App;