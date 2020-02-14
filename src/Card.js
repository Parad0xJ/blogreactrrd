import React from 'react'

export const Card = props => {

    return (
        <div className="card border-primary my-4 d-flex " style={{ maxWidth: '20rem' }}>
            <div className="card-header bg-transparent border-primary">{props.head}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
            </div>
            <div className="card-footer bg-transparent border-primary">{props.footer}</div>
        </div>
    )
}