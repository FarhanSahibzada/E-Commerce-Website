// variables

let container = document.getElementById("main");
let father = document.getElementById("father");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let num = 0;
let shop = document.getElementById("shop");
let mm = document.getElementById("mm");
let icon = document.getElementById("shopicon");
let shopnum = 0;
let cross = document.getElementById("cross");
let ul = document.getElementById("ul");

// objects
let nike = [
    {
        img: {
            img1: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc7cfec8-8653-43e9-9c94-c37e3ec93ae6/invincible-3-blueprint-mens-road-running-shoes-6MqQ72.png",
            img2:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5b59e17-f478-498a-84ac-765ca94d5a49/air-jordan-1-low-mens-shoes-0LXhbn.png",
            img3:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d970ad2c-272d-4ceb-a1fc-4f499e81a0c7/air-jordan-1-low-g-golf-shoes-ZR2b5R.png",
            img4:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e407c31-e9f7-4e93-a831-7913d63596e4/alphafly-3-mens-road-racing-shoes-5gZBgL.png",
        },
        price: {
            price1: "$180",
            price2 : "$115",
            price3 : "$150",
            price4 : "$285",
        }, name: {
            name1: "Nike J1 Low",
            name2: "Air Jordan Low",
            name3: "Air Jordan G",
            name4: "Nike Alphafly",
        },
        color: {
            color1: "colour : white",
            color2 :"colour : Black and green",
            color3 :"colour : Purple and white",
            color3 :"colour : whitesmoke"
        }
    }
];
let adidas = [
    {
        img: {
            img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/58a21976865c451cad2d23abb9a84228_9366/Racer_TR23_Shoes_White_ID2718_01_standard.jpg",
            img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50f0fd32efde4e8a9f83af4700d48d50_9366/TERREX_Free_Hiker_GORE-TEX_2.0_Hiking_Shoes_Black_HQ8383_06_standard.jpg"
        },
        price: {
            price1: "$80",
            price2: "$220",
        }, name: {
            name1: "Adidas 7i",
            name2: "Adidas Hiker",
        },
        color: {
            color1: "colour : white",
            color2: "colour : Black"
        }
    }
];
let puma = [
    {
        img: {
            img1: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308043/01/sv01/fnd/PNA/fmt/png/BMW-M-Motorsport-SPEEDFUSION-2.0-Men's-Sneakers",
            img2: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308043/02/sv01/fnd/PNA/fmt/png/BMW-M-Motorsport-SPEEDFUSION-2.0-Men's-Sneakers"

        },
        price: {
            price1: "$100",
            price2: "$100"

        }, name: {
            name1: "Puma A1",
            name2: "BMW fusion 2.O"

        },
        color: {
            color1: "colour : Black",
            name2: "BMW fusion 2.O"

        }
    }
];
let reebok = [
    {
        img: {
            img1: "https://reebok.bynder.com/transform/012816b9-b440-431a-b051-5f6340735f54/100205029_SLC_eCom-tif?io=transform:fit,width:400&quality=100",
        },
        price: {
            price1: "$120"
        }, name: {
            name1: "Reebok 91",
        },
        color: {
            color1: "colour : Black",
        }
    }
];
let newbalance = [
    {
        img: {
            img1: "https://nb.scene7.com/is/image/NB/mcruzab3_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
            img2: "https://reebok.bynder.com/transform/dff13c52-c9e0-46ae-a8ca-c7542c8109a6/100202416_SLC_eCom-tif?io=transform:fit,width:400&quality=100"
        },
        price: {
            price1: "$90",
            price2: "$120"
        }, name: {
            name1: "NEW balance k1",
            name2: "94 Low shoe "
        },
        color: {
            color1: "colour : Black",
            color2: "colour : Mixer blue",
        }
    }
];


// home images fumction
setInterval(sec, 500);
function sec() {
    num++;
    if (num >= 0) {
        container.className = "container flex items-center overflow-hidden bg-base-300";
        father.classList.remove("background-gradient3")
        father.style.backgroundColor = "yellow";
        text1.style.color = "black";
        text2.style.color = "black";
    }
    if (num > 5) {
        container.className = "container flex items-center overflow-hidden bg-info";
        father.classList.add("background-gradient1");
        text1.style.color = "white";
        text2.style.color = "white";

    }
    if (num > 10) {
        container.className = "container flex items-center overflow-hidden bg-warning";
        father.classList.remove("background-gradient1");
        father.classList.add("background-gradient2");
        text1.style.color = "black";
        text2.style.color = "black";
    }
    if (num > 15) {
        container.className = "container flex items-center overflow-hidden bg-sky-500/50";
        father.classList.remove("background-gradient2");
        father.classList.add("background-gradient3");
        text1.style.color = "white";
        text2.style.color = "white";
    }
    if (num > 20) {
        num = 0;

    }
}
// all shoes location function
function go() {
    window.location.href = "all.html";
}

