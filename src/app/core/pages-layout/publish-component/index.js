import React from "react";
import { apiUrl } from '../../../constants/app';
import './index.css';

class PublishComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            createdAt: '',
            technique: '',
            createdIn: '',
            culture: '',
            isActive: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCreatedAtChange = this.handleCreatedAtChange.bind(this);
        this.handleTechniqueChange = this.handleTechniqueChange.bind(this);
        this.handleCreatedInChange = this.handleCreatedInChange.bind(this);
        this.handleCultureChange = this.handleCultureChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleCreatedAtChange(event) {
        this.setState({ createdAt: event.target.value });
    }
    handleTechniqueChange(event) {
        this.setState({ technique: event.target.value });
    }
    handleCreatedInChange(event) {
        this.setState({ createdIn: event.target.value });
    }
    handleCultureChange(event) {
        this.setState({ culture: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        let collectionInfo = {
            name: this.state.name,
            createdAt: this.state.createdAt,
            technique: this.state.technique,
            createdIn: this.state.createdIn,
            culture: this.state.culture
        }
        console.log(collectionInfo)

        fetch(`${apiUrl}/collections`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(collectionInfo)

        })
    }

    // OpenForm(){
    //     this.setState({ isActive: true});
    // }
    // style={isActive ? "publishForm" : "publishForm1"}
    // onClick={() => this.OpenForm()}


    render() {
        return (
            <div className="publishContainer">
                <div className="publishWrapper">
                    <button className="publishButton" > Publish an artifact</button>
                    <div id="publishForm"  >
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                            </label>
                            <label>
                                Age:
                                <input type="text" name="createdAt" value={this.state.createdAt} onChange={this.handleCreatedAtChange} />
                            </label>
                            <label>
                                Technique:
                                <input type="text" name="technique" value={this.state.technique} onChange={this.handleTechniqueChange} />
                            </label>
                            <label>
                                Founding place:
                                <input type="text" name="createdIn" value={this.state.createdIn} onChange={this.handleCreatedInChange} />
                            </label>
                            <label>
                                Culture:
                                <input type="text" name="culture" value={this.state.culture} onChange={this.handleCultureChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PublishComponent;

