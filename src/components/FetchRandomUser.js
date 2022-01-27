import React from "react";
// import EditProfile from "./EditProfile";


export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
    edit: false
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  // handleclick = () => {
  //   this.setState(
  //     {this.state.edit:false}
  //   )
  // }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
      {/* <button onClick= {this.handleclick} >Edit</button> */}

        <div><h3>Gender</h3><h2>:</h2>{this.state.person.gender}</div>
        <div><h3>Title</h3><h2>:</h2>{this.state.person.name.title}</div>
        <div><h3>First Name</h3><h2>:</h2>{this.state.person.name.first}</div>
        <div><h3>Second Name</h3><h2>:</h2>{this.state.person.name.last}</div>
        <div><h3>Street Number</h3><h2>:</h2>{this.state.person.location.street.number}</div>
        <div><h3>Street Name</h3><h2>:</h2>{this.state.person.location.street.name}</div>
        <div><h3>City</h3><h2>:</h2>{this.state.person.location.city}</div>
        <div><h3>State</h3><h2>:</h2>{this.state.person.location.state}</div>
        <div><h3>Country</h3><h2>:</h2>{this.state.person.location.country}</div>
        <div><h3>Postcode</h3><h2>:</h2>{this.state.person.location.postcode}</div>
        <div><h3>Timezone Offset</h3><h2>:</h2>{this.state.person.location.timezone.offset}</div>
        <div><h3>Timezone Description</h3><h2>:</h2>{this.state.person.location.timezone.description}</div>
        <div><h3>Email</h3><h2>:</h2>{this.state.person.email}</div>
        <div><h3>Login Uuid</h3><h2>:</h2>{this.state.person.login.uuid}</div>
        <div><h3>Login Username</h3><h2>:</h2>{this.state.person.login.username}</div>  
        <div><h3>Login Password</h3><h2>:</h2>{this.state.person.login.password}</div>
        <div><h3>Login Salt</h3><h2>:</h2>{this.state.person.login.salt}</div>
        <div><h3>Login Md5</h3><h2>:</h2>{this.state.person.login.md5}</div>
        <div><h3>Date Of Birth Date</h3><h2>:</h2>{this.state.person.dob.date}</div>
        <div><h3>Date Of Birth Age</h3><h2>:</h2>{this.state.person.dob.age}</div>
        <div><h3>Registered Date</h3><h2>:</h2>{this.state.person.registered.date}</div>
        <div><h3>Registered Age</h3><h2>:</h2>{this.state.person.registered.age}</div>
        <div><h3>Phone Number</h3><h2>:</h2>{this.state.person.phone}</div>
        <div><h3>Cell Number</h3><h2>:</h2>{this.state.person.cell}</div>
        <div><h3>Id Name</h3><h2>:</h2>{this.state.person.id.name}</div>
        <div><h3>Profile Picture</h3><h2>:</h2><img src={this.state.person.picture.large} alt="Can't Show" /></div>
        <div><h3>Nat</h3><h2>:</h2>{this.state.person.nat}</div>

      </div>
    );
  }
}