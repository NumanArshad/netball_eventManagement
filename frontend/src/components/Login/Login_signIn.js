import React from 'react';
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
      this.state = {username:'',password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   
   
 
    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }
 handleSubmit(event) {
        event.preventDefault();
        this.props.handleSignIn(this.state.username,this.state.password)

    }


    render() {
          var errorMessage = (this.props.status != undefined && this.props.status=="LOGIN_ACCOUNT_NOT_AUTHORIZED") ? "Username or password is incorrect" :""
// var totalYears=pilots.reduce((acc,pilot)=>acc+pilot.id,-1)
// alert("signIn render")
var totalYears=pilots.reduce((old,pilot)=>old.id<pilot.id?old:pilot,{})
        return (
          <form>
            {totalYears.name}
            <div style={{padding:'6%',width:'40%'}} >
            <h1>Login Here</h1>
                <p style={{color: 'red'}}>{errorMessage}</p>
               <input   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
               <br /><br />
               <input   id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} />
               <br /><br />
               <button onClick={this.handleSubmit} type="submit">Login</button>
            </div>
        </form>
        );
    }
}

export default LoginForm
