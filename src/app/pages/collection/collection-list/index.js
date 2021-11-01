
import React, { Component } from "react";
import './index.css';
import { apiUrl, collectionPath } from '../../../constants'
import { Link } from 'react-router-dom';
import { imageUrl } from '../../../constants'
import CollectionCard from "../../../core/layout/card";

class CollectionListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            collections: []
        }
    }

    async componentDidMount() {
        const response = await fetch(`${apiUrl}/collections`);
        const collections = await response.json();

        this.setState({ collections: collections, isLoaded: true })
    }

    render() {
        console.log(`${imageUrl}`)
        const { error, collections, isLoaded } = this.state;

        if (error) return <p>{error}</p>;
        if (!isLoaded) return <p>Loading...</p>;
        console.log(this.state)

        return (
            <div className="collections">
                {collections.map((collection) => (
                   <CollectionCard key={collection.card} collection={collection}/>
                ))}

            </div>
        )
    }
}
export default CollectionListComponent;