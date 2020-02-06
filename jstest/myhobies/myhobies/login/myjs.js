var login = {
    account : document.getElementById("account"),
    password : document.getElementById("password"),
    button : document.getElementsByTagName("button")[0],
    login : function (){
        if(this.account.value == "" || this.password.value == ""){
            alert("请输入账号或密码");
        }else{
            if(this.account.value == "ming"){
                if(this.password.value == "123"){
                    alert("登陆成功");
                }else{
                    alert("密码错误");
                }
            }else{
                alert("账号错误");
            }
        }

    }                
}
alert(login.button);
login.button.onclick = function (){
login.login();
return false;
}