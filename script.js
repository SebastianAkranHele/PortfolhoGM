// JavaScript para o menu hamburguer
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-links').classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('nav-links').classList.remove('active');
    });
});

// Inicializar EmailJS
(function() {
    emailjs.init("9gcyy6iP8sB6lYb2f"); // <- tua Public Key
})();

// Captura o formulário
window.onload = function() {
    const form = document.querySelector('.contact-form');
    const statusMsg = document.getElementById("form-status");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        statusMsg.textContent = "Enviando mensagem... ⏳";
        statusMsg.style.color = "blue";

        // Enviar para TI (notificação interna)
        emailjs.sendForm('service_yyh7pwq', 'template_y2f9bfn', this)
        .then(function() {
            // Depois de enviado para ti, envia a resposta automática
            return emailjs.sendForm('service_yyh7pwq', 'template_6td4jvt', form);
        })
        .then(function() {
            statusMsg.textContent = "Mensagem enviada com sucesso! ✅";
            statusMsg.style.color = "green";
            form.reset();
        })
        .catch(function(error) {
            statusMsg.textContent = "Erro ao enviar ❌, tente novamente.";
            statusMsg.style.color = "red";
            console.error("Erro:", error);
        });
    });
};
