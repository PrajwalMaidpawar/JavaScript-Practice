const passwordBox = document.getElementById("password");
    const tabs = document.querySelectorAll(".tab");
    let passwordType = "strong";

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        passwordType = tab.dataset.type;
        passwordBox.textContent = 'Click "Generate" to create a password';
      });
    });

    function generatePassword() {
      let password = "";
      if (passwordType === "strong") {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?";
        for (let i = 0; i < 16; i++) {
          password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      } else if (passwordType === "weak") {
        const chars = "abcdefghijklmnopqrstuvwxyz123456";
        for (let i = 0; i < 6; i++) {
          password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      } else if (passwordType === "funny") {
        const funny = [
          "P@ssw0rdLOL",
          "ilovetacos123",
          "MonkeyBanana007",
          "NotAPassword!",
          "password1234haha",
          "letmeinplz",
          "12345Nope!",
          "youshallnotpass!",
          "IamBatman69",
          "ToiletWiFi2024"
        ];
        password = funny[Math.floor(Math.random() * funny.length)];
      }
      passwordBox.textContent = password;
    }

    function copyPassword() {
      const text = passwordBox.textContent;
      if (text && !text.includes("Click")) {
        navigator.clipboard.writeText(text).then(() => {
          alert("Password copied to clipboard!");
        });
      }
    }