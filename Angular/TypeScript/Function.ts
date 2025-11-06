
// let userDetails =(name:string,age:number,city:string) =>{
      
// }

// userDetails("Sharvari",24,"Karad")

let userName =(): number | string =>
{
    return 12
}
console.log(userName());

interface userObj{
    readonly name:string,
    age:number,
    phone:number,
    city:string,
    hobbies ?:string  //optional part question mark
}

let user: userObj ={
    name:"Shivu",
    age:21,
    phone:93934589575,
    city:"pune"
}


console.log(user);
