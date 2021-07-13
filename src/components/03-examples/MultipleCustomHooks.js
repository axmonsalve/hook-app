import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="aler alert-info text-center">loading...</div>
      ) : (
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className="mb-2">{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{author}</cite>
          </figcaption>
        </figure>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};
