const chatButton = document.querySelector('[href="https://wa.me/941573750"]');
    const chatWindow = document.getElementById('chat');
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    chatButton.addEventListener('click', (event) => {
        event.preventDefault();
        chatWindow.classList.toggle('hidden');
    });

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messageElement.className = 'bg-green-200 p-2 rounded-lg mb-2';
            messagesContainer.appendChild(messageElement);
            messageInput.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplaza hacia abajo
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });