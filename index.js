const osmosis = require("osmosis");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())


const allNews = [];

osmosis 
.get("https://www.mbl.is/frettir/")
.find([".teaser"])
.set({
    "photo": ".mynd img@src", 
    "text": ".texti",
    "title": "h1"
})
// .find("h1")
// .set("title")
// .find(".mynd")
// .set("photo")
.data((l)=>{
    allNews.push(l);
    console.log(l);
})
.log(console.log)
.error(console.log)
.debug(console.log)

app.get('/', (req, res)=> {
    res.send(allNews)
})

// Dv.is

osmosis
.get("https://www.dv.is/")
.find([".topbox"])
.set({
    "photo": "figure@style",
    "title": "h2"  
})
.data((k)=>{
    k.photo = k.photo.slice(21, -1);
    allNews.push(k);
    console.log(k);
})
.log(console.log)
.error(console.log)
.debug(console.log)

app.listen(3000)

