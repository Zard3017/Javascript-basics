let user_name;

document.getElementById("submitBtn").onclick=(function(){
    user_name = document.getElementById("myInput").value;
    console.log(user_name);
})