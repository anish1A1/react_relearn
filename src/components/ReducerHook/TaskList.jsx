import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [editingId, setEditingId] = useState(null);
  const [draftText, setDraftText] = useState("");

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center gap-3 p-2 border rounded-md shadow-sm"
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
            className="h-4 w-4 accent-blue-500"
          />

          {/* Text or Input */}
          {editingId === task.id ? (
            <input
              type="text"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              className="flex-1 border rounded px-2 py-1"
              autoFocus
            />
          ) : (
            <p className={`flex-1 ${task.done ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </p>
          )}

          {/* Edit / Save button */}
          {editingId === task.id ? (
            <button
              onClick={() => {
                onChangeTask({ ...task, text: draftText });
                setEditingId(null);
              }}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                setEditingId(task.id);
                setDraftText(task.text);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
          )}

          {/* Delete button */}
          <button
            onClick={() => onDeleteTask(task.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
