const nav = new XMLHttpRequest();
const foo = new XMLHttpRequest();
const demo = document.getElementById('demo');
const footer = document.getElementById('footer');

nav.onload = function() {
    if(this.status === 200) {
        demo.innerHTML = nav.responseText;
    } else {
        console.warn('Not found');
    }
};
    nav.open('get', 'header.html');
    nav.send();


    foo.onload = function() {
        if(this.status === 200) {
            foot.innerHTML = foo.responseText;
        } else {
            console.warn('Not found');
        }
    };
        foo.open('get', 'footer.html');
        foo.send();