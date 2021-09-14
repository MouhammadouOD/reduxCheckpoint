import React from 'react'

function Task({id , description , isDone}) {
    return (
        <div className='container border m-3'>
            <p>{id}</p><hr/>
            <h6>Description:</h6><p>{description}</p><hr/>
            <h6>isDone :</h6><p>{isDone}</p>
        </div>
    )
}

export default Task
