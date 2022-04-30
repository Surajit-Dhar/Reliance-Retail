var data = [
    {
        logo : "https://relianceretail.com/img/brands/reliance-fresh.png",
        heading : "India's largest chain of neighbourhood store"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-smart.png",
        heading : "Supermarket offering everything under one roof at superior value"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-smart-point.png",
        heading : "Neighbourhood Convenience Store"
    },
    {
        logo : "https://relianceretail.com/img/brands/larg/jiomart-logo.png",
        heading : "Online grocery store"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-digital.png",
        heading : "India's largest consumer electronics retail chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/jio-digital-life.jpg",
        heading : "India's largest mobility & communication retail chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-trends.png",
        heading : "India's largest fashion destination"
    },
    {
        logo : "https://relianceretail.com/img/brands/trends-woman-hp-logo.png",
        heading : "Women focused apparel store chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/trends-man-hp-logo.png",
        heading : "Men focused apparel store chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/trends-junior-hp-logo.png",
        heading : "Kids focused apparel store chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/trends-footwear-hp-logo.png",
        heading : "India's largest family footwear retail chain"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-project-eve.png",
        heading : "A premium experiential retail chain exclusively for women"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-jewels.png",
        heading : "India's leading jewellery speciality retail chain store"
    },
    {
        logo : "https://relianceretail.com/img/brands/ajio.png",
        heading : "curated online fashion store"
    },
    {
        logo : "https://relianceretail.com/img/brands/hamleys.png",
        heading : "India's finest toy shop in the world"
    },
    {
        logo : "https://relianceretail.com/img/brands/reliance-brands.png",
        heading : "Exponents of good living since 2007"
    }   
    ,
    {
        logo : "https://relianceretail.com/img/brands/reliance-brands.png",
        heading : "Exponents of good living since 2007"
    }       
]
data.map(function(elem, index){
var ind = index+1;
var divCard = document.createElement("div");
divCard.setAttribute("class", "card");
divCard.setAttribute("id", "c" + ind); 
console.log(divCard)   

var image = document.createElement("img");
image.setAttribute("src" , elem.logo);
image.setAttribute("height", "40%");
image.setAttribute("width", "55%");

var logo_txt = document.createElement("p");
logo_txt.setAttribute("class", "card-heading")
logo_txt.textContent = elem.heading;

var btn = document.createElement("button");
btn.innerHTML = "&#8594;";
btn.setAttribute("class", "btn-card")

divCard.append(image, logo_txt, btn);
document.querySelector("section").append(divCard);
// console.log(elem);
})
var left = 1;
var right = 5;
function show(){
    for(var i=left; i<right; i++){
        document.getElementById("c"+i).style.display = "inline-block";
    }
}
function leftMove(){       
    if(left < data.length-4 && right <= data.length){
        document.getElementById("c" + left).style.display = "none";            
        left+=1, right+=1;            
        for(var i=left; i<right; i++){
            document.getElementById("c"+i).style.display = "inline-block";
        }
    }
    else{
        return;
    }    
}   
console.log(left, right);
function rightMove(){   
    if(left >1 && right>5){
        console.log(right)
        document.getElementById("c" + right).style.display = "none";
        left-=1, right-=1;
        for(var i=left; i<right; i++){
            document.getElementById("c"+i).style.display = "inline-block";
        }           
    }
    else{
        return;
    }
}    

