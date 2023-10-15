/*jslint plusplus:true */
/*global console*/


var // All Variables
    div = document.createElement("div"),
    h1 = document.createElement("h1"),
    h2 = document.createElement("h2"),
    h3 = document.createElement("h3"),
    p = document.createElement("p"),
    ul = document.createElement("ul"),
    li = document.createElement("li"),
    span = document.createElement("span"),
    a = document.createElement("a"),
    text = document.createTextNode("Here !"),
    img = document.createElement("img"),
    form = document.createElement("form"),
    input = document.createElement("input"),
    textarea = document.createElement("textarea"),
    button = document.createElement("button"),
    i;

document.title = "Css/JS";

/* start  Header */

var header = document.body.appendChild(div.cloneNode());

header.classList.add("header");

var container = div.cloneNode();

header.appendChild(container.cloneNode()).classList.add("container");

header.firstElementChild.appendChild(span.cloneNode()).classList.add("brand");

header.firstElementChild.children[0].textContent = "My-JS-website";

header.firstElementChild.appendChild(ul.cloneNode());

for (i = 0; i < 4; i++) {
    header.firstElementChild.children[1].appendChild(li.cloneNode()).appendChild(a.cloneNode());
}

header.firstElementChild.children[1].children[0].children[0].textContent = "Home";
header.firstElementChild.children[1].children[1].children[0].textContent = "About";
header.firstElementChild.children[1].children[2].children[0].textContent = "Services";
header.firstElementChild.children[1].children[3].children[0].textContent = "Contact";


for (i = 0; i < 4; i++) {
    header.firstElementChild.children[1].children[i].children[0].setAttribute("href", "#");
}

/*  end Header */

/* start  Intro */

var intro = document.body.appendChild(div.cloneNode());

intro.classList.add("intro");

intro.style.height = window.innerHeight + "px";

intro.appendChild(div.cloneNode()).classList.add("overlay");

var overlay = intro.firstChild;

overlay.appendChild(div.cloneNode()).appendChild(h1.cloneNode()).appendChild(span.cloneNode()).textContent = "Welcome ";

overlay.firstElementChild.children[0].appendChild(text.cloneNode());

overlay.firstElementChild.appendChild(p.cloneNode()).textContent = "A programmer is a person who creates computer programs, websites, web services and mobile applications using programming languages ​​- Python, C, C++, Go, Java, JS, Swift and others";

overlay.firstElementChild.appendChild(button.cloneNode()).textContent = "Read More";

overlay.firstElementChild.children[2].classList.add("btn1");

overlay.firstElementChild.style.paddingTop = (window.innerHeight - overlay.firstElementChild.clientHeight) / 2 + "px";

/*  end Intro */

/* start Features */

var features = document.body.appendChild(div.cloneNode());

features.classList.add("features", "ov-hid");

features.appendChild(container.cloneNode()).classList.add("container");

features.firstElementChild.appendChild(h2.cloneNode()).textContent = "Our features";

for (i = 1; i <= 3; i += 1) {
    features.firstElementChild.appendChild(div.cloneNode()).classList.add("feat");
    features.firstElementChild.children[i].appendChild(h3.cloneNode()).textContent = "Java-script";
    features.firstElementChild.children[i].appendChild(p.cloneNode()).textContent = "JavaScript is the most widely used programming language, running on every device with a web browser. Over the past ten years, a huge ecosystem has been built around JavaScript:";
}

/*  end Features */

/* start  Our Work */

var work = document.body.appendChild(div.cloneNode());

work.classList.add("our-work", "ov-hid");

work.appendChild(container.cloneNode()).classList.add("container");

work.firstElementChild.appendChild(h2.cloneNode()).textContent = "Our work";

for (i = 1; i <= 6; i += 1) {
    work.firstElementChild.appendChild(div.cloneNode()).classList.add("item");
    work.firstElementChild.children[i].appendChild(div.cloneNode()).textContent = "Read More";
    work.firstElementChild.children[i].appendChild(img.cloneNode()).src = "https://blog.faradars.org/wp-content/uploads/2022/09/what-is-front-end-programming.jpg";
}

/*  end Our Work */

/* start  Testimonials */

var testimonials = document.body.appendChild(div.cloneNode());

testimonials.classList.add("testi", "ov-hid");

testimonials.appendChild(container.cloneNode()).classList.add("container");

testimonials.firstElementChild.appendChild(h2.cloneNode()).textContent = "About Java-script";

for (i = 1; i <= 3; i += 1) {
    testimonials.firstElementChild.appendChild(div.cloneNode()).classList.add("client");
    testimonials.firstElementChild.children[i].appendChild(h3.cloneNode()).textContent = "Java-script";
    testimonials.firstElementChild.children[i].appendChild(p.cloneNode()).textContent = "Now frontend developers can fully create websites in JavaScript: work with URLs, databases, and the command line, which adds more functionality to web applications and saves the customer money on a backend specialist.";
}

/*  end Testimonials */

/* start  Conatct Form */

var contact = document.body.appendChild(div.cloneNode());

contact.classList.add("contact");

contact.appendChild(div.cloneNode()).classList.add("container");

contact.firstElementChild.appendChild(h2.cloneNode()).textContent = "Contact Us";

contact.firstElementChild.appendChild(form.cloneNode());

contact.firstElementChild.children[1].appendChild(input.cloneNode());
contact.firstElementChild.children[1].children[0].type = "text";
contact.firstElementChild.children[1].children[0].placeholder = "Name";
contact.firstElementChild.children[1].appendChild(input.cloneNode());
contact.firstElementChild.children[1].children[1].type = "Email";
contact.firstElementChild.children[1].children[1].placeholder = "Email";
contact.firstElementChild.children[1].appendChild(textarea.cloneNode());
contact.firstElementChild.children[1].children[2].placeholder = "Message";
contact.firstElementChild.children[1].appendChild(button.cloneNode()).classList.add("btn1");
contact.firstElementChild.children[1].children[3].textContent = "Send";

/*  end Conatct Form */

/* start Footer */

var footer = document.body.appendChild(div.cloneNode());

footer.classList.add("footer");

footer.appendChild(span).textContent = " CSS/JS Website 2023 P.s Maksym Maksimishin";

/* end Footer */