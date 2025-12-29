// interface User{
//     email: string,
//     name: string,
//     age: number,
//     id: number,
//     password: string
// }

// type updateProps = Pick<User,'name'|'age'|'email'>

// type updatedPropsOptional = Partial<updateProps>;
 
// function updateUser(updatedProps: updatedPropsOptional ){
//     //hit the database to update the user    
// }

// function sumOfage(user1: User, user2: User):number{
//     return user1.age+user2.age;
// }

// // console.log(sumOfage({name:"sahil",age:20},{name:"mike",age:35}));  


type User={
    name: string,
    age: number,
}

const usr: Readonly<User>={
    name: 'John',
    age: 21,
}
usr.age= 14; // fails as age is read only 