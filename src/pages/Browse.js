import React, { Component } from "react";
import { BrowseContainer } from "../containers/BrowseContainer";
import { selectionMap } from "../utils";
import { FirebaseContext } from "../context/firebase";


export default class Browse extends Component {
  state = {
    series: [],
    films: [],
  }
  
  static contextType = FirebaseContext;
    
  componentDidMount = () => {
    const {firebase} = this.context;

    const con = firebase.firestore() 

    const Promises = [
      con.collection("series").get(),
      con.collection("films").get()
    ]
    
    Promise.all(Promises).then((results) => {
      const contents = results.map(res => res.docs.map(doc => ({...doc.data(), docId: doc.id})));
      
      const slides = selectionMap({series: contents[0], films: contents[1]});
      
      this.setState({...slides});
    }).catch((err)=>console.log(`${err.message} code:${err.code}`))
  }

  render = () => (
    <BrowseContainer slides={this.state} user={this.props.user}/>
  )
}
