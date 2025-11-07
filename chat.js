// chat.js

export let chats = JSON.parse(localStorage.getItem('mindoai_chats')) || [];

export function createNewChat() {
  const chatId = `chat_${Date.now()}`;
  const newChat = {
    id: chatId,
    title: 'محادثة جديدة',
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  chats.unshift(newChat);
  saveChats();
  renderChatsList();
  switchToChat(chatId);
}

export function switchToChat(chatId) {
  const chat = chats.find((c) => c.id === chatId);
  // Switch the UI elements and render chat messages
  if (chat) renderMessages(chat.messages);
}

export function loadChats() {
  const savedChats = JSON.parse(localStorage.getItem('mindoai_chats'));
  if (savedChats) {
    chats = savedChats;
    renderChatsList();
  }
}

function saveChats() {
  localStorage.setItem('mindoai_chats', JSON.stringify(chats));
}

export function sendMessage(userMessage) {
  // Simplified implementation for sending and storing user messages
  if (!currentChatId) return;

  const chat = chats.find((c) => c.id === currentChatId);
  chat.messages.push({ role: 'user', content: userMessage });
  saveChats();
}