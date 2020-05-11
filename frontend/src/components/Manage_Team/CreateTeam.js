import React from 'react';

class CreateTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = { teamName: '' };

  }

  //   handleChange(event) {
  //         this.setState({[event.target.id] : event.target.value})
  //     }
  //  handleSubmit(event) {
  //         event.preventDefault();
  //         this.props.handleSignIn(this.state.username,this.state.password)

  //     }


  render() {
    return (
      <div>
        <h1>Login Here</h1>
        <input type="text" onChange={(event) => this.setState({ teamName: event.target.value })} value={this.state.teamName} />

        <br /><br />
        <button onClick={() => this.props.saveTeam(this.state.teamName)}>Save</button>
        
        <button onClick={() => this.props.fetch_allPlayers_Teams()}>show</button>
      </div>
    );
  }
}

export default CreateTeam
