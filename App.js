import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	constructor(props){
    super(props);
    this.state = {
      title:"This is first app",
      act:0,
      index:"",
      data:[]
    }
  }
  
  ComponentDidMount(){
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let data = this.state.data;
    data.splice(i,1);
    this.setState({
      data:data
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }


  fEdit = (i) => {
    let datas = this.state.data[i];
    this.refs.name.value = datas.name;
    this.refs.address.value = datas.address;
 console.log(datas.name);
    this.setState({
      act:1,
      index:i
    });
 
    this.refs.name.focus();
  }


  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let data = this.state.data;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){
      let datas = {name, address}
      data.push(datas);
    }else{
      let index = this.state.index;
      data[index].name = name;
      data[index].address = address;
    }
  

    this.setState({
      data: data,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  render() {
    let data = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>

<form ref="myForm" className="myForm">
  <input type="text" ref="name" placeholder="your name" className="formField" />
  <input type="text" ref="address" placeholder="your address" className="formField" />
  <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
</form>

         <pre>
           {
             data.map((datas,i) =>
              <li key={i} className="fs">
                {i+1}. {datas.name}, {datas.address}
                <button onClick={()=>this.fEdit(i)}> Edit </button>
                <button onClick={(i)=>this.fRemove(i)}> Remove </button>
              </li>
             )}
          </pre>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
