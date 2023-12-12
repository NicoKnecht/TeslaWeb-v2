const coursesData = [
    {
        id: 1,
        link: "../frontEnd.html",
        img: "../img/front.png",
        alt: "curso frontend",
        title: "DESARROLLO FRONT END",
        price: "$50000"
    },
    {
        id: 2,
        link: "../frontEnd.html",
        img: "../img/back.jpg",
        alt: "curso backend",
        title: "DESARROLLO BACK END CON NODE",
        price: "$50000"
    },
    {
        id: 3,
        link: "../frontEnd.html",
        img: "../img/iot.png",
        alt: "curso iot",
        title: "DESARROLLO IOT",
        price: "$30000"
    },
    {
        id: 4,
        link: "../frontEnd.html",
        img: "../img/uxui.jpg",
        alt: "curso  diseño ux/ui",
        title: "DISEÑO UX/UI",
        price: "$50000"
    },
    {
        id: 5,
        link: "../frontEnd.html",
        img: "../img/mkt.jpg",
        alt: "curso Marketing",
        title: " MARKETING DIGITAL",
        price: "$30000"
    },
    {
        id: 6,
        link: "../frontEnd.html",
        img: "../img/matemati.png",
        alt: "curso matemáticas",
        title: "INTRODUCCIÓN AL QUEHACER MATEMÁTICO",
        price: "$20000"
    },
    {
        id: 7,
        link: "../frontEnd.html",
        img: "../img/ReparacionPc.png",
        alt: "curso Armado yreparación de Pc",
        title: "ARMADO Y REPARACIÓN DE PC",
        price: "$40000"
    },

    {
        id: 8,
        link: "../frontEnd.html",
        img: "../img/metodologiasAgiles.png",
        alt: "curso metodologias agiles",
        title: "METODOLOGÍAS AGILES",
        price: "$30000"
    },
    {
        id: 9,
        link: "../frontEnd.html",
        img: "../img/photoshopIlustrator.png",
        alt: "curso photoshop e ilustrator",
        title: "PHOTOSHOP & ILUSTRATOR",
        price: "$30000"
    },
    {
        id: 10,
        link: "../frontEnd.html",
        img: "../img/seguridadInformatica.png",
        alt: "curso seguridad informatica",
        title: "SEGURIDAD INFORMÁTICA",
        price: "$50000"
    },
    {
        id: 11,
        link: "../frontEnd.html",
        img: "../img/redes.png",
        alt: "curso redes",
        title: "REDES INFORMÁTICAS",
        price: "$50000"
    },
    {
        id: 12,
        link: "../frontEnd.html",
        img: "../img/emprendimientoDigital.png",
        alt: "curso EMPRENDIMIENTO DIGITAL",
        title: "EMPRENDIMIENTO DIGITAL",
        price: "$20000"
    },
    {
        id: 13,
        link: "../frontEnd.html",
        img: "../img/algoritmos.png",
        alt: "curso algoritmos",
        title: "ALGORITMOS EN PROGRAMACIÓN",
        price: "$20000"
    },
    {
        id: 14,
        link: "../frontEnd.html",
        img: "../img/php&laravel.png",
        alt: "curso php laravel",
        title: "PHP & LARAVEL",
        price: "$50000"
    },
    {
        id: 15,
        link: "../frontEnd.html",
        img: "../img/dominaGitGithub.png",
        alt: "curso git y github",
        title: "DOMINA GIT Y GITHUB",
        price: "$20000"
    },

];


const divideCourses = (coursesToShow) => {
    const coursesList = [];
    for (let i = 0; i < coursesData.length; i += coursesToShow) {
        coursesList.push(coursesData.slice(i, i + coursesToShow));
        //partira la cantidad total en arrays mas pequeños( en este caso de a 6)
    }
    console.log(coursesList)
    return coursesList;
}
// podrian ser 4 variables distintas tambien pero es mejor hacerlo asi
const appState = {
    courses: divideCourses(6),//FUNCION
    currentCourseIndex: 0,
    courseLimit: divideCourses(6).length,//mostrará cantidad de elementos del array de arrays
    activeFilter: null,
}
