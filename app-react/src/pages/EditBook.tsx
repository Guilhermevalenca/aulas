import { FormEvent, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import BookServices from "../services/BookServices";

export default function() {
    const { id } = useParams();
    const navigate = useNavigate();
    const bookForm = {
        title: '',
        description: ''
    }

    const getBook = useCallback(async () => {
        try {
            const { data } = await BookServices.show(Number(id));
            
            document.querySelector('input[name="book.title"]')!.value = data.title;
            document.querySelector('input[name="book.description"]')!.value = data.description;

            bookForm.title = data.title;
            bookForm.description = data.description;
        } catch(error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
       getBook();
    }, []);

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            await BookServices.edit(Number(id), bookForm);
            navigate('/');
        } catch(error) {
            alert('deu error');
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={submit}>
                <div>
                    <label>
                        title:
                        <input
                            name="book.title"
                            type="text"
                            onChange={(event) => bookForm.title = event.target.value}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        description:
                        <input 
                            name="book.description"
                            type="text"
                            onChange={(event) => bookForm.description = event.target.value}
                        />
                    </label>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}