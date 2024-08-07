function validateEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
    }

    function validateFields() {
        event.preventDefault(); // Evita o envio padrão do formulário
  
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
  
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
  
        let isValid = true;
  
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
  
        emailError.textContent = ""; // Limpa mensagens de erro anteriores
        passwordError.textContent = "";
  
        if (!email) {
          isValid = false;
          emailError.textContent = "Preencha o e-mail.";
        } else if (!validateEmail(email)) {
          isValid = false;
          emailError.textContent = "E-mail inválido. Verifique o formato.";
        }
  
        if (!password) {
          isValid = false;
          passwordError.textContent = "Preencha a senha.";
        }
  
        document.getElementById("recover-password-button").disabled = !isValid;
        document.getElementById("login-button").disabled = !isValid;
  
        return isValid; // Retorna o resultado da validação para uso potencial em manipulador de eventos (opcional)
      }