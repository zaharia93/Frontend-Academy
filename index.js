const nav = new XMLHttpRequest();
const foo = new XMLHttpRequest();
// const err = new XMLHttpRequest();
const car = new XMLHttpRequest();
const pop = new XMLHttpRequest();
const popular = document.getElementById('popular');
const demo = document.getElementById('demo');
const footer = document.getElementById('footer');
// const eror = document.getElementById('eror');
const carus = document.getElementById('carus');

nav.onload = function() {
    if(this.status === 200) {
        demo.innerHTML = nav.responseText;
    } else {
        console.warn('Not found');
    }
};
    nav.open('get', 'components/header.html');
    nav.send();


    foo.onload = function() {
        if(this.status === 200) {
            foot.innerHTML = foo.responseText;
        } else {
            console.warn('Not found');
        }
    };
        foo.open('get', 'components/footer.html');
        foo.send();


        // err.onload = function() {
        //     if(this.status === 200) {
        //         eror.innerHTML = err.responseText;
        //     } else {
        //         console.warn('Not found');
        //     }
        // };
        //     err.open('get', 'components/404.html');
        //     err.send();

    
            car.onload = function() {
                if(this.status === 200) {
                    carus.innerHTML = car.responseText;
                } else {
                    console.warn('Not found');
                }
            };
                car.open('get', 'components/carusel.html');
                car.send();

                pop.onload = function() {
                    if(this.status === 200) {
                        popular.innerHTML = pop.responseText;
                    } else {
                        console.warn('Not found');
                    }
                };
                    pop.open('get', 'components/popular.html');
                    pop.send();