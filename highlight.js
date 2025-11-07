// highlight.js
export function setupHighlight() {
  hljs.configure({
    tabReplace: '  ',
    languages: ['javascript', 'python', 'java', 'cpp', 'html', 'css', 'xml']
  });

  // Automatically enhance code blocks
  function enhanceCodeBlocks() {
    console.log('🔄 Enhancing Code Blocks');
    // Implementation of the enhance block logic
  }

 document.ready<Reference exported_modes
```javascript name=highlight.js
// highlight.js
export function setupHighlight() {
  hljs.configure({
    tabReplace: '  ', // Replace tabs with 2 spaces
    languages: ['javascript', 'python', 'java', 'cpp', 'html', 'css', 'xml']
  });

  enhanceCodeBlocks();
}

// Function to enhance code blocks (UI improvements and syntax highlighting)
export function enhanceCodeBlocks() {
  console.log('🔄 Enhancing code blocks...');

  const preElements = document.querySelectorAll('pre:not(.code-block pre)');
  preElements.forEach((preElement) => {
    const codeElement = preElement.querySelector('code');
    if (!codeElement) return;

    try {
      const language = codeElement.className.replace('language-', '') || 'text';
      const codeContent = codeElement.textContent;

      // Create new container
      const codeContainer = document.createElement('div');
      codeContainer.className = 'code-block';

      // Create header
      const codeHeader = document.createElement('div');
      codeHeader.className = 'code-header';
      codeHeader.innerHTML = `
        <span class="code-language">${capitalizeFirst(language)}</span>
        <button class="copy-btn">نسخ</button>
      `;

      // Create code block
      const newPre = document.createElement('pre');
      const newCode = document.createElement('code');
      newCode.className = `language-${language}`;
      newCode.textContent = codeContent;
      newPre.appendChild(newCode);

      // Combine elements
      codeContainer.appendChild(codeHeader);
      codeContainer.appendChild(newPre);

      // Replace original with enhanced block
      preElement.parentNode.replaceChild(codeContainer, preElement);

      // Add copy functionality
      const copyButton = codeHeader.querySelector('.copy-btn');
      copyButton.onclick = function () {
        copyCodeFromBlock(this);
      };

      // Highlight syntax
      hljs.highlightElement(newCode);
      console.log('✅ Code block enhanced:', language);
    } catch (error) {
      console.error('❌ Error enhancing code block:', error);
    }
  });
}

// Copy functionality
export function copyCodeFromBlock(button) {
  const codeContainer = button.closest('.code-block');
  const codeElement = codeContainer.querySelector('code');
  const codeText = codeElement.textContent;

  navigator.clipboard.writeText(codeText)
    .then(() => {
      const originalText = button.textContent;
      button.textContent = 'تم النسخ!';
      button.classList.add('copied');

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
      }, 2000);
    })
    .catch((err) => {
      console.error('❌ Failed to copy code:', err);
      button.textContent = 'فشل النسخ';

      setTimeout(() => {
        button.textContent = 'نسخ';
      }, 2000);
    });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}