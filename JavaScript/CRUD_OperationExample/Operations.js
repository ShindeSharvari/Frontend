let allUsers = [
    {
        username: 'Rakhi',
        age: 25,
        city: 'Gadchiroli'
    },
    {
        username: 'Sharvari',
        age: 25,
        city: 'Karad'
    },
    {
        username: 'Ganesh',
        age: 25,
        city: 'Latur'
    },
]


// ------ Create Users Here ------
let createBtn = document.querySelector('#createBtn')
createBtn.addEventListener('click', () => {
    let name = document.querySelector('#crtName').value
    let age = document.querySelector('#crtAge').value
    let city = document.querySelector('#crtCity').value


    let newObj = {
        username: name,
        age: age,
        city: city
    }


    allUsers.push(newObj)
    console.log(allUsers)
    showData()
})


// ------ Show All Users Here ------
function showData() {
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    allUsers.forEach((ele, index) => {
        tbody.innerHTML += `
    <tr>
        <td>${ele.username}</td>
        <td>${ele.age}</td>
        <td>${ele.city}</td>
        <td class="actionRow">
            <button class="actionBtn" onclick="deleteRow(${index})">Del</button>
            <button class="actionBtn" onclick="editRow(${index})">Edit</button>
        </td>
    </tr>
    `
    })
}


showData()


// ------ Delete User Here ------
function deleteRow(index) {
    allUsers.splice(index, 1)
    showData()
}


// ------ Send User Data For Edit Here ------
let currentIndex;
function editRow(index) {
    currentIndex = index;
    document.querySelector('#updateName').value = allUsers[index].username
    document.querySelector('#updateAge').value = allUsers[index].age
    document.querySelector('#updateCity').value = allUsers[index].city
}


// ------ Update User Here ------
let updateBtn = document.querySelector("#updateBtn")
updateBtn.addEventListener('click', () => {
    let name = document.querySelector('#updateName').value
    let age = document.querySelector('#updateAge').value
    let city = document.querySelector('#updateCity').value


    let updatedObj = {
        username: name,
        age: age,
        city: city
    }
    allUsers.splice(currentIndex, 1, updatedObj)
    showData()
})
