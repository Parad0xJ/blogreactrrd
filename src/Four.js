import React from 'react'
import { Card } from './Card'

export const Four = (props) => {

    return (
        <div className='container'>
        <div className="alert alert-info mt-4 h4" role="alert">
All Posts By User Four
</div>
        <div className="d-flex flex-wrap justify-content-around "> 
      {props.data.map(elt => <Card key={elt.id} head={` USER - ${elt.userId}`} title={elt.title} body={elt.body} footer={` ID Post - ${elt.id}`}  />)}
      </div>
    </div>
    )
} 