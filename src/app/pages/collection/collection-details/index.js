import React, {Component} from "react";
import { apiUrl } from "../../../constants/app";
import CollectionCard from "../../../core/collection-card";
import LoaderComponent from "../../../assets/loader";

class CollectionDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            collection: null
        }
    }

    async componentDidMount(){
        const response = await fetch(`${apiUrl}/collections/${this.props.match.params.collectionId}`);
        const collection = await response.json();

        this.setState({ collection: collection, isLoaded: true})
    }

    render(){
        const {error, collection, isLoaded} = this.state;
        if (error) return <p>{error}</p>
        if (!isLoaded) return <LoaderComponent/>

        return (
            <div className="collection">  
              <CollectionCard collection={collection} />
            </div>
        )
    }
}

export default CollectionDetailComponent;