var GreetingMessage = React.createClass({
  render: function(){
    var name = this.props.nameMess;
    return(
      <div>
        <h1>{name}</h1>
        <p>I feel good now</p>
      </div>
    )
  }
});
var GreetingForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='name'></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})
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
  handleNewName: function(name){
    this.setState({
      name
    })
  },
  render: function(){
    var name = this.state.name;
    return (
      <div>
        <GreetingMessage nameMess={name} />
        <GreetingForm onNewName={this.handleNewName} />
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