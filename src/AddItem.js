import React, {Component} from 'react'

class AddItem extends Component{

    state = {  name: null,
               price: null

    }

    
    handleChange() = (e) => {
        this.setState ({
            [e.target.id] : e.target.value;
        })
    }
    
    handleSubmit() = (e) => {
        e.preventDefault();

    }  

    render() { return (<div>
        <form>
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="price"> Name: </label>
            <input type="text" id="price" onChange={this.handleChange} />
            <button>Submit</button>
            
        </form>
    </div>);


    }

}