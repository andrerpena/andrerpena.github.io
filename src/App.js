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

class App extends Component {


    render() {
        return (
            <div className="container">
                <Picture />
                <MainHeader />
                <ButtonBar />
                <div className="header">
                    Bio:
                </div>
                <p>
                    I'm self-motivated and passionate about software development and technology in general. I enjoy learning new frameworks, libraries and tools. I like to participate in online communities like Stackoverflow and contribute to open-source on GitHub.
                </p>
            </div>
        );
    }
}

export default App;