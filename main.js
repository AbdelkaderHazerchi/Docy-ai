// main.js

function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }

  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
  console.log("🎉 Application Starting");

  setupHighlight();
  initTheme();
  loadChats();

  if (chats.length > 0) {
    switchToChat(chats[0].id);
  } else {
    createNewChat();
  }

  setupResponsive();
  updateMemoryDisplay();
});
