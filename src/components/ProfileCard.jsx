import { useState } from 'react';
import './ProfileCard.css';
import Header from './Header';
// Card De Perrito
function ProfileCard({titulo,descripcion,img}) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    };

    return (
        
        <div className='profile-card'>
            <img src={img} alt="dogo" style={{width: "200px", height: "200px", objectFit: "cover", borderRadius: "50px"}}/>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <button onClick={handleClick} className='like-button'>
                <h1>🐶</h1>
            </button>
            <p>Likes: {count}</p>
        </div>
    );
}



export default ProfileCard;