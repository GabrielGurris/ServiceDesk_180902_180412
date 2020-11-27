import React, { Component } from 'react';

export class FileInput extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="file" ref={this.fileInput} />
        </form>
      );
    }
  }
  export default FileInput;