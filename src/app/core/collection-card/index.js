import React from "react";
import './index.css';
import { collectionPath } from '../../constants'
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`${collectionPath}/${collection.id}`}>
            <div className="detail-card" >
                <div className="wrapper-card">
                    <img src={collection.image} className="image-card"></img>
                    <div className="info">
                        <h1>{collection.name}</h1>
                        <h2>{collection.technique} {collection.culture} Artifact was created in {collection.createdAt} near ancient city 
                        of {collection.createdIn}</h2>
                        <p>{collection.description}</p>
                      
                    </div>
                </div>



            </div>
        </Link >
    )
}

export default CollectionCard;
