1./*	Understanding Symbols:
	•	What is the purpose of using Symbol in JavaScript, and how is it used in the users object?
	•	How can you access the value associated with the mysymb symbol in the users object?
	2.	Object Methods:
	•	How can you add a method to an existing object in JavaScript? Provide an example using the users object.
	•	What is the difference between the methods greeting and grretings in the users object?
	3.	Object Creation and Properties:
	•	How do you create an object using the new Object() syntax, and what are the alternatives?
	•	How can you destructure properties from an object? Provide an example using the tinderuser object.
	4.	Object Destructuring:
	•	Why does the destructuring syntax const {location:{name}} = tinderuser; produce an error, and how can it be corrected?
	5.	Function Parameters and Object Destructuring:
	•	How can you use object destructuring in function parameters? Provide an example using a function that takes the tinderuser object as an argument.
	6.	Object Merging:
	•	How can you merge two objects in JavaScript? Provide an example using facebookUser and tinderuser.
	7.	Array of Objects:
	•	How can you access properties of objects within an array? Provide an example using the arrayObject array.
	8.	Rest Parameters:
	•	How can you use the rest parameter syntax in a function to accept an indefinite number of arguments? Provide an example.
	9.	Template Literals:
	•	How can you use template literals to create a string that includes object properties? Provide an example using the tinderuser object.
	10.	Arrow Functions:
	•	What is the syntax of an arrow function in JavaScript? Provide an example that adds two numbers.
	•	How can you create an arrow function that returns an object? Provide an example.
	11.	Immediately Invoked Function Expressions (IIFE):
	•	What is an IIFE, and why would you use one? Provide an example.
	12.	Function Expressions vs. Arrow Functions:
	•	What are the differences between a regular function expression and an arrow function? Provide examples of both .*/


    let mysymb =  Symbol("key1")
    let user = {
        username:"sudip",
        location:"bhandara",
        [mysymb]:"keyyy",
    
    }

    // console.log(`${user[mysymb]}`)


  user.func = function speak (){
    //  console.log(`Hello My Name Is  ${this.username}`)
  }

//   console.log(user.func());



  let user1 = new Object;
  user1.namelakjdkjlkjg = "hellll"
  user1.age = {
    name:"sudip",
  }
  user1.age.age = undefined
// console.log(user1["name"])
// function printname({age,namelakjdkjlkjg}){
//     console.log(age,namelakjdkjlkjg)
// }
// printname(user1)


// let { namelakjdkjlkjg:name,age}  = user1
// console.log (age , name)


let {age:{name:aaaa,age=44}}= user1
// console.log(aaaa,age)


let objectaray ={  ...user, ...user1};
// console.log(objectaray);

let arrayofobj = Object.assign({},user,user1)
// console.log(arrayofobj)

let arrayofobject =[
    {username:"sudip",
        location:"bhandara"

    },
    {
        username:"sudip",
        location:"bhdara"
    },
    {
        username:"sudip",
        location:"bhandara"
    }
]

// console.log(arrayofobject[1].location)

 function usingRestParamater(...num){
return num;
}

let userbucketlist = usingRestParamater(3,3,4,5,3)


let arrowww = (a,b)=>{return a+b;}
let arrrr =(s,a)=>(s+a)
// console.log(arrowww(3,3));
// console.log(arrrr(4,4));

(function hey(a,b){
    // console.log(a+b)
})(4,3);


let month = 1


// switch (month) {
//     case 1:
//         console.log("its jan");
//         break;

//         case 2:
//             console.log("its feb");
//             break;

//             case 4:
//                 console.log("its aprril");
//                 break;


//             case 3:
//                     console.log("its march");
//                     break;

//     default:
//         console.log('its deffault')
//         break;
// }




//-__________________________------________________


// truthy value are ("false", "0"," ", {},[])
// falsy value are (false,0,-0,BigInt 0n, undefined,null,NaN)

//to check wheter the given array or object is empty or not following ways of checking is done

const userarray =[0,4]
const userprop = {
    a:"ss"
}

// if(userarray.length===0){
//     // console.log('array is empty')
// }
// else(
//     // console.log("good to go with array")
// )

// if (Object.keys(userprop).length===0){
//     // console.log("object is empty")
// }
// else(
//     // console.log("good to go with obj")
// )

// nulish coalishing operator