// serch bar function

let list = document.getElementById("list");
let lis = document.querySelectorAll("#il");
for (let i = 0; i < lis.length; i++) {
    var item = lis[i];
    item.style.display = "none";
}
function search() {
    let input = document.getElementById("input").value.toLowerCase();

    for (let i = 0; i < lis.length; i++) {
        let item = lis[i];
        let text = item.textContent.toLowerCase();
        if (input == "") {
            list.style.display = "none";
        } else {
            list.style.display = "block"
            list.style.padding ="10px";
        }
        if (text.includes(input)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    }
}


// buy function

function element() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = nike[0].img.img1;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = nike[0].name.name1;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = nike[0].price.price1;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = nike[0].color.color1;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(tn1);

}
function element1() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img2");
    imgss.src = adidas[0].img.img1;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = adidas[0].name.name1;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = adidas[0].price.price1;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = adidas[0].color.color1;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(tn1);
}
function element2() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = puma[0].img.img1;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = puma[0].name.name1;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = puma[0].price.price1;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = puma[0].color.color1;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(tn1);
}
function element3() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img6");
    imgss.src = reebok[0].img.img1;
    let div2 = document.createElement("div");
    div2.classList.add("div5")
    let p1 = document.createElement("p");
    p1.innerHTML = reebok[0].name.name1;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = reebok[0].price.price1;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = reebok[0].color.color1;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(tn1);
}
function element4() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = newbalance[0].img.img1;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = newbalance[0].name.name1;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = newbalance[0].price.price1;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = newbalance[0].color.color1;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(tn1);
}
function element5() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = nike[0].img.img2;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = nike[0].name.name2;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = nike[0].price.price2;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = nike[0].color.color2;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
function element6() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = nike[0].img.img3;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = nike[0].name.name3;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = nike[0].price.price3;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = nike[0].color.color3;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
function element7() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = nike[0].img.img4;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = nike[0].name.name4;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = nike[0].price.price4;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = nike[0].color.color4;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
function element8() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = adidas[0].img.img2;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = adidas[0].name.name2;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = adidas[0].price.price2;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = adidas[0].color.color2;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
function element9() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img6");
    imgss.src = newbalance[0].img.img2;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = newbalance[0].name.name2;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = newbalance[0].price.price2;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = newbalance[0].color.color2;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
function element10() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = puma[0].img.img2;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = puma[0].name.name2;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = puma[0].price.price2;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = puma[0].color.color2;
    let tn1 = document.createElement("button");
    tn1.innerHTML = "\u00d7";
    tn1.classList.add("b1")
    let sp = document.createElement("span");
    sp.innerHTML = `<div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div>`;
    ul.appendChild(li);
    li.appendChild(div1);
    div1.appendChild(imgss);
    div1.appendChild(div2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div1.appendChild(sp);
    div1.appendChild(tn1);
}
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("b1")) {
        e.target.parentElement.parentElement.remove();
        shopnum--;
    }
})

document.addEventListener("click", function (e) {
    if (e.target.id == "buy1") {
        shopnum++
        element();
    } else if (e.target.id == "buy2") {
        shopnum++
        element1();
    } else if (e.target.id == "buy3") {
        shopnum++
        element2();
    } else if (e.target.id == "buy4") {
        shopnum++
        element3();
    } else if (e.target.id == "buy5") {
        shopnum++
        element4();
    } else if (e.target.id == "buy6") {
        shopnum++
        element5();
    }
    else if (e.target.id == "buy7") {
        shopnum++
        element6();
    }
    else if (e.target.id == "buy8") {
        shopnum++
        element7();
    }
    else if (e.target.id == "buy9") {
        shopnum++
        element8();
    }
    else if (e.target.id == "buy10") {
        shopnum++
        element9();
    } else if (e.target.id == "buy11") {
        shopnum++
        element10();
    }

    shop.innerHTML = shopnum;
    mm.innerHTML = "(" + shopnum + ")";
});

cross.addEventListener("click", () => {
    document.getElementById("my-drawer-4").checked = false;
});
