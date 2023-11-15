// PersonList.js

import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; // Import a CSS file for styling

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Person List</h2>
        <table className="person-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Description</th>
              <th>Postal Code</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map(person => (
              <tr key={person.login.uuid}>
                <td>
                  <img
                    src={person.picture.thumbnail}
                    alt={`${person.name.first} ${person.name.last}`}
                    className="person-image"
                  />
                </td>
                <td>{`${person.name.title} ${person.name.first} ${person.name.last}`}</td>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}, ${person.location.postcode}`}</td>
                <td>{person.location.timezone.description}</td>
                <td>{person.location.postcode}</td>
                <td>{person.location.city}</td>
                <td>{person.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PersonList;
