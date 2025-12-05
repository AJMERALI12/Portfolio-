document.getElementById('year').textContent = new Date().getFullYear();

    function openProject(title, body){
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').textContent = body;
      document.getElementById('modal').style.display = 'flex';
    }
    document.getElementById('modalClose').addEventListener('click', ()=>{document.getElementById('modal').style.display='none'});
    document.getElementById('modal').addEventListener('click', (e)=>{if(e.target.id==='modal')document.getElementById('modal').style.display='none'})

    // resume download (example — replace link with your file)
    document.getElementById('ajmer resume.pdf').addEventListener('click', ()=>{
      const link = document.createElement('a');
      link.href = 'ajmer resume.pdf';
      link.download = 'ajmer resume.pdf';
      document.body.appendChild(link); link.click(); link.remove();
    });

    // contact form (front-end only)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name||!email||!message){document.getElementById('formMsg').textContent='Please fill all fields.'; return}
      // Simulate send (replace with actual endpoint)
      document.getElementById('formMsg').textContent = 'Message sent — thank you! (demo only)';
      form.reset();
    });
    document.getElementById('clearForm').addEventListener('click', ()=>{form.reset();document.getElementById('formMsg').textContent=''})

    // smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const href = a.getAttribute('href');
        if(href.length>1){
          e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
      });
    });







    const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const clearBtn = document.getElementById("clearForm");

// Load Data
let contacts = JSON.parse(localStorage.getItem("PortfolioContacts")) || [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !mobile || !message) {
        formMsg.innerText = "⚠️ Please fill all fields!";
        formMsg.style.color = "red";
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        formMsg.innerText = "⚠️ Mobile number must be 10 digits!";
        formMsg.style.color = "red";
        return;
    }

    let newEntry = { name, email, mobile, message, time: new Date().toLocaleString() };

    contacts.push(newEntry);

    localStorage.setItem("PortfolioContacts", JSON.stringify(contacts));

    formMsg.innerText = "✅ Message saved successfully!";
    formMsg.style.color = "green";

    form.reset();
});

// Clear Button
clearBtn.addEventListener("click", () => {
    form.reset();
    formMsg.innerText = "";
});

console.log("Stored Contacts:", contacts);



     


   