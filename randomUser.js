const lodeUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUser(data.results))
};
lodeUser();

const displayUser = (users) => {
    const usersSection = document.getElementById('users-section');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('userDiv')
        userDiv.innerHTML = `
            <h1>Name: ${user.name.first} ${user.name.last} ${user.name.title}</h1>
            <h3>email: ${user.email}</h3>
            <h3>Country: ${user.location.country}</h3>
        `;
        usersSection.appendChild(userDiv)
    }
}