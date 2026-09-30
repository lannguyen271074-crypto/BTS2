const music =
    document.getElementById("music");

const btn =
    document.getElementById("musicBtn");

let playing = false;


/* =========================
   NÚT NHẠC
========================= */

function updateMusicButton() {

    btn.textContent =
        playing ? "🔊" : "♫";

    btn.classList.toggle(
        "playing",
        playing
    );

}


/* =========================
   PHÁT NHẠC
========================= */

async function playMusic() {

    try {

        await music.play();

        playing = true;

        updateMusicButton();

    }

    catch (error) {

        console.log(
            "Autoplay bị trình duyệt chặn."
        );

    }

}


/* =========================
   DỪNG NHẠC
========================= */

function pauseMusic() {

    music.pause();

    playing = false;

    updateMusicButton();

}


/* =========================
   NÚT NHẠC
========================= */

btn.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();


        if (playing) {

            pauseMusic();

        }

        else {

            playMusic();

        }

    }
);


/* =========================
   AUTOPLAY
========================= */

window.addEventListener(
    "load",
    () => {

        playMusic();

    }
);


/* =========================
   CLICK ĐẦU TIÊN
   NẾU AUTOPLAY BỊ CHẶN
========================= */

document.addEventListener(
    "click",
    () => {

        if (!playing) {

            playMusic();

        }

    },
    { once: true }
);


/* =========================
   HIỆU ỨNG MESSAGE
========================= */

const reveals =
    document.querySelectorAll(
        ".reveal"
    );


if (reveals.length) {

    const observer =
        new IntersectionObserver(

            entries => {

                if (
                    entries[0]
                        .isIntersecting
                ) {

                    reveals.forEach(
                        (element, index) => {

                            setTimeout(

                                () => {

                                    element.classList.add(
                                        "show"
                                    );

                                },

                                index * 650

                            );

                        }
                    );

                    observer.disconnect();

                }

            },

            {
                threshold: 0.2
            }

        );


    observer.observe(
        reveals[0]
    );

}


/* =========================
   CLICK ẢNH → PHÓNG TO
========================= */

document
    .querySelectorAll(
        ".photo img, .hero-photo img, .split img"
    )
    .forEach(
        img => {

            img.addEventListener(
                "click",
                () => {

                    const viewer =
                        document.createElement(
                            "div"
                        );


                    viewer.style = `

                        position:fixed;
                        inset:0;
                        background:#08060eee;
                        z-index:100;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        padding:25px;
                        cursor:zoom-out;

                    `;


                    const bigImage =
                        document.createElement(
                            "img"
                        );


                    bigImage.src =
                        img.src;


                    bigImage.style = `

                        max-width:92vw;
                        max-height:90vh;
                        object-fit:contain;

                    `;


                    viewer.appendChild(
                        bigImage
                    );


                    viewer.onclick =
                        () => viewer.remove();


                    document.body.appendChild(
                        viewer
                    );

                }
            );

        }
    );


/* =========================
   ĐỔI NAV ACTIVE KHI CUỘN
========================= */

const homeSection =
    document.getElementById("home");

const memoriesSection =
    document.getElementById("memories");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener(
    "scroll",
    () => {

        const memoriesTop =
            memoriesSection.offsetTop;

        if (
            window.scrollY + 200 >=
            memoriesTop
        ) {

            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );

                }
            );


            navLinks[1].classList.add(
                "active"
            );

        }

        else {

            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );

                }
            );


            navLinks[0].classList.add(
                "active"
            );

        }

    }
);