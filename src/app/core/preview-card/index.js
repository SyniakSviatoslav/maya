import React from "react";
import './index.css';
import { collectionPath } from '../../constants/urls'
import { Link } from 'react-router-dom';

const ListCard = ({ collection }) => {
    return (
        <Link to={`${collectionPath}/${collection.id}`}>
            <div className="collection-card" >
                <div className="wrapper">

                    <img src={collection.image} className="image"></img>

                    <div className="title">
                        <div className="name">
                            <p>{collection.name}</p>
                        </div>
                        <div className="line">
                            <p>Culture</p>
                        </div>
                        <div className="description">
                            <div className="technique">
                                <p>{collection.technique}</p>
                            </div>
                            <div className="culture">
                                <p>{collection.culture}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Link>
    )
}

export default ListCard;
