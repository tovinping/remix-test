import {Link} from 'remix'
export default function JokesIndexRoute() {
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>
        I was wondering why the frisbee was getting bigger,
        then it hit me.
      </p>
      <Link to={`/jokes/new`}>create</Link>
    </div>
  );
}