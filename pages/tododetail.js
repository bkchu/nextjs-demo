import fetch from "isomorphic-unfetch";
import Nav from "../components/nav";
const TodoDetail = props => {
  return (
    <div>
      <Nav />
      <div className="container">
        <p>{props.url.query.name}</p>
        <h1>{props.person.name}</h1>
        <p>This is the {props.person.name} page.</p>
        <p>Height: {props.person.height}</p>
        <p>Mass: {props.person.height}</p>
        <p>Eye Color: {props.person.eye_color}</p>
        <p>Gender: {props.person.gender}</p>
      </div>
      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

TodoDetail.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://www.swapi.co/api/people/${id}/`);
  const person = await res.json();

  console.log(`Fetched person: ${person.name}`);

  return { person };
};

export default TodoDetail;
