const users = [];

let currentUser = null;


function register() {

    const email = document.getElementById('regEmail').value = ("");
    const username = document.getElementById('regUsername').value = ("");
    const password = document.getElementById('regPassword').value = ("");
    const firstName = document.getElementById('regFirstName').value = ("");
    const lastName = document.getElementById('regLastName').value = ("");
    const gender = document.getElementById('regGender').value = ("");
    const role = document.getElementById('regRole').value = ("");


if (email && username && password && firstName && lastName && gender && role) {
  
    users.push({ email, username, password, firstName, lastName, gender, role });
    alert('Registration successful!'); 
    
} else {
    alert('Please fill in all fields.'); 
}

}
function login() {
   
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user; r
        alert('Login successful!'); 
        viewUserList(); 
        alert('Invalid username or password.'); 
}
}
