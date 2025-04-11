import { FormEvent } from "react"
import { BookType } from "../types/Book"
import BookServices from "../services/BookServices";
import { useNavigate } from "react-router";

export default function() {
    const navigate = useNavigate();
    const book: BookType = {
        title: '',
        description: '',
    }

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            await BookServices.create(book);
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={submit} className="form-content">
            <div>
                <label>
                    title:
                    <input 
                        type="text" 
                        name="title" 
                        onChange={(event) => book.title = event.target.value} 
                    />
                </label>
            </div>
            <div>
                <label>
                    description:
                    <input 
                        type="text" 
                        name="description" 
                        onChange={(event) => book.description = event.target.value} 
                    />
                </label>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}