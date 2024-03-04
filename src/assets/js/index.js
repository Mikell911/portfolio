const items = document.querySelectorAll('.skills__item');
const header = document.querySelector('.header');
const hamburger = document.querySelector('.header__hamb');
const headerNav = document.querySelector('.header__nav');
const out = document.querySelector('.works__content');
const body = document.querySelector('body');
const cursor = document.querySelectorAll('.cursor');
const a = document.querySelectorAll('a');
const btn = document.querySelectorAll('button')

const Projects = [
    {
        img: 'https://camo.githubusercontent.com/2ad6ddf8503fdf746acc8133f807a369b2d25782d8dfffa4c80cc381e867ef06/68747470733a2f2f692e706f7374696d672e63632f7171726b744c6d532f6d61696e2e706e67',
        text: 'Hapag-Lloyd is a prominent global shipping and container transportation company that has been a key player in the maritime industry for decades. Founded in 1970 through the merger of two traditional German shipping companies, Hapag and Norddeutscher Lloyd, Hapag-Lloyd has evolved into one of the largest container shipping companies in the world',
        id: '01',
        title: 'Hapag-Lloyd',
        links: 'https://resonant-sunshine-ca599a.netlify.app',
        github: 'https://github.com/Mikell911/Hapag-Lloyd',
    },
    {
        img: 'https://i.postimg.cc/yYqdfbnx/Untitled.jpg',
        text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
        id: '02',
        title: 'Giarddesign',
        links: 'https://65dc49391450408b0490d519--giarddesign-new.netlify.app/',
        github: 'https://github.com/Mikell911/giarddesign',
    },
    {
        img: 'https://i.postimg.cc/MH6P0SH4/123.jpg',
        text: 'Introducing MSI, your ultimate solution for managing and optimizing your online store\'s performance. Seamlessly blending cutting-edge technology with intuitive design, MSI revolutionizes the way you handle your e-commerce operations.',
        id: '03',
        title: 'MSI',
        links: 'https://wonderful-cupcake-389d0b.netlify.app',
        github: 'https://github.com/Mikell911/MSI',
    },
    {
        img: 'https://i.postimg.cc/NjKHyzsx/form.jpg',
        text: 'Welcome to our visitor registration form, designed to provide a seamless and efficient way for visitors to register their visit while ensuring compliance and security. Our registration form incorporates advanced features such as date and time selection, along with age verification, to streamline the registration process and enhance the visitor experience.',
        id: '04',
        title: 'Visit form',
        links: 'https://chimerical-crumble-4a0dde.netlify.app/',
        github: 'https://github.com/Mikell911/form',
    },
]

function applyBoxShadow(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.style.boxShadow = '0 0 20rem 3rem rgba(255, 153, 0, 1)';
        } else {
            item.style.boxShadow = '';
        }
    });
}
function loopThroughItems(index) {
    applyBoxShadow(index);

    setTimeout(() => {
        let nextIndex = (index + 1) % items.length;
        loopThroughItems(nextIndex);
    }, 2000);
}
function CreateCart(item) {
    let cart = document.createElement('div');
    cart.classList.add('works__item');

    let img = document.createElement('img');
    img.src = `${item.img}`;
    img.classList.add('works__item-img')

    let cartDescription = document.createElement('div');
    cartDescription.classList.add('works__item-description');

    let number = document.createElement('p');
    number.classList.add('works__item-number');
    number.innerText = `${item.id}`;

    let title = document.createElement('h3');
    title.classList.add('works__item-title');
    title.innerText = `${item.title}`;

    let text = document.createElement('p');
    text.classList.add('works__item-text');
    text.innerText = `${item.text}`;

    let cartLinks = document.createElement('div');
    cartLinks.classList.add('works__item-links')

    let link = document.createElement('a');
    link.href = `${item.links}`
    link.target = "_blank";
    link.classList.add('works__item-link')

    let svgLinkElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgLinkElement.setAttribute("width", "20");
    svgLinkElement.setAttribute("height", "20");
    svgLinkElement.setAttribute("viewBox", "0 0 20 20");

    svgLinkElement.innerHTML = `
    <path d="M10.8333 9.16658L17.6667 2.33325" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3333 5.66675V1.66675H14.3333" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    `;

    link.appendChild(svgLinkElement);

    let github = document.createElement('a');
    github.href = `${item.github}`
    github.target = "_blank";
    github.classList.add('works__item-link')

    let svgGitHubElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgGitHubElement.setAttribute("width", "20");
    svgGitHubElement.setAttribute("height", "20");
    svgGitHubElement.setAttribute("viewBox", "0 0 50 50");

    svgGitHubElement.innerHTML = `
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <defs>
            <style>.cls-1{fill:none;stroke: #ffffff;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;}</style>
        </defs>
        <path class="cls-1" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"></path>
    </g>
    `;

    github.appendChild(svgGitHubElement);

    cartLinks.append(link, github);

    cartDescription.append(number, title, text, cartLinks);

    cart.append(img, cartDescription);

    title.addEventListener('click', function() {
        window.open(`${item.links}`, '_blank');
    });

    img.addEventListener('click', function () {
        window.open(`${item.links}`, '_blank');
    })

    return cart;
}

Projects.map(item => out.append(CreateCart(item)))

hamburger.addEventListener('click', () => {
    headerNav.classList.toggle('active');

    if (headerNav.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
})

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset
    const scrollTrigger = 1
    if (scrollTop > scrollTrigger) {
        header.classList.add('with-shadow')
    } else {
        header.classList.remove('with-shadow')
    }
})

loopThroughItems(0);

window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.forEach(el => {
        el.style.left = `${x}rem`;
        el.style.top = `${y}rem`;

        a.forEach(a => {
            a.addEventListener('mouseenter', () => {
                el.classList.add('hover')
            })
            a.addEventListener('mouseleave', ()=> {
                el.classList.remove('hover')
            })
        })
        btn.forEach(a => {
            a.addEventListener('mouseenter', () => {
                el.classList.add('hover')
            })
            a.addEventListener('mouseleave', ()=> {
                el.classList.remove('hover')
            })
        })
    })
})

