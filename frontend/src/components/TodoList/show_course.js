import React, { Component } from "react";


class ShowCourse extends React.Component {
    constructor(props) {
		super(props);
		this.state = {courseName:this.props.courseName};
    }

    componentWillReceiveProps(ItemsProps){
      this.setState({courseName:ItemsProps.courseName});
    }

    render() {
     // alert('in ShowCourse Component');
     var todoItems =[]
      if(this.state.courseName.length>0) {
        todoItems=this.state.courseName.map((num)=>
        <li>{num.courseName}</li>
        );
      }
           return (
                <ul>{todoItems}</ul>
          );
    }
};

export default ShowCourse;