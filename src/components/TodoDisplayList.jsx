import './TodoDisplayList.css';

function TodoDisplayList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div>
      <ul>
        {
          tasks.map((task, index) => {
            return (
              <li
                className='todo-list'
                key={index}
                onClick={() => onToggleTask(index)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {task.text}
                <button
                  className='del-btn'
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteTask(index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          }) // Explicitly return the <li>
        }
      </ul>
    </div>
  );
}

export default TodoDisplayList;
