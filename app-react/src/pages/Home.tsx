import { useCallback, useEffect, useState } from "react";
import BookServices from "../services/BookServices";
import { BookType } from "../types/Book";
import { useNavigate } from "react-router";


export default function() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>App</h1>
      <div>
        <button onClick={() => navigate('/book/create')}>create</button>
      </div>
      <div>
        <Books />
      </div>
    </div>
  );
}


function Books(): JSX.Element[] {
  const navigate = useNavigate();
  const [books, setBooks] = useState<BookType[]>([]);

  const getAllBooks = useCallback(async () => {
    try {
      const data: BookType[] = await BookServices.fetchAll();
      setBooks(data);
    } catch(error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllBooks();
  }, []);


  async function deleteBook(id: number) {
    await BookServices.delete(id);
    getAllBooks();
  }

  return books.map((book, index) => (
    <div key={index}>
      <fieldset>
        <p>title: {book.title}</p>
        <p>description: {book.description}</p>
        <button onClick={() => navigate(`/book/edit/${book.id}`)}>edit</button>
        <button onClick={() => deleteBook(Number(book.id))}>delete</button>
      </fieldset>
    </div>
  ));
}