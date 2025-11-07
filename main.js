// main.js

import { setupHighlight } from './highlight.js';
import { initTheme, switch_theme, setupResponsive } from './memory.js';
import { sendMessage, loadChats, createNewChat } from './chat.js';
import { getHoursDifference, veiw_model_warn } from './api.js';

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