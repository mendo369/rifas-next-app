import React from 'react'

function page({ params }) {
    const { id } = params
    return (
        <div>rifa #{id}</div>
    )
}

export default page