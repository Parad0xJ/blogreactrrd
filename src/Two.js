import React from 'react'
import { Card } from './Card'
export const Two = (props) => {

    return (
        <div>
                     <div className='container'>
                     <div className="alert alert-warning mt-4 h4" role="alert">
  All Posts By User Two
</div>
            <div className="d-flex flex-wrap justify-content-around "> 
          {props.data.map(elt => <Card key={elt.id} head={` USER - ${elt.userId}`} title={elt.title} body={elt.body} footer={` ID Post - ${elt.id}`}  />)}
          </div>
        </div>
        </div>
    )
}