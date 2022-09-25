
const cakes = 
[
    {
        name: "Wedding cake 1",
        price: "$449.99"
    },
    {
        name: "Wedding cake 2",
        price: "$339.99"
    },
    {
        name: "Wedding cake 3",
        price: "$249.99"
    },
    {
        name: "Wedding cake 4",
        price: "$549.99"
    },
    {
        name: "Wedding cake 5",
        price: "$729.99"
    },
    {
        name: "Wedding cake 6",
        price: "$259.99"
    },
    {
        name: "Wedding cake 7",
        price: "$449.99"
    },
    {
        name: "Wedding cake 8",
        price: "$449.99"
    }
]

const cupCakes = 
[
    {
        name: "12x Cupcake 1",
        price: "$19.99"
    },
    {
        name: "12x Cupcake 2",
        price: "$23.99"
    },
    {
        name: "12x Cupcake 3",
        price: "$14.99"
    },
    {
        name: "12x Cupcake 4",
        price: "$17.99"
    },
    {
        name: "12x Cupcake 5",
        price: "$22.99"
    },
    {
        name: "12x Cupcake 6",
        price: "$16.99"
    },
    {
        name: "12x Cupcake 7",
        price: "$24.99"
    },
    {
        name: "12x Cupcake 8",
        price: "$29.99"
    }
]

const custom = 
[
    {
        name: "Custom example 1",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 2",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 3",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 4",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 5",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 6",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 7",
        price: "Price: negotiable"
    },
    {
        name: "Custom example 8",
        price: "Price: negotiable"
    }
]

function LoadCakes() 
{
    let result = '<div class="products-container">';
    for (var i = 0; i < cakes.length; i++)
    {
        result += '<div class="obj-container">';
        result += '<div class="img-container"><img src="assets/img/cakes/cake';
        result += i+1 + '.jpg" alt="cake ' + i+1 + '"></div>';
        result += '<p>' + cakes[i].name + '</p><p>' + cakes[i].price + '</p></div>';
    }
    result += '</div>';
    
    document.getElementById("products").innerHTML = result;
}

function LoadCupCakes() 
{
    let result = '<div class="products-container">';
    for (var i = 0; i < cupCakes.length; i++)
    {
        result += '<div class="obj-container">';
        result += '<div class="img-container"><img src="assets/img/cupcakes/cupcake';
        result += i+1 + '.jpg" alt="cupcake ' + i+1 + '"></div>';
        result += '<p>' + cupCakes[i].name + '</p><p>' + cupCakes[i].price + '</p></div>';
    }
    result += '</div>';

    document.getElementById("products").innerHTML = result;
}

function LoadCustom() 
{
    let result = '<div class="products-container">';
    for (var i = 0; i < cupCakes.length; i++)
    {
        result += '<div class="obj-container">';
        result += '<div class="img-container"><img src="assets/img/custom/custom';
        result += i+1 + '.jpg" alt="custom ' + i+1 + '"></div>';
        result += '<p>' + custom[i].name + '</p><p>' + custom[i].price + '</p></div>';
    }
    result += '</div>';

    document.getElementById("products").innerHTML = result;
}


function Option1() {
    option = 1;
    localStorage.setItem("option", option); //saves variable from index-page in browser memory so it can be used in the products-page
    //window.alert(option);
}
function Option2() {
    option = 2;
    localStorage.setItem("option", option);
    //window.alert(option);
}
function Option3() {
    option = 3;
    localStorage.setItem("option", option);
    //window.alert(option);
}
function ResetOption() {
    let option = 0;
    localStorage.setItem("option", option); //resets everytime a page loads (except for products page). also resets if user clicks on products page on the menu (from products page)
    //window.alert(option);
}

function LoadProducts() {
    let option = localStorage.getItem("option");
    //window.alert("loaded");
    //window.alert(option);
    if (option == 1) {
        LoadCakes();
    }
    else if (option == 2) {
        LoadCupCakes();
    }
    else if (option == 3) {
        LoadCustom();
    }
}