const  nullishorwhot= null ?? 33
const  nullishorwhott= undefined ?? 33
const  nullishorwhottt= undefined ?? null ?? 44



// console.log(nullishorwhot)
// console.log(nullishorwhott)
// console.log(nullishorwhottt)


//terniary operator 

const a= 44
// a >= 33 ? console.log("its graeater"):console.log("its lesser")

// for loop


// for (let index = 0; index < 10; index++) {
//     console.log(index)
    
// }
// for (let index = 1; index <= 10; index++) {
//     console.log("multiplication of",index)
//     for (let i = 1; i <= 10; i++) {
        
//         console.log(`the value of ${index} * ${i} = ${index*i}`)
  
    
//     }
    
    
// }


// for (let index = 0; index < userbucketlist.length; index++) {
//     const element = userbucketlist[index];
//     console.log(element)
    
// }


const strrri = "sudip"
const Myarray = [1,2,4,5,3]
const User = {
    username:"sudip",
    age:45
}
const MyMap = new Map;
MyMap.set(  "IN","india",)
MyMap.set(  "IN","india",)
MyMap.set("usa", "united state of America")

//for of loop is not used for object
for (const [key,val] of MyMap) {
    // console.log(val)
    
}



for (const key in User) {
    // console.log(key)
    // console.log(User[key])
    
}

for (const key in Myarray) {
//    console.log(key)
}

Myarray.forEach((key,index,array) => {
    // console.log(key,index,array)
    
});

const myarray =[
    {username:"sudip",
        age:45},
    {username:"sudip",
        age:45},
    {username:"sudip",
        age:45}

]

myarray.forEach((val)=>{
    // console.log(val.username)
})
//filter
// const returnofMYarray = Myarray.foreach((val)=>return val;) with foreach return is not possible so filter is used
const returnofMYarray = Myarray.filter((val)=>{return val>3} )
console.log(returnofMYarray)
const mynewNum =[]

Myarray.forEach((val)=>{
    if(val>3){
         mynewNum.push (val)
    }
})




const books = [
    {
        genre: "Science Fiction",
        publish: 2020,
        edition: 2022,
        title: "Journey to the Unknown"
    },
    {
        genre: "Fantasy",
        publish: 2018,
        edition: 2021,
        title: "Mystic Realms"
    },
    {
        genre: "Science Fiction",
        publish: 2015,
        edition: 2019,
        title: "The Quantum Enigma"
    },
    {
        genre: "Fantasy",
        publish: 2017,
        edition: 2020,
        title: "Realm of Shadows"
    },
    {
        genre: "Mystery",
        publish: 2016,
        edition: 2018,
        title: "Whispering Shadows"
    },
    {
        genre: "Thriller",
        publish: 2019,
        edition: 2023,
        title: "Edge of Fear"
    },
    {
        genre: "Mystery",
        publish: 2010,
        edition: 2015,
        title: "The Hidden Truth"
    },
    {
        genre: "Thriller",
        publish: 2013,
        edition: 2017,
        title: "Silent Night"
    },
    {
        genre: "Romance",
        publish: 2021,
        edition: 2023,
        title: "Love in Bloom"
    },
    {
        genre: "Romance",
        publish: 2014,
        edition: 2020,
        title: "A Summer to Remember"
    }
];

const filteredbooks = books.filter((val)=> {return val.genre === "Fantasy" && val.publish >= 1999})
console.log(filteredbooks)


const filterarray = Myarray.map((val)=>(val+1))
console.log(filterarray)


const reducearray = Myarray.reduce((acc, currentvalue)=>(acc+currentvalue),1)
console.log(reducearray)

const shoppingCart = [
    {
        itemName: "Apple",
        price: 0.99
    },
    {
        itemName: "Banana",
        price: 0.59
    },
    {
        itemName: "Milk",
        price: 2.99
    },
    {
        itemName: "Bread",
        price: 2.49
    },
    {
        itemName: "Eggs",
        price: 3.19
    },
    {
        itemName: "Cheese",
        price: 4.79
    },
    {
        itemName: "Chicken Breast",
        price: 8.99
    },
    {
        itemName: "Orange Juice",
        price: 3.99
    },
    {
        itemName: "Coffee",
        price: 6.49
    },
    {
        itemName: "Chocolate Bar",
        price: 1.29
    }
];

const totalprice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(Math.round(totalprice) )