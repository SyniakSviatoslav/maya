import React, { Component } from "react";
import './index.css';
import { apiUrl } from '../../../constants'

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
        if (!isLoaded) return <p>Loading...</p>;
        console.log(this.state)

        return (
            <div className="collections">
                {collections.map((collection) => (
                    <div key={collection.id} className="collection-card">
                        <div className="title">
                            <p>{collection.name}</p>
                            <p>{collection.culture}</p>
                        </div>
                        <p>{collection.technique}</p>
                    </div>
                ))}
      
            </div>
        )
    }
}
export default CollectionListComponent;