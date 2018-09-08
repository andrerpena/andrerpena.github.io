import React, {Component} from 'react';

const SocialButton = ({icon, url}) => {
    return <a href={url} target="_blank" className="item">
            <i className={`fa fa-${icon}`} aria-hidden="true"/>
        </a>
}

class App extends Component {


    render() {
        return (
            <div className="container">
                <div className="header-wrapper">
                    <header>
                        <div className="profile-image"/>
                        <h1>Andr&#233; Pena</h1>
                        <hr/>
                        <div className="social-button-wrapper">
                            <div className="social-button-row">
                                <SocialButton title="Stackoverflow" icon="stack-overflow"
                                              url="http://stackoverflow.com/users/192729/andrerpena"/>
                                <SocialButton title="GitHub" icon="github" url="https://github.com/andrerpena"/>
                                <SocialButton title="Medium" icon="medium" url="https://medium.com/@andrerpena"/>
                            </div>
                            <div className="social-button-row">
                                <SocialButton title="Linkedin" icon="linkedin"
                                              url="https://www.linkedin.com/in/andr%C3%A9-pena-1827b088"/>
                                <SocialButton title="Facebook" icon="facebook"
                                              url="https://www.facebook.com/andrerpena"/>
                                <SocialButton title="Twitter" icon="twitter" url="https://twitter.com/andrerpena"/>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="body-wrapper">
                    <div className="body">
                        <p>
                            I have 12y of experience with <span className="badge">Web Development</span> and <span className="badge">Software Architecture</span>.
                            Technologies: JavaScript, TypeScript, Node, Webpack, C#, ASP.NET, HTML, CSS, Sass and others.
                        </p>
                        <p>
                            <a href="cv.pdf" target="_blank">Download my CV</a>. <a href="http://stackoverflow.com/users/story/192729" target="_blank">Know more about my career</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;