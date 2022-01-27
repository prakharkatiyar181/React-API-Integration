import React from "react";

export default class MyForm extends React.Component {
    state = {
        gender : "",
        title: "",
        first: "",
        last: "",
        snumber: "",
        sname: "",
        city: "",
        state: "",
        country: "",
        postcode: "",
        offset: "",
        description: "",
        email: "",
        uuid: "",
        username: "",
        password: "",
        salt: "",
        md5: "",
        ddate: "",
        dage: "",
        rdate: "",
        rage: "",
        phone: "",
        cell: "",
        iname: "",
        nat: "",
        fvisible:true,
    };

    handleChangegender = event => {
        this.setState({ gender: event.target.value });
    };
    handleChangetitle = event => {
        this.setState({ title: event.target.value });
    };
    handleChangefirst = event => {
        this.setState({ first: event.target.value });
    };
    handleChangelast = event => {
        this.setState({ last: event.target.value });
    };
    handleChangesnumber = event => {
        this.setState({ snumber: event.target.value });
    };
    handleChangesname = event => {
        this.setState({ sname: event.target.value });
    };
    handleChangecity = event => {
        this.setState({ city: event.target.value });
    };
    handleChangestate = event => {
        this.setState({ state: event.target.value });
    };
    handleChangecountry = event => {
        this.setState({ country: event.target.value });
    };
    handleChangepostcode = event => {
        this.setState({ postcode: event.target.value });
    };
    handleChangeoffset = event => {
        this.setState({ offset: event.target.value });
    };
    handleChangedescription = event => {
        this.setState({ description: event.target.value });
    };
    handleChangeemail = event => {
        this.setState({ email: event.target.value });
    };
    handleChangeuuid = event => {
        this.setState({ uuid: event.target.value });
    };
    handleChangeusername = event => {
        this.setState({ username: event.target.value });
    };
    handleChangepassword = event => {
        this.setState({ password: event.target.value });
    };
    handleChangesalt = event => {
        this.setState({ salt: event.target.value });
    };
    handleChangemd5 = event => {
        this.setState({ md5: event.target.value });
    };
    handleChangeddate = event => {
        this.setState({ ddate: event.target.value });
    };
    handleChangedage = event => {
        this.setState({ dage: event.target.value });
    };
    handleChangerdate = event => {
        this.setState({ rdate: event.target.value });
    };
    handleChangerage = event => {
        this.setState({ rage: event.target.value });
    };
    handleChangephone = event => {
        this.setState({ phone: event.target.value });
    };
    handleChangecell = event => {
        this.setState({ cell: event.target.value });
    };
    handleChangeiname = event => {
        this.setState({ iname: event.target.value });
    };
    handleChangenat = event => {
        this.setState({ nat: event.target.value });
    };

    handleSubmit = async () => {
        await console.log(this.state);
        this.setState(
            {fvisible:false}
        )
    };

