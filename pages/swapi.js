import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";

class Swapi extends Component {
  // static async getInitialProps() {
  //   // "https://swapi.co/api/people"
  //   const res = await fetch("https://swapi.co/api/people");
  //   const data = await res.json();

  //   console.log(`Show data fetched. Count: ${data.results.length}`);

  //   return {
  //     people: data.results
  //   };
  // }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {this.props.people.map(person => (
            <li key={person.name}>
              <Link
                as={`/td/${person.name}`}
                href={`/tododetail?id=${person.url.split("/")[5]}`}
              >
                <a>{person.name}</a>
              </Link>
            </li>
          ))}
        </div>
        <style jsx>{`
          .container {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            list-style: none;
          }

          .container li {
            border: 1px solid black;
            padding: 20px;
            text-decoration: none;
            margin: 5px;
          }
        `}</style>
      </div>
    );
  }
}

Swapi.getInitialProps = async function() {
  // "https://swapi.co/api/people"
  const res = await fetch("https://swapi.co/api/people");
  const data = await res.json();

  return {
    people: data.results
  };
};

export default Swapi;
