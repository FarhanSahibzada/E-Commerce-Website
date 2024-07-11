// variables

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
            img2: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5b59e17-f478-498a-84ac-765ca94d5a49/air-jordan-1-low-mens-shoes-0LXhbn.png",
            img3: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d970ad2c-272d-4ceb-a1fc-4f499e81a0c7/air-jordan-1-low-g-golf-shoes-ZR2b5R.png",
            img4: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e407c31-e9f7-4e93-a831-7913d63596e4/alphafly-3-mens-road-racing-shoes-5gZBgL.png",
            img5: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp.png",
            //   women shoes here
            img6: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c42ef8a-21b9-46f4-941c-b2e3b68a8349/air-jordan-1-low-se-womens-shoes-6TzcTL.png",
            img7: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0df1804-be60-46e0-ac96-2abb4535aa9e/air-jordan-1-low-og-black-gorge-green-womens-shoes-cdgt2t.png",
        },

        category: {
            category1: "men",
            category2: "women",
        },
        price: {
            price1: "$179.99",
            price2: "$114.99",
            price3: "$149.99",
            price4: "$284.99",
            price5: "$249.99",
            price6: "$124.99",
            price7: "$139.99",
        }, name: {
            name1: "Nike J1 Low",
            name2: "Air Jordan Low",
            name3: "Air Jordan G",
            name4: "Nike Alphafly",
            name5: "Nike NORIFY",
            name6: "Air Jordan 1 Low Se",
            name7: "Air Jordan 1 Low OG",
        },
        color: {
            color1: "colour : white",
            color2: "colour : Black and green",
            color3: "colour : Purple and white",
            color4: "colour : whitesmoke",
            color5: "colour : whitesmoke",
            color6: "colour : white",
            color7: "colour : Gorge Green"
        }
    }
];
let adidas = [
    {
        img: {
            img1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/58a21976865c451cad2d23abb9a84228_9366/Racer_TR23_Shoes_White_ID2718_01_standard.jpg",
            img2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50f0fd32efde4e8a9f83af4700d48d50_9366/TERREX_Free_Hiker_GORE-TEX_2.0_Hiking_Shoes_Black_HQ8383_06_standard.jpg",
            img3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5da422a00254891b574651b7f964fe2_9366/Duramo_Speed_Shoes_Black_IE4036_01_standard.jpg",
            // womaen start
            img4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cd94de8858c04741853150b94e864333_9366/Kaptir_3.0_Shoes_Black_JI1246_01_standard.jpg"

        },
        category: {
            category1: "men",
            category2: "women",
        },
        price: {
            price1: "$79.99",
            price2: "$219.99",
            price3: "$89.99",
            price4: "$89.99",

        }, name: {
            name1: "Adidas 7i",
            name2: "Adidas Hiker",
            name3: "Druamo Speed Shoes",
            name4: "Kaptir 3.0 Shoes",
        },
        color: {
            color1: "colour : white",
            color2: "colour : Black",
            color3: "colour : Black",
            color4: "colour : Core Black and Better Scarlet",
        }
    }
];
let puma = [
    {
        img: {
            img1: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308043/01/sv01/fnd/PNA/fmt/png/BMW-M-Motorsport-SPEEDFUSION-2.0-Men's-Sneakers",
            img2: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/308043/02/sv01/fnd/PNA/fmt/png/BMW-M-Motorsport-SPEEDFUSION-2.0-Men's-Sneakers",
            // women start
            img3: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/369155/04/sv01/fnd/PNA/fmt/png/Cali-Women's-Sneakers",
            img4: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/399028/01/sv01/fnd/PNA/fmt/png/Easy-Rider-Vintage-Sneakers",
        },
        category: {
            category1: "men",
            category2: "women",
        },
        price: {
            price1: "$99.99",
            price2: "$99.99",
            price3: "$79.99",
            price4: "$89.99",

        }, name: {
            name1: "Puma A1",
            name2: "BMW fusion 2.O",
            name3: "Cali Women Sneaker",
            name4: "Easy Rider Vintage",

        },
        color: {
            color1: "colour : Black",
            color2: "colour : white ",
            color3: "colour : Black and White ",
            color4: "colour : Red",

        }
    }
];
let reebok = [
    {
        img: {
            img1: "https://reebok.bynder.com/transform/012816b9-b440-431a-b051-5f6340735f54/100205029_SLC_eCom-tif?io=transform:fit,width:400&quality=100",
            img2: "https://reebok.bynder.com/transform/89d3ec5c-fe5a-4dbb-8f4f-c6d1c2b4d76f/100208143_SLC_eCom-tif?io=transform:fit,width:400&quality=100",
        },
        category: {
            category1: "men",
            category2: "women",
        },
        price: {
            price1: "$119.99",
            price2: "$84.99"
        }, name: {
            name1: "Reebok 91",
            name2: "Club C Revenge",
        },
        color: {
            color1: "colour : Black",
            color2: "colour : white and Moonstone",
        }
    }
];
let newbalance = [
    {
        img: {
            img1: "https://nb.scene7.com/is/image/NB/mcruzab3_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
            img2: "https://reebok.bynder.com/transform/dff13c52-c9e0-46ae-a8ca-c7542c8109a6/100202416_SLC_eCom-tif?io=transform:fit,width:400&quality=100",
            img3: "https://nb.scene7.com/is/image/NB/u9060bpo_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
            img4: "https://nb.scene7.com/is/image/NB/bb480lta_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
            img5: "https://nb.scene7.com/is/image/NB/wxm100w2_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
            img6: "https://nb.scene7.com/is/image/NB/wxmtrlm2_nb_03_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
        },
        category: {
            category1: "men",
            category2: "women",
        },
        price: {
            price1: "$89.99",
            price2: "$119.99",
            price3: "$149.99",
            price4: "$89.99",
            price5: "$109.99",
            price6: "$119.99",
        }, name: {
            name1: "NEW balance k1",
            name2: "94 Low shoe ",
            name3: "9060",
            name4: "Unisex Lifestyle",
            name5: "FuelCell Trainer v2",
            name6: "Minimus TR v2",
        },
        color: {
            color1: "colour : Black",
            color2: "colour : Mixer blue",
            color3: "colour : Blue Oasis",
            color4: "colour : White and blue agate and black",
            color5: "colour : White with ice blue",
            color6: "colour : Phantom and Black",
        }
    }
];


