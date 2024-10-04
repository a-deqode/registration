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
