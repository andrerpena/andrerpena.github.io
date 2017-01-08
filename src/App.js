import React, { Component } from 'react';



const Picture = () => <div className="picture">
</div>

const MainHeader = () => <div className="main-header">
    <h1>
        Andr&#233; Rodrigues Pena
    </h1>
    <p>
        Software developer, architect, teach lead, open-source contributor
    </p>
    <div className="extra-info">
        <Item icon="map-marker" title="Juiz de Fora, Brazil" url="https://www.google.com.br/maps/place/Juiz+de+Fora,+MG/@-21.7288846,-43.4525614,12z/data=!3m1!4b1!4m5!3m4!1s0x989c43e1f85da1:0x6236b026b3a0a468!8m2!3d-21.7624237!4d-43.3433999" />
        <Item icon="birthday-cake" title="August 12th, 1984 (32 years old)" url="https://en.wikipedia.org/wiki/August_12" />
    </div>
</div>

const ButtonBar = () => {
    return <div className="button-bar">
        <div className="button">
            <i className="fa fa-download" aria-hidden="true"></i>
            <a href="cv.pdf">Download CV</a>
        </div>
        <div className="button">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href="mailto:andrerpena@gmail.com">Contact me</a>
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

const Item = ({title, icon, url}) => {
    let iconElement = icon ? <i className={`fa fa-${icon}`} aria-hidden="true"></i> : null;
    let urlElement = url ? <a href={url} className={iconElement ? "" : "no-margin"} target="_blank">{title}</a> : <span className={iconElement ? "" : "no-margin"}>{title}</span>;
    return <div className="item">
        {iconElement}
        {urlElement}
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
                        .I have experience with a lot of modern web technologies and I'm used to
                        work in a remote / international team. I'm also well acquainted to large-scale web application architectures.
                    </p>
                    <p>
                        I have 10yr+ experience with web development, specially ASP.NET, HTML, CSS, JavaScript and jQuery. I have 2yr+ experience with modern
                        web technologies like Node, React, Redux and all that comes with it (Webpack, Babel...).
                    </p>
                    <p>
                        I like to participate in online communities like <a href="http://stackoverflow.com/users/192729/andrerpena">Stackoverflow</a> and contribute to open-source on <a href="https://github.com/andrerpena">GitHub</a>. Lately I've been also spending some time
                        on <a href="https://www.hackerrank.com/andrerpena">Hackerrank</a> and <a href="http://codepen.io/andrerpena/">Codepen</a>. I'm also
                        trying to find time to express my thoughts on <a href="https://medium.com/@andrerpena">Medium</a>.
                    </p>
                    <p>
                        My hobbies are video-games, playing the guitar, traveling and photography.
                    </p>
                    <p>
                        More details about my professional career <a href="http://stackoverflow.com/users/story/192729">here</a>.
                    </p>
                </Block>
                <Block title="Current job">
                    <p>
                        <b>Software Architect</b> at <a href="http://thomsonreuters.com/en.html">Thomson Reuters</a>. Because this title has a different meaning at different places, basically
                        I help designing the architecture for a web practice managament system for laywers called <a href="https://www.thomsonreuters.com.br/pt/juridico/legal-one.html">Legal One</a>. I also
                        help integrating Thomson Reuters technologies across the globe, I review code, I create POCs for new technologies and I provide effort estimation for new requirements.
                        Last but not least, I code a lot.
                    </p>
                </Block>
                <Block title="Social Media">
                    <div className="social-media-wrapper">
                        <Item title="Stackoverflow" icon="stack-overflow" url="http://stackoverflow.com/users/192729/andrerpena" />
                        <Item title="Stackoverflow Jobs" icon="stack-overflow" url="http://stackoverflow.com/users/story/192729" />
                        <Item title="GitHub" icon="github" url="https://github.com/andrerpena" />
                        <Item title="Medium" icon="medium" url="https://medium.com/@andrerpena" />
                        <Item title="Linkedin" icon="linkedin" url="https://www.linkedin.com/in/andr%C3%A9-pena-1827b088" />
                        <Item title="Facebook" icon="facebook" url="https://www.facebook.com/andrerpena" />
                        <Item title="Twitter" icon="twitter" url="https://twitter.com/andrerpena" />
                        <Item title="Hackerrank" icon="header" url="https://www.hackerrank.com/andrerpena" />
                        <Item title="Codepen" icon="codepen" url="http://codepen.io/andrerpena/" />
                        <Item title="NPM" icon="code" url="https://www.npmjs.com/~andrerpena" />
                    </div>
                </Block>
                <Block title="Technologies I'm familiar with">
                    <div className="technologies-wrapper">
                        <Item title="C#" />
                        <Item title=".NET" />
                        <Item title="ASP.NET MVC" />
                        <Item title="ASP.NET WebForms" />
                        <Item title="JavaScript" />
                        <Item title="React" />
                        <Item title="Redux" />
                        <Item title="Vue" />
                        <Item title="Node.js" />
                        <Item title="Python" />
                        <Item title="HTML 5" />
                        <Item title="CSS" />
                        <Item title="SASS" />
                        <Item title="Webpack" />
                        <Item title="Babel" />
                        <Item title="Gulp" />
                        <Item title="Git" />
                        <Item title="TFS" />
                        <Item title="Chrome Extensions" />
                    </div>
                </Block>
                <Block title="Contact">
                    <div className="contact-wrapper">
                        <Item title="+55 32 99916-8204" icon="whatsapp" />
                        <Item title="andrerpena@gmail.com" icon="skype" />
                        <Item title="andrerpena@gmail.com" icon="envelope" />
                    </div>
                </Block>
                <Block title="Certifications">
                    <div className="certifications-wrapper">
                        <Item title="Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3 " icon="trophy" />
                        <Item title="Microsoft Specialist: Programming in C#  " icon="trophy" />
                        <Item title="Microsoft Certified Professional " icon="trophy" />
                        <Item title="Microsoft® Certified Technology Specialist: .NET Framework 4, Web Applications" icon="trophy" />
                    </div>
                </Block>
                <Block title="Open Source projects I'm currently working on">
                    <div className="open-source-wrapper">
                        <Item title="react-mde (React component)" icon="github" url="https://github.com/andrerpena/react-mde" />
                        <Item title="L1PM (Chrome extension)" icon="github" url="https://github.com/andrerpena/legalone-pacote-melhorias" />
                        <Item title="Matterspace (web app)" icon="github" url="https://github.com/matterspace/matterspace" />
                    </div>
                </Block>
                <Block title="Open Source projects I've built but don't maintain anymore">
                    <div className="open-source-past-wrapper">
                        <Item title="react-metaform (React component)" icon="github" url="https://github.com/gearz-lab/react-metaform" />
                        <Item title="react-vnav (React component)" icon="github" url="https://github.com/gearz-lab/react-vnav" />
                        <Item title="redux-autoform (React component)" icon="github" url="https://github.com/redux-autoform/redux-autoform" />
                        <Item title="chatjs (jQuery plugin)" icon="github" url="https://github.com/andrerpena/chatjs" />
                        <Item title="quotr (Node app)" icon="github" url="https://github.com/andrerpena/quotr" />
                        <Item title="formato (JavaScript library)" icon="github" url="https://github.com/gearz-lab/formato" />
                        <Item title="Cerebello (ASP.NET app)" icon="github" url="https://github.com/andrerpena/Cerebello" />
                    </div>
                </Block>
            </div>
        );
    }
}

export default App;