const QUEUE_KEY = 'offlineQueue';

// Get current queue
export const getQueue = () => {
  const stored = localStorage.getItem(QUEUE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Add action to queue
export const addToQueue = (action) => {
  const queue = getQueue();
  queue.push(action);
  localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
};

// Clear queue
export const clearQueue = () => {
  localStorage.removeItem(QUEUE_KEY);
};
