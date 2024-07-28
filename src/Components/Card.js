import React from 'react';

const Card= ({name, email, id, username}) => {
    
    return(
        <div className="tc bg-light-pink dib br2 pa2 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
        <div>
            <h1>{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
        </div>
        </div>
    );

}
export default Card;