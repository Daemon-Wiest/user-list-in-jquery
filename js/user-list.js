const url ="http://localhost:8080/api/users/";
let newuser={
    id:0,
    username:"us",
    password:"us",
    firstname:"Normal",
    lastname:"User",
    phone:"555-555-5555",
    email:"default@null.com",
    isReviewer:false,
    isAdmin:false
}
let allUsers=[];
$().ready(()=>{
console.log("Jquery is ready!");
userList().done((users)=>{allUsers=users;display(allUsers);}).fail




/*$.ajax({
    method:"POST",
    url:url,
    data:JSON.stringify(newuser),
    contentType:'application/json'
})
.done((res)=>{
console.log(res);
})
.fail((err)=>{
    console.error(err)
})


$.getJSON(url)
        .done((users)=>{
            console.log(users);
        })
        .fail((err)=>{
            console.error(err)
        })*/
});
const display=(users)=>{
    let tbody=$("tbody");
    tbody.empty();
    for(let user of users){
        let tr =$("<tr></tr>")
        let tdId=$(`<td>${user.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${user.username}</td>`));
        let tdName=$(`<td>${user.firstname}${user.lastname}</td>`)
        tr.append(tdName);
        let tdReviewer=$(`<td>${user.isReviewer ? "yes":"no"}</td>`);
        tr.appent(tdReviewer);
        let tdAdmin=$(`<td>${user.isAdmin ? "yes":"no"}</td>`)
        tr.append(toAdmin);
        tbody.append(tr);
    }
}
