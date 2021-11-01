import React from "react";
import { Switch, Route } from "react-router-dom";
import CollectionDetails from './collection-details';
import CollectionListComponent from './collection-list';

const CollectionRoute = () => {
    
    return (
        <Switch>
            <Route path="/collection/:collectionId" component={CollectionDetails}>
            </Route>
            <Route path="/collection">
                <CollectionListComponent/>
            </Route>
        </Switch>
    );
}
export default CollectionRoute;