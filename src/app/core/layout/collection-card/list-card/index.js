import React from "react";
import './index.css';
import { collectionPath } from '../../../constants'
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`${collectionPath}/${collection.id}`}>
            <div className="collection-card" >
                <div className="wrapper">

                    <img src={collection.image} className="image"></img>
                </div>

            </div>
        </Link>
    )
}

export default CollectionCard;
