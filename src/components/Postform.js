import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    }

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  
  render(){
    return(
      <div>
        <h1>Add Post</h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <label>Title :</label><br/>
            <input type="text" name="title" value={this.state.title} onChange={e => this.onChange(e)}/>
          </div>
          <div>
            <label>Body :</label><br/>
            <textarea name="body" value={this.state.body} onChange={e => this.onChange(e)}/>
          </div>
          <br/>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {createPost})(PostForm)