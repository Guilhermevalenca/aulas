import { useEffect, useState } from "react";
import api from "../plugins/api";
import { AxiosResponse } from "axios";

export default function() {
  return (
    <div>
      <h1>App</h1>
      <div>
        <Books />
      </div>
    </div>
  );
}


function Books(): JSX.Element[] {
  const [books, setBooks] = useState<{
    id: number,
    title: string,
    description: string,
  }[]>([]);

  useEffect(() => {
    api.get('/books')
      .then((response: AxiosResponse) => {
        setBooks(response.data);
      });
  }, []);

  return books.map((book, index) => (
    <div key={index}>
      <fieldset>
      <p>title: {book.title}</p>
      <p>description: {book.description}</p>
      </fieldset>
    </div>
  ));
}