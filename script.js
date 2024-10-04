const users = [];

let currentUser = null;


function register() {

    const email = document.getElementById('regEmail').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const gender = document.getElementById('regGender').value;
    const role = document.getElementById('regRole').value;
    console.log("test", email)

    if (email && username && password && firstName && lastName && gender && role) {

        users.push({ email, username, password, firstName, lastName, gender, role });
        console.log("users", users)
        alert('Registration successful!');
        clearRegisterFields()

    } else {
        alert('Please fill in all fields.');
    }
    function clearRegisterFields() {
        document.getElementById('regEmail').value = '';
        document.getElementById('regUsername').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regFirstName').value = '';
        document.getElementById('regLastName').value = '';
        document.getElementById('regGender').value = '';
        document.getElementById('regRole').value = '';
    }
    

}
function login() {

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        alert('Login successful!');
        viewUserList();
    }
    else {
        alert('Invalid username or password.')
        hidelist()
}
}

function hidelist(){
    
}

function viewUserList() {
    const userList = document.getElementById('users');
    userList.innerHTML = ''; 

   
    users.forEach(user => {
        if (canViewUser(user.role)) { 
            const li = document.createElement('li'); 
            li.textContent = `${user.firstName} ${user.lastName} (${user.role})`; 
            userList.appendChild(li); 
        }
    });
    document.getElementById('userList').style.display = 'block';
}
function canViewUser(role) {
    if (currentUser.role === 'admin') {
        return true; 
    }
    if (currentUser.role === 'operations' && role !== 'admin') {
        return true; 
    }
    if (currentUser.role === 'sales' && role === 'sales') {
        return true;
    }
    return false; 
}
