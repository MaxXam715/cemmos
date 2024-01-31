document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 1000) {
        ourAdvantages();
    }
});

function ourAdvantages() {

    var ourAdvantagesArray = [
        {
            desc: "Мы доставляем любые объемы грузов на выгодных условиях и по приемлемым ценам",
            photo: "/assets/img/slide-1.jpg"
        },
        {
            desc: "В нашем автопарке есть автомобили разной тоннажности и габаритов. Мы подберем авто исключительно под ваши предпочтения и объем работ",
            photo: "/assets/img/slide-2.jpg"
        },
        {
            desc: "Все грузовики проходят плановые технические осмотры - это гарантирует, что работа будет выполнена без задержек из-за поломки автотранспорта",
            photo: "/assets/img/slide-2.jpg"
        },
        {
            desc: "Все цистерны абсолютно герметичны и полированы изнутри, регулярно проходят внутреннюю и внешнюю чистку, что позволяет гарантировать сохранность и однородность доставляемого  груза.",
            photo: "/assets/img/slide-3.jpg"
        },
        {
            desc: "Мы аккредитованы на всех основных тендерных государственных и коммерческих площадках и постоянно принимаем участие в торгах",
            photo: "/assets/img/slide-4.jpg"
        }
    ];

    var ourAdvantagesHTML = document.createElement("div");
    ourAdvantagesHTML.classList.add("our-advantages");
    var html = `
    <div class="photo-container">
        <div class="splide splide-ourAdvantages">
            <div class="splide__track">
                <ul class="splide__list">`;
                    for (var p in ourAdvantagesArray) {
                        var photoUrl = ourAdvantagesArray[p].photo;
                        html += `
                        <li class="splide__slide">
                            <img src="${photoUrl}" alt="photo" class="photo-slide">
                        </li>`;
                    }
                    html += `
                </ul>
            </div>
        </div>
    </div>
    <div class="desc-container">
        <div class="count-sliders">
            <span class="count">01</span>
            <span class="all-count"> / 0${ourAdvantagesArray.length}</span>
        </div>
        <div class="desc-slider">
            <div class="splide splide-ourAdvantages">
                <div class="splide__track">
                    <ul class="splide__list">`;
                        for (var i in ourAdvantagesArray) {
                            var text = ourAdvantagesArray[i].desc;
                            html += `
                            <li class="splide__slide">
                                <p class="text">${text}</p>
                            </li>`;
                        }
                        html += `
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-slider">
            <button type="button" class="btn btn-prev"><i class="icon arrow-left"></i></button>
            <button type="button" class="btn btn-next"><i class="icon arrow-right"></i></button>
        </div>
    </div>`;
    ourAdvantagesHTML.innerHTML = html;
    document.querySelector("#app").append(ourAdvantagesHTML);

    var count = ourAdvantagesHTML.querySelector(".count-sliders .count");
    var elms = document.getElementsByClassName( 'splide' );
    var splideArray = [];

    for ( var i = 0; i < elms.length; i++ ) {
        var splide = new Splide(elms[ i ], {
            type: 'loop',
            arrows: false,
            gap: 10,
            drag: false,
            speed: 500,
            autoplay: true,
            pagination: false,
            classes: {
                arrows: 'splide_arrows',
                arrow : 'splide_arrow',
                prev  : 'splide_arrow-prev',
                next  : 'splide_arrow-next',
            },
        });
        splideArray.push(splide);

        splide.on("move", function (data) {
            count.innerHTML = "0"+(data+1);
        });

        splide.mount()
    }

    ourAdvantagesHTML.querySelector(".btn-slider .btn-prev").addEventListener("click", function () {
        for ( var i in splideArray) {
            var slider = splideArray[i];
            slider.go('<');
        }
    });

    ourAdvantagesHTML.querySelector(".btn-slider .btn-next").addEventListener("click", function () {
        for ( var i in splideArray) {
            var slider = splideArray[i];
            slider.go('>');
        }
    });
}