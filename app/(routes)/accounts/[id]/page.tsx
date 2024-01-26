import React from 'react'


interface Props {
    params: {
        id: string
    }
}

function Page({ params }: Props) {
    return (
        <div>
            <h1>Account {params.id}</h1>
        </div>
    )
}

export default Page
