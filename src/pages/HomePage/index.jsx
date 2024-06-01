import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/joke');
      const data = await response.json();
      setJokes(data.data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map((joke) => {
        return (
            <Joke key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        );
      })}
    </div>
  );
};
