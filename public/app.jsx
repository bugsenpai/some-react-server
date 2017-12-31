var GreetingComponent = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'You rock',
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
    }
  }
  ,
  handleSubmit: function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var newName = nameRef.value;
    // alert(`Hello ${newName}`);
    this.refs.name.value = '';
    if (typeof newName === 'string' && newName.length>0) {
      this.setState({
      name: newName,
    });
    }
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>My first React and Express server</h1>
        <p>This is so awesome</p>
        <em>{name}</em>
        <q> {message + '!!'}</q>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='name'></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
});
var fullName = 'Chau Giang';
ReactDOM.render(
  <GreetingComponent
    name={fullName}
  />,
  document.getElementById('app')
)