// main.js

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
