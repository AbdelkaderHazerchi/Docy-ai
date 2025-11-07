// chat.js

let chats = JSON.parse(localStorage.getItem('mindoai_chats')) || [];

function renderChatsList() {
  const chatsList = document.getElementById('chats-list');
  chatsList.innerHTML = '';

  chats.forEach((chat) => {
    const chatElement = document.createElement('div');
    chatElement.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
    chatElement.onclick = () => switchToChat(chat.id);

    chatElement.innerHTML = `
      <div class="chat-title">${chat.title}</div>
      <button class="delete-chat" onclick="event.stopPropagation(); deleteChat('${chat.id}')">×</button>
    `;

    chatsList.appendChild(chatElement);
  });
}

function createNewChat() {
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

function switchToChat(chatId) {
  currentChatId = chatId;
  const chat = chats.find((c) => c.id === chatId);
  // Switch the UI elements and render chat messages
  if (chat) renderMessages(chat.messages);
}

function loadChats() {
  const savedChats = JSON.parse(localStorage.getItem('mindoai_chats'));
  if (savedChats) {
    chats = savedChats;
    renderChatsList();
  }
}

function saveChats() {
  localStorage.setItem('mindoai_chats', JSON.stringify(chats));
}

function sendMessage(userMessage) {
  // Simplified implementation for sending and storing user messages
  if (!currentChatId) return;

  const chat = chats.find((c) => c.id === currentChatId);
  chat.messages.push({ role: 'user', content: userMessage });
  saveChats();
}
