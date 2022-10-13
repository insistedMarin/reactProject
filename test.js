const user_list=[{
    username:"wangyang",
    password:"123456"
}]

   var user_name = "wangyang";
    var password = 123456;

// console.log(user_list.map().find(res=>{res.username==user_name}).password===password)
user_list.find((res)=>{return res.username===user_name}).password==password