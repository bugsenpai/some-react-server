var GreetingComponent = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'You rock',
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var name 
    alert(`Hello ${this.refs.name.value}`)
  },
  render: function(){
    var name = this.props.name;
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