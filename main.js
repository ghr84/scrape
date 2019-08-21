fetch("http://localhost:3000")
.then((res)=>{
    console.log(res)
    return res.json()
})
.then((json)=>{
    const myDiv = document.querySelector(".main");
    console.log(json);

    for(let i = 0; i < json.length; i++) {

        myDiv.innerHTML +=

        `<img src="${json[i].photo}"/>
         <p>${json[i].title}</p>
        `
    }
})