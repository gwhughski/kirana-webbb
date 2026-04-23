const fullMessage = [
  "buat kirana,u mending stop ngeluh deh.u tuh salah satu orang beruntung. yang bisa hidup di era i masih muda, dan bisa nyaksiin aurafull i yg begitu nonchalant.",
  "yagak?,yadongg,u beruntung si punya temen sekeren i.",
  "cz i keren,pinter,nonchalant,bisa apa aja,peduli,perhatian,yagak?,yadong."
];

const chatBox = document.getElementById('chatBox');
const finalOverlay = document.getElementById('finalOverlay');
let msgIndex = 0;

function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "flex flex-col items-end typing-bubble";
  typingDiv.innerHTML = `<div class="typing-indicator">⋯</div>`;
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typingDiv;
}

function showMessage(text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "flex flex-col items-end";
  msgDiv.innerHTML = `
    <div class="chat-bubble from-me">
      <div class="message-content">
        <span>${text}</span>
        <span class="timestamp">1:${53 + msgIndex} am</span>
      </div>
    </div>
  `;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function nextMessage() {
  if (msgIndex >= fullMessage.length) {
    setTimeout(showFinalOverlay, 4000);
    return;
  }

  const typingDiv = showTypingIndicator();

  setTimeout(() => {
    typingDiv.remove();
    showMessage(fullMessage[msgIndex]);
    msgIndex++;
    setTimeout(nextMessage, 1900);
  }, 2900);
}

function showFinalOverlay() {
  finalOverlay.classList.remove("pointer-events-none");
  finalOverlay.classList.add("opacity-100");
}

window.onload = () => {
  setTimeout(nextMessage, 1500);
};
