//  for each loop for the iterating into the array 

const coding = ["javascript","java","python","c++"]

coding.forEach(function(val){
    console.log(val);
})

// same thing printing using the arraow function 

coding.forEach((val)=>{
console.log(val);
})

























// object inside the array (we are learning the how to iteraate inside the array of object to access the value of the 
// object inside the array)

const mycoding = [
    {
        languageName : "javascript",
        languagefileName: "js"
    },
    {
        languageName : "java",
        languagefileName: "java"
    },
    {
        languageName : "python",
        languagefileName: "py"
    },
]
// mycoding.forEach((items)=>{
//     console.log(items.languageName)
// })

// mycoding.forEach((vals)=>{
//     console.log(vals.languagefileName)
// })