// serch bar function

let list = document.getElementById("list");
let lis = document.querySelectorAll(".il");
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
            list.style.padding = "10px";
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
function element11() {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    div1.classList.add("div1");
    let imgss = document.createElement("img");
    imgss.classList.add("img3");
    imgss.src = nike[0].img.img5;
    let div2 = document.createElement("div");
    div2.classList.add("div6")
    let p1 = document.createElement("p");
    p1.innerHTML = nike[0].name.name5;
    p1.classList.add("p1")
    let p2 = document.createElement("p");
    p2.innerHTML = nike[0].price.price5;
    p2.classList.add("p2")
    let p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.innerHTML = nike[0].color.color5;
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
function element13() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img2" src="${adidas[0].img.img3}">
            <div class="div6">
                <p class="p1">${adidas[0].name.name3}</p>
                <p class="p2">${adidas[0].price.price3}</p>
                <p class="p3">${adidas[0].color.color3}</p>
                <p class="p4">Brank: NIKE</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element14() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${newbalance[0].img.img3}">
            <div class="div6">
                <p class="p1">${newbalance[0].name.name3}</p>
                <p class="p2">${newbalance[0].price.price3}</p>
                <p class="p3">${newbalance[0].color.color3}</p>
                <p class="p4">Brank: New Balance</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element15() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${newbalance[0].img.img4}">
            <div class="div6">
                <p class="p1">${newbalance[0].name.name4}</p>
                <p class="p2">${newbalance[0].price.price4}</p>
                <p class="p3">${newbalance[0].color.color4}</p>
                <p class="p4">Brank: New Balance</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element16() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${nike[0].img.img6}">
            <div class="div6">
                <p class="p1">${nike[0].name.name6}</p>
                <p class="p2">${nike[0].price.price6}</p>
                <p class="p3">${nike[0].color.color6}</p>
                <p class="p4">Brank: Nike</p>
            </div>
             <span><div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div></span>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element17() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${newbalance[0].img.img5}">
            <div class="div6">
                <p class="p1">${newbalance[0].name.name5}</p>
                <p class="p2">${newbalance[0].price.price5}</p>
                <p class="p3">${newbalance[0].color.color5}</p>
                <p class="p4">Brank: Nike</p>
            </div>
             <span><div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div></span>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element18() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${nike[0].img.img7}">
            <div class="div6">
                <p class="p1">${nike[0].name.name7}</p>
                <p class="p2">${nike[0].price.price7}</p>
                <p class="p3">${nike[0].color.color7}</p>
                <p class="p4">Brank: Nike</p>
            </div>
             <span><div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div></span>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element19() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${puma[0].img.img3}">
            <div class="div6">
                <p class="p1">${puma[0].name.name3}</p>
                <p class="p2">${puma[0].price.price3}</p>
                <p class="p3">${puma[0].color.color3}</p>
                <p class="p4">Brank: Nike</p>
            </div>
             <span><div class="badge badge-secondary mobile:w-9 mobile:h-8 absolute top-0 left-1">HOT</div></span>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
} function element20() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${puma[0].img.img4}">
            <div class="div6">
                <p class="p1">${puma[0].name.name4}</p>
                <p class="p2">${puma[0].price.price4}</p>
                <p class="p3">${puma[0].color.color4}</p>
                <p class="p4">Brank: Nike</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
}
function element21() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img2" src="${reebok[0].img.img2}">
            <div class="div6">
                <p class="p1">${reebok[0].name.name2}</p>
                <p class="p2">${reebok[0].price.price2}</p>
                <p class="p3">${reebok[0].color.color2}</p>
                <p class="p4">Brank: Nike</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
} function element22() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img3" src="${newbalance[0].img.img6}">
            <div class="div6">
                <p class="p1">${newbalance[0].name.name6}</p>
                <p class="p2">${newbalance[0].price.price6}</p>
                <p class="p3">${newbalance[0].color.color6}</p>
                <p class="p4">Brank: Nike</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
} function element23() {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="div1">
            <img class="img2" src="${adidas[0].img.img4}">
            <div class="div6">
                <p class="p1">${adidas[0].name.name4}</p>
                <p class="p2">${adidas[0].price.price4}</p>
                <p class="p3">${adidas[0].color.color4}</p>
                <p class="p4">Brank: Nike</p>
            </div>
            <button class="b1">\u00d7</button>
        </div>
    `;
    ul.appendChild(li);
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
    else if (e.target.id == "buy12") {
        shopnum++
        element11();
    }
    else if (e.target.id == "buy13") {
        shopnum++
        element13();
    }
    else if (e.target.id == "buy14") {
        shopnum++
        element14();
    }
    else if (e.target.id == "buy15") {
        shopnum++
        element15();
    }
    else if (e.target.id == "buy16") {
        shopnum++
        element16();
    } else if (e.target.id == "buy17") {
        shopnum++
        element17();
    } else if (e.target.id == "buy18") {
        shopnum++
        element18();
    } else if (e.target.id == "buy19") {
        shopnum++
        element19();
    } else if (e.target.id == "buy20") {
        shopnum++
        element20();
    } else if (e.target.id == "buy21") {
        shopnum++
        element21();
    } else if (e.target.id == "buy22") {
        shopnum++
        element22();
    } else if (e.target.id == "buy23") {
        shopnum++
        element23();
    }
    shop.innerHTML = shopnum;
    mm.innerHTML = "(" + shopnum + ")";
});

cross.addEventListener("click", () => {
    document.getElementById("my-drawer-4").checked = false;
});

// Filter Dropdown work
let dropdown = document.getElementById("select2");
let dropdown2 = document.getElementById("select1");
let gender = document.getElementById("gender");
let brand = document.querySelectorAll("#br");
let cat = document.querySelectorAll("#cat");
// function chal() {


//     for (let i of brand) {
//         let hidden = i.parentElement.parentElement.parentElement.parentElement.parentElement;
//             hidden.style.display = "none";
//         if (dropdown.value == i.innerHTML && dropdown2.value == "All") {
//             let visible = i.parentElement.parentElement.parentElement.parentElement.parentElement;
//             visible.style.display = "block";
//         } else if (dropdown.value == i.innerHTML) {
//             for (let n of cat) {
//                 if (dropdown2.value.toLowerCase() == n.innerHTML.toLowerCase()) {
//                     let visibleee = n.parentElement.parentElement.parentElement.parentElement.parentElement;
//                     visibleee.style.display = "block";
//                 } else {
//                     let hidder = n.parentElement.parentElement.parentElement.parentElement.parentElement;
//                     hidder.style.display = "none";
//                 }
//             }
//         } else {
//             let hidden = i.parentElement.parentElement.parentElement.parentElement.parentElement;
//             hidden.style.display = "none";
//         }
//     }
// }

function chal() {
    // Select all cards
    const cards = document.querySelectorAll('.grid-item');

    // Get dropdown values
    const selectedBrand = dropdown.value.toLowerCase();
    const selectedCategory = dropdown2.value.toLowerCase();

    // Loop through all cards to determine visibility
    cards.forEach(card => {
        const cardBrandElement = card.querySelector('#br');
        const cardCategoryElement = card.querySelector('#cat');

        if (cardBrandElement && cardCategoryElement) {
            const cardBrand = cardBrandElement.textContent.trim().toLowerCase();
            const cardCategory = cardCategoryElement.textContent.trim().toLowerCase();

            // Determine if the card should be visible
            const brandMatch = selectedBrand === cardBrand;
            const categoryMatch = selectedCategory === "all" || selectedCategory === cardCategory;

            if (brandMatch && categoryMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";

            }
        }
    });
}


list.addEventListener("click", function (e) {
    if (e.target.id == "a") {
        for (let i of brand) {
            if ("adidas" == i.innerHTML.toLowerCase()) {
                console.log(e.target.id);
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
            }
            else {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            }
        }
    }else if (e.target.id == "n") {
        for (let i of brand) {
            if ("nike" == i.innerHTML.toLowerCase()) {
                console.log(e.target.id);
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
            }
            else {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            }
        }
    }else if (e.target.id == "pa") {
        for (let i of brand) {
            if ("puma" == i.innerHTML.toLowerCase()) {
                console.log(e.target.id);
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
            }
            else {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            }
        }
    } else if(e.target.id == "r") {
        for (let i of brand) {
            if ("reebok" == i.innerHTML.toLowerCase()) {
                console.log(e.target.id.trim());
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
            }
            else {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            }
        }
    }else if(e.target.id.trim() == "N") {
        for (let i of brand) {
            if ("new balance" == i.innerHTML.toLowerCase()) {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";
            }
            else {
                i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
            }
        }
    }
});

