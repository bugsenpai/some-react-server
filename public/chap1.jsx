var GreetingMessage = React.createClass({
  render: function(){
    var name = this.props.nameMess;
    var message = this.props.message;
    return(
      <div>
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
    )
  }
});
var GreetingForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.myTextArea.value;
    this.refs.name.value = '';
    this.refs.myTextArea.value = '';
    if (message.length > 0){
      updates.message = message;
    }
    if (name.length > 0) {
      updates.name = name;
    }
    this.props.onUpdateNameAndMessage(updates);
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type='text' ref='name'></input>
          </div>
          <div>
            <textarea ref='myTextArea'></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
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
      message: this.props.message
    }
  }
  ,
  handleNewNameAndMessage: function(updates){
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreetingMessage nameMess={name} message={message}/>
        <GreetingForm
          onUpdateNameAndMessage={this.handleNewNameAndMessage}
        />
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