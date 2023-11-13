import React from 'react'

function ProjectItem() {
    return (
        <div className="project-item-wrapper">
            <div className="project-container">
                <button
                    className="back-button"
                    onClick={() => console.log('back')}
                >
                    <div className="caret rev"></div>
                    Back
                </button>
            </div>
        </div>
    )
}

export default ProjectItem
