
import React, { Component } from "react";
import './index.css';
import { apiUrl } from '../../../constants/app'
import ListCard from "../../../core/preview-card";
import LoaderComponent from "../../../assets/loader";

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
       
        const { error, collections, isLoaded } = this.state;

        if (error) return <p>{error}</p>;
        if (!isLoaded) return <LoaderComponent/>;
        
        return (
            <div className="collections">
                {collections.map((collection) => (
                   <ListCard key={collection.card} collection={collection}/>
                ))}

            </div>
        )
    }
}
export default CollectionListComponent;