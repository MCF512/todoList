import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const handleDelete = (id, refreshTodos) => {
  const todoRef = ref(db, `todos/${id}`);
  remove(todoRef)
} 