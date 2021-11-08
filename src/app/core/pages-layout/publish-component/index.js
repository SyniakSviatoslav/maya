import React, { Component } from "react";

class PublishDesign extends React.Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef();
        this.state = {
            collection: ''
        };
    }
    onCreateCollection = () => {
        let collectionInfo = {
            name: this.nameRef.current.value,
            createdAt: this.createdAtRef.current.value,
            technique: this.technqiueRef.current.value,
            createdIn: this.createdInRef.current.value,
            culture: this.cultureRef.current.value,
            image: this.imageRef.current.value
        }
        console.log(collectionInfo)

        fetch('https://615c91e3c29813001773625b.mockapi.io/collections', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
           body: JSON.stringify(collectionInfo)
    })
    }



    render() {
        return (
            <div>
                <h2>Please Enter Collection object Details...</h2>
                <p>
                    <label>Collection Name : <input type="text" ref={this.nameRef}></input></label>
                </p>
                <p>
                    <label>Collection Age of Creation : <input type="number" ref={this.createdAtRef}></input></label>
                </p>
                <p>
                    <label>Collection Technique : <input type="text" ref={this.techniqueRef}></input></label>
                </p>
                <p>
                    <label>Collection Place of Creation : <input type="text" ref={this.createdInRef}></input></label>
                </p>
                <p>
                    <label>Collection Culture : <input type="text" ref={this.cultureRef}></input></label>
                </p>
                <p>
                    <label>Collection Image : <input type="file" ref={this.imageRef}></input></label>
                </p>
                <button onClick={this.onCreateCollection}>Create</button>
            </div>

        )
    }
}
export default PublishDesign;

