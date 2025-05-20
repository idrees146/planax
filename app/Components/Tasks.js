import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

// 🧱 Sortable Task Item Component
const SortableTask = ({ task, index, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : undefined,
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.3,
        type: 'spring',
        bounce: 0.3,
      }}
      className="flex bg-white/25 my-3 p-4 w-[95%] mx-auto rounded-lg justify-between cursor-pointer"
      onClick={() => onDelete(index)}
    >
      <div className="flex items-center gap-4">
        <button
          className="cursor-grab group"
          onClick={(e) => e.stopPropagation()} // 🛑 Prevent task delete on drag
          {...listeners}
          {...attributes}
        >
          <img src="drag.svg" alt="drag" />
        </button>

        <div className="title bg-slate-950 text-white p-1 transition-transform duration-300 text-sm rounded-md opacity-0 absolute ml-32 mb-14">
          Drag The Task
        </div>

        <div className="flex items-center gap-2">
          <div className="circle w-4 h-4 rounded-full bg-white"></div>
          <p className="text-white px-2 task">{task.name}</p>
          <div className="Done bg-slate-950 text-white p-1 transition-all duration-300 text-sm rounded-md opacity-0 absolute ml-32 mb-14">
            Done with Task?
          </div>
        </div>
      </div>
      <img src={`${task.priority.toLowerCase()}.svg`} alt={task.priority} />
    </motion.div>
  );
};

const Tasks = (props) => {
  const fullDate = `${props.selectedDate}-${props.month}-${props.year}`;
  const STORAGE_KEY = `tasks + ${fullDate}`;

  const [newTaskVisible, setNewTaskVisible] = useState(false);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Normal');
  const [tasks, setTasks] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const activeTask = tasks.find((t) => t.id === activeId);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const withIds = savedTasks.map((t) => ({ ...t, id: t.id || crypto.randomUUID() }));
    setTasks(withIds);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(withIds));
  }, [fullDate]);

  const addTasks = (e) => {
    e.preventDefault();

    toast.success('New Task has been added', {
      position: 'top-right',
      autoClose: 2000,
      theme: 'dark',
    });

    const taskObject = {
      id: crypto.randomUUID(),
      name: task,
      priority: priority,
      date: fullDate,
    };

    const updatedTasks = [...tasks, taskObject];
    setTasks(updatedTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    setTask('');
    setPriority('Normal');
    setNewTaskVisible(false);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);

    const newTaskOrder = arrayMove(tasks, oldIndex, newIndex);
    setTasks(newTaskOrder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTaskOrder));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only trigger if NOT typing in an input or textarea
      const activeTag = document.activeElement.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
  
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault(); // prevent accidental browser behavior
        setNewTaskVisible(true);
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  

  return (
    <div className="tasks">
      <ToastContainer />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <AnimatePresence>
            {tasks.map((task, index) => (
              <SortableTask key={task.id} task={task} index={index} onDelete={deleteTask} />
            ))}
          </AnimatePresence>
        </SortableContext>

        {/* 🧲 Floating Dragged Item */}
        <DragOverlay>
          {activeTask ? (
            <motion.div
              layout
              className="flex bg-white/40 cursor-grabbing my-3 p-4 w-[95%] mx-auto rounded-lg justify-between shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <button className="cursor-grab group">
                  <img src="drag.svg" alt="drag" />
                </button>
                <div className="flex items-center cursor-pointer gap-2">
                  <div className="circle w-4 h-4 rounded-full bg-white"></div>
                  <p className="text-white px-2 task">{activeTask.name}</p>
                </div>
              </div>
              <img src={`${activeTask.priority.toLowerCase()}.svg`} alt={activeTask.priority} />
            </motion.div>
          ) : null}
        </DragOverlay>
      </DndContext>

<div className="flex gap-4 items-center">



      <button
        onClick={() => setNewTaskVisible(true)}
        className="flex mew text-white bg-gradient-to-r from-blue-900 to-purple-900 sticky bottom-0 p-2 rounded-lg ml-5 my-4 cursor-pointer gap-3 items-center add"
      >
        <img src="newTask.svg" alt="" />
        <p>New Task</p>
      </button>
      <div className="mewTask bg-slate-950 text-white p-1 transition-all duration-300 text-sm rounded-md opacity-0 absolute ml-40     ">
            Press "N" as Shortcut
          </div>
          </div>
      <div
        className={`sticky new bottom-40 bg-gradient-to-r bg-slate-900 text-white border-white border rounded-xl p-4 
        transition-all duration-300 ease-in-out transform
        ${
          newTaskVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
        }`}
      >
        <form onSubmit={addTasks}>
          <div className="name flex flex-col gap-3 mb-4">
            <label className="text-white">Task Name</label>
            <input
              className="bg-white p-2 font-bold text-sm w-full text-blue-950 rounded"
              type="text"
              placeholder="Add a new Task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>

          <div className="priority flex items-center gap-5 mb-4">
            <label>Select Priority:</label>
            <select
              className="bg-gradient-to-r from-blue-800 to-purple-900 p-1 text-white rounded"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option className="text-black">Normal</option>
              <option className="text-black">High</option>
              <option className="text-black">Low</option>
            </select>
          </div>

          <div className="flex mt-4 items-center gap-3">
            <button
              type="submit"
              disabled={!task.trim()}
              className="bg-gradient-to-r from-blue-800 to-purple-900 text-white cursor-pointer font-bold px-4 py-2 rounded"
            >
              Add Task
            </button>

            <button
              onClick={() => setNewTaskVisible(false)}
              type="button"
              className="bg-gradient-to-r from-blue-800 to-purple-900 text-white cursor-pointer font-bold px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
