import React, { Component } from "react";
import './index.css';
import { apiUrl } from '../../../constants'
import { imageUrl } from '../../../constants'

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
                    <div key={collection.id} className="collection-card" >
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
                ))}

            </div>
        )
    }
}
export default CollectionListComponent;