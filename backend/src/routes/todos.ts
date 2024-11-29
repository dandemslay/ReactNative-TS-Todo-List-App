import express from 'express';
import Todo from '../models/Todo';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Apply authentication middleware to all todo routes
router.use(authenticateToken);

// Get all todos
router.get('/', async (req, res) => {
  try {
    console.log('Fetching todos for user:', req.user?.id);
    const todos = await Todo.find({ userId: req.user?.id });
    console.log('Found todos:', todos);
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

// Create todo
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    console.log('Creating todo:', { title, userId: req.user?.id });
    
    const todo = new Todo({
      title,
      userId: req.user?.id,
      completed: false
    });
    
    const savedTodo = await todo.save();
    console.log('Created todo:', savedTodo);
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ message: 'Error creating todo' });
  }
});

// Update todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    console.log('Updating todo:', { id, title, completed, userId: req.user?.id });
    
    const todo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.user?.id },
      { title, completed },
      { new: true }
    );
    
    if (!todo) {
      console.log('Todo not found:', id);
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    console.log('Updated todo:', todo);
    res.json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ message: 'Error updating todo' });
  }
});

// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Deleting todo:', { id, userId: req.user?.id });
    
    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user?.id });
    
    if (!todo) {
      console.log('Todo not found for deletion:', id);
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    console.log('Deleted todo:', todo);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: 'Error deleting todo' });
  }
});

export default router;
