import { useState } from "react"

const TodoForm = ({onAddItem}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(inputValue);
        setInputValue('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            onChange={handleChange}
            value={inputValue}
            />

            <button >Зберегти</button>
        </form>
    )
}

export default TodoForm;