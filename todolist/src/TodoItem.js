

const TodoItem = ({todo, onRemoveItem,onToggleItem}) => {
    return(
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "complete" : "text"}
                onClick={() => onToggleItem(todo.id)}
                >
                {todo.task}
            </div>
            <div onClick={() => onRemoveItem(todo.id)}>
                X
            </div>
        </div>
    )
}

export default TodoItem;