    render() {
        if(this.state.fvisible)
        {
            return (
                <div className="input-form">
                    <h3>Gender</h3><h2>:</h2><input value={this.state.gender} onChange={this.handleChangegender} />
                    <h3>Title</h3><h2>:</h2><input value={this.state.title} onChange={this.handleChangetitle} />
                    <h3>First Name</h3><h2>:</h2><input value={this.state.first} onChange={this.handleChangefirst} />
                    <h3>Second Name</h3><h2>:</h2><input value={this.state.last} onChange={this.handleChangelast} />
                    <h3>Street Number</h3><h2>:</h2><input value={this.state.snumber} onChange={this.handleChangesnumber} />
                    <h3>Street Name</h3><h2>:</h2><input value={this.state.sname} onChange={this.handleChangesname} />
                    <h3>City</h3><h2>:</h2><input value={this.state.city} onChange={this.handleChangecity} />
                    <h3>State</h3><h2>:</h2><input value={this.state.state} onChange={this.handleChangestate} />
                    <h3>Country</h3><h2>:</h2><input value={this.state.country} onChange={this.handleChangecountry} />
                    <h3>Postcode</h3><h2>:</h2><input value={this.state.postcode} onChange={this.handleChangepostcode} />
                    <h3>Timezone Offset</h3><h2>:</h2><input value={this.state.offset} onChange={this.handleChangeoffset} />
                    <h3>Timezone Description</h3><h2>:</h2><input value={this.state.description} onChange={this.handleChangedescription} />
                    <h3>Email</h3><h2>:</h2><input value={this.state.email} onChange={this.handleChangeemail} />
                    <h3>Login Uuid</h3><h2>:</h2><input value={this.state.uuid} onChange={this.handleChangeuuid} />
                    <h3>Login Username</h3><h2>:</h2><input value={this.state.username} onChange={this.handleChangeusername} />
                    <h3>Login Password</h3><h2>:</h2><input value={this.state.password} onChange={this.handleChangepassword} />
                    <h3>Login Salt</h3><h2>:</h2><input value={this.state.salt} onChange={this.handleChangesalt} />
                    <h3>Login Md5</h3><h2>:</h2><input value={this.state.md5} onChange={this.handleChangemd5} />
                    <h3>Date Of Birth Date</h3><h2>:</h2><input value={this.state.ddate} onChange={this.handleChangeddate} />
                    <h3>Date of Birth Age</h3><h2>:</h2><input value={this.state.dage} onChange={this.handleChangedage} />
                    <h3>Registered Date</h3><h2>:</h2><input value={this.state.rdate} onChange={this.handleChangerdate} />
                    <h3>Registered Age</h3><h2>:</h2><input value={this.state.rage} onChange={this.handleChangerage} />
                    <h3>Phone Number</h3><h2>:</h2><input value={this.state.phone} onChange={this.handleChangephone} />
                    <h3>Cell Number</h3><h2>:</h2><input value={this.state.cell} onChange={this.handleChangecell} />
                    <h3>ID Name</h3><h2>:</h2><input value={this.state.iname} onChange={this.handleChangeiname} />
                    <h3>Nat</h3><h2>:</h2><input value={this.state.nat} onChange={this.handleChangenat} />
                    
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            );
        }
        return (
            <div>
            <div><h3>Gender</h3><h2>:</h2>{this.state.gender}</div>
            <div><h3>Title</h3><h2>:</h2>{this.state.title}</div>
            <div><h3>First Name</h3><h2>:</h2>{this.state.first}</div>
            <div><h3>Second Name</h3><h2>:</h2>{this.state.last}</div>
            <div><h3>Street Number</h3><h2>:</h2>{this.state.snumber}</div>
            <div><h3>Street Name</h3><h2>:</h2>{this.state.sname}</div>
            <div><h3>City</h3><h2>:</h2>{this.state.city}</div>
            <div><h3>State</h3><h2>:</h2>{this.state.state}</div>
            <div><h3>Country</h3><h2>:</h2>{this.state.country}</div>
            <div><h3>Postcode</h3><h2>:</h2>{this.state.postcode}</div>
            <div><h3>Timezone Offset</h3><h2>:</h2>{this.state.offset}</div>
            <div><h3>Timezone Description</h3><h2>:</h2>{this.state.description}</div>
            <div><h3>Email</h3><h2>:</h2>{this.state.email}</div>
            <div><h3>Login Uuid</h3><h2>:</h2>{this.state.uuid}</div>
            <div><h3>Login Username</h3><h2>:</h2>{this.state.username}</div>  
            <div><h3>Login Password</h3><h2>:</h2>{this.state.password}</div>
            <div><h3>Login Salt</h3><h2>:</h2>{this.state.salt}</div>
            <div><h3>Login Md5</h3><h2>:</h2>{this.state.md5}</div>
            <div><h3>Date Of Birth Date</h3><h2>:</h2>{this.state.ddate}</div>
            <div><h3>Date Of Birth Age</h3><h2>:</h2>{this.state.dage}</div>
            <div><h3>Registered Date</h3><h2>:</h2>{this.state.rdate}</div>
            <div><h3>Registered Age</h3><h2>:</h2>{this.state.rage}</div>
            <div><h3>Phone Number</h3><h2>:</h2>{this.state.phone}</div>
            <div><h3>Cell Number</h3><h2>:</h2>{this.state.cell}</div>
            <div><h3>Id Name</h3><h2>:</h2>{this.state.iname}</div>
            <div><h3>Nat</h3><h2>:</h2>{this.state.nat}</div>

            </div>
        );
    
    }
}