import React, { Component } from 'react';

class AddPhoto extends Component {
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const imageDesc = event.target.elements.desc.value;
        const post  = {
            id:0,
            description : imageDesc,
            imageLink : imageLink
        }
        if(imageLink && imageDesc){
                this.props.onAddPhoto(post)
        }
    }
    render() { 
        return ( <div>
            <h1>PhotoWall</h1>
            <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input text="text" placeholder="Image Link" name="link"/>
                        <input text="text" placeholder="Image Description" name="desc"/>
                        <button>Post</button>
                    </form>
            </div>
        </div> );
    }
}
 
export default AddPhoto;