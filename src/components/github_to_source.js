import React from "react";
import "./github_to_source.css"
export const GithubToSource = ({repoLink="",color="e3e3e3",size="20",target="",rel="",text="Source on Github",textStyles={}}) => {
    return (
        <div>
            <button className="github-source-button">
                <a
                    href={repoLink}
                    className="no-decor-a"
                    target={target}
                    rel={rel}
                >
                    <img src={`https://icongr.am/fontawesome/github.svg?size=${size}&color=${color}`} alt="github logo"></img>
                    <span style={textStyles}>{text}</span>
                </a>
            </button>
        </div>
    );
};


