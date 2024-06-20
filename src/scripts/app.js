const register_form = document.getElementById("register_form");
const form_select = document.getElementById("form_select");

let getUserRegisteration = JSON.parse(localStorage.getItem("pixer_register"))
  ? JSON.parse(localStorage.getItem("pixer_register"))
  : [];

register_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const ism = register_form["userName"].value;
  const num = register_form["number"].value;
  const xizmatlar = form_select.value;
  const userInfo = {
    userName: ism,
    number: num,
    xizmatlar_option: xizmatlar,
  };

  getUserRegisteration.push(userInfo);
  localStorage.setItem("pixer_register", JSON.stringify(getUserRegisteration));
  
  register_form["userName"].value = "";
  register_form["number"].value = "";
  form_select.value = "";
  
    // Show toast notification
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Ma'lumot yuborildi";
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.parentNode.removeChild(toast);
        }, 500);
    }, 2500);
  // alert ("Ma'lumot yuborildi")
});

