import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state = {
           name: "",
           URL: ""
       }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       console.log("input updated!")
        console.log(event.target.value)

        this.setState({name:event.target.value})

        
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        console.log(this.state)
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.handleSubmit(this.state)

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>Name</label>
                <input type = "text" name = "name" onChange={this.handleChange} value ={this.state.name} ></input>
                <label>URL</label>
                <input type = "text" name = "URL" onChange ={this.handleChange} value = {this.state.URL}></input>
                <button onClick = {this.onFormSubmit}> Submit</button>

            </form>
        )
    
    }
}

export default Form;
