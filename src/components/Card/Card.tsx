import { Link } from 'react-router-dom';
import './Card.css'


interface ICard {
    name: string
    code: string
    src: string
}


const Card = ({ name, code, src }: ICard) => {
    return (
        <Link to={src} className="card-link d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h4>{name}</h4>
                <p>{code}</p>
            </div>
        </Link>
    )
}

export default Card;