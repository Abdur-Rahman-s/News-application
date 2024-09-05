

// let userList = document.createElement('ul');

// fetch('https://jsonplaceholder.typicode.com/users').
//       then(response => response.json())
//       .then(show => {
//             show.forEach(element => {
//                   let li = document.createElement('li');
//                   li.textContent = element.email ;
//                   userList.appendChild(li)
//             });
//       })
//       .catch(error => console.error(error));
//       document.body.appendChild(userList)



// let p = document.querySelector('p') ;
// let userForm = document.getElementsByClassName('user-form')[0];
// let input = document.querySelector('#serch-box');
// let button  = document.querySelector('serchBtn');

// userForm.addEventListener('submit' , (event)=> {
//       event.preventDefault();
//       let name = input.value
//       fetch('https://jsonplaceholder.typicode.com/users' , {
//             method : 'POST' ,  
//             headers : {
//                   'content-type' : 'application/json'
//             },
//             body : JSON.stringify({ 
//                   name : name
//             })
//       })
//             .then(response => response.json())
//             .then(deta => {p.textContent = `user ${deta.name} added succesfully !` 
//             input.value  = " "})
//             .catch(error => console.error(error))
// })



// let currentPage = 0 ;
// let userList = document.getElementById('user-list');
// let input = document.getElementById('search')
// function loadUser(page = 1)  {
//       fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
//       .then(response => response.json())
//       .then(deta => {
//             deta.forEach(element => {
//                   let li = document.createElement('li')
//                   li.textContent = element.email;
//                   userList.appendChild(li)
//             });
//       })
//       .catch(error => console.error(error))
// };

// document.getElementById('next-page').addEventListener('click' , ()=> {
//       currentPage++ ;
//       loadUser(currentPage);
// });

// input.addEventListener('input' , (event)=> {
//       let serchItem = event.target.value;
//       let item =document.querySelectorAll('#user-list li');
//       item.forEach(elem => {
//             if (elem.textContent.toLocaleLowerCase().includes(serchItem)) {
//                   elem.style.display = 'block'
//             }else {
//                   elem.style.display = 'none';
//             }
//       })
// })


async function fetchuserDeta()  {
      try {
            let response = await fetch(`user.json`);
            let deta = await response.json();
            let user = deta.results[0]
            
            let userDeta =  `      
            <p>${user.name.first} ${user.name.last} ${user.name.title} </p>
            <p>${user.email}</p>
            <p>${user.location.street.number}</p>
            <p>${user.location.city}</p>
            <p>${user.location.country}</p>
            <p>${user.location.state}</p>`;
      
            let userInfo = document.querySelector('.userInfo');
            userInfo.innerHTML = userDeta ;
      }catch(error) {
            console.error('deta is not found' , error)
      }
      
}

fetchuserDeta()
