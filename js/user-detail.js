let user=null;
$().ready(()=>{
userDetail().done((user)=>{singleUser=user;display(singleUser)})


});
const display = (user)=>{$("#pid").text(user.id);$("#pusername").text(user.username);};