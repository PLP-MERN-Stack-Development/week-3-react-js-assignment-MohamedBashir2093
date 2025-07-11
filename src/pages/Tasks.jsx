import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

export default function Tasks() {
  const { darkMode } = useTheme();
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: uuidv4(), text: input.trim(), completed: false };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'active' ? !task.completed :
    task.completed
  );

  return (
    <div className={`min-h-screen py-8 px-4 transition duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">Task Manager</h2>

        {/* Input */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-grow px-4 py-2 rounded border outline-none transition duration-200
              ${darkMode
                ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:ring focus:ring-blue-400'
                : 'bg-white text-black border-gray-300 placeholder-gray-500 focus:ring focus:ring-blue-500'
              }`}
          />
          <button
            onClick={addTask}
            disabled={input.trim() === ''}
            className={`px-4 py-2 rounded transition
              ${input.trim() === ''
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
          >
            Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-4">
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded border capitalize transition
                ${filter === f
                  ? 'bg-blue-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-200'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {filteredTasks.length === 0 && (
            <li className="text-center text-gray-400">No tasks found.</li>
          )}
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-4 rounded shadow transition
                ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}
              `}
            >
              <span
                onClick={() => toggleComplete(task.id)}
                className={`cursor-pointer flex-grow ${
                  task.completed ? 'line-through opacity-60' : ''
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
