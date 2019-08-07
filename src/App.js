import React, { Component } from 'react'
import CoursForm from './components/CoursForm'
import CoursList from './components/CoursList'

class App extends Component {

  state = {
    coures : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "PHP"},
    ],
    current : ''
  }
  // UpdateCourse function
   updateCourse = (e) => {
      this.setState({
      current: e.target.value
    })
  }
  // AddCourse function
  
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.coures;
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })

  }

  // deletCourse

  deletCourse = (index) => {
      let coures = this.state.coures
      coures.splice(index, 1)
      this.setState({
        coures
      })
  }

   //editCourse
   editCourse = (index, value) => {
    let courses = this.state.coures;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    const {coures} = this.state;
    const courselst = coures.map( (course , index) => {
      return <CoursList details={course} key={index} index={index} update={this.handleChange} deletCourse={this.deletCourse} editCourse={this.editCourse}/>
    })

    return (
      <section className="App">
        <h1>Ajouter cour</h1>
        <ul>{courselst}</ul>
          <CoursForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
      </section>
    );
  }
}
export default App;
