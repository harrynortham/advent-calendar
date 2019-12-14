//variable of element we want to put the calendar in
const calendarWrapper = document.getElementById('calendar-wrapper');

//variable which contains todays date in number format (1-31). 
//In production replace today variable with date from server
let today = new Date();
today = today.getDate()

//array with prize objects
const prizes = [{
    "day": 8,
    "icon": "🎁",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "present",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 15,
    "icon": "☃️",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "snowman",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 20,
    "icon": "⭐️",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "star",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 6,
    "icon": "🧸",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "teddy",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 12,
    "icon": "🧣",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "scarf",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 3,
    "icon": "🤶",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "santa",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 19,
    "icon": "❄️",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "snowflake",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 1,
    "icon": "🦌",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "deer",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 23,
    "icon": "🎄",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "tree",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 5,
    "icon": "🍫",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "chocolate",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 16,
    "icon": "🍾",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "champagne",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 11,
    "icon": "🥁",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "drums",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 17,
    "icon": "🎊",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "decorations",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 22,
    "icon": "🏂",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "snowboard",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},
{
    "day": 10,
    "icon": "🎀",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "bow",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 21,
    "icon": "🦃",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "turkey",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 13,
    "icon": "💍",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "ring",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 18,
    "icon": "🍬",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "sweets",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 7,
    "icon": "⛷",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "ski",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 14,
    "icon": "🎅",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "santa",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 2,
    "icon": "🧤",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "gloves",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 9,
    "icon": "🎺",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "trumpet",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 24,
    "icon": "🎉",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "party",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
}, {
    "day": 4,
    "icon": "🥂",
    "text": "Receive a Prize Draw entry for every £5 staked on site. There's vouchers and free spins on your favourite games up for grabs! ",
    "bonusCode": "cheers",
    "terms": "Offer runs from 15/11/2019 - 12/12/2019. Spend £10 cash on selected slots to receive 1 entry into the draw. Draw periods run from Friday to Sunday, and Monday to Thursday. 8 Draws with a total of £1m in cash prizes. T&Cs apply."
},

];

//create modal container
const modal = document.createElement("div");
const modalContent = document.createElement("div");
modal.id = "modal";
modalContent.id = "modal-content";
modal.appendChild(modalContent);
calendarWrapper.appendChild(modal);
//variable of modal elements for use below
const elModal = document.getElementById('modal');
const elModalContent = document.getElementById('modal-content');

//loop to create each calendar box
for (let prize of prizes) {
    //create dom elements
    const present = document.createElement("div");
    const presentPane = document.createElement("div");
    const presentDate = document.createElement("h2");
    const presentContent = document.createElement("div");
    const presentBauble = document.createElement("div");
    let date = document.createTextNode(prize.day);
    let bauble = document.createTextNode(prize.icon);

    //give elements classes
    present.classList.add("present");
    presentPane.classList.add("present-pane");
    presentDate.classList.add("present-date");
    presentContent.classList.add("present-content");
    presentBauble.classList.add("present-bauble");

    //give class of today to the present
    if (prize.day === today) {
        present.classList.add("today");
        //Add content to modal popup
        elModalContent.innerHTML = `<div id="modal-header"><span>🤩</span></div><p id="modal-text">${prize.text}</p><p id="modal-bonus">${prize.bonusCode}</p><div id="modal-button"><a href="#">Claim Now</a></div><p id="modal-terms">${prize.terms}</p>`;
    }
    //give class of open to the previous days
    if (prize.day < today) {
        present.classList.add("open");
    }
    //append elements
    presentDate.appendChild(date);
    presentPane.appendChild(presentDate);
    present.appendChild(presentPane);
    presentBauble.appendChild(bauble);
    presentContent.appendChild(presentBauble);
    present.appendChild(presentContent);

    //add element to the calendar wrapper 
    calendarWrapper.appendChild(present);
}

//add click event listener to each day
document.querySelectorAll('.present').forEach(element => {
    element.addEventListener("click", e => {

        //if present has class of today, allow it to be opened + show modal
        if (element.classList.contains("today")) {
            //open day window
            element.classList.add("open");
            //show modal
            elModal.classList.add("show");
            //start Confetti
            confettiMod.confetti();
        }

    });
});

//confetti aka SNOW

var confettiMod = (function () {
    var confetti = function () {
        var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

        NUM_CONFETTI = 350;

        COLORS = [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]];

        PI_2 = 2 * Math.PI;

        ///Create the canvas element and add to modal
        const elCanvas = document.createElement("canvas");
        elCanvas.classList.add("show");
        elCanvas.id = "canvas";
        elModal.appendChild(elCanvas);
        ///

        canvas = document.getElementById("canvas");

        context = canvas.getContext("2d");

        window.w = 0;

        window.h = 0;

        resizeWindow = function () {
            window.w = canvas.width = window.innerWidth;
            return window.h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeWindow, false);
        resizeWindow();

        range = function (a, b) {
            return (b - a) * Math.random() + a;
        };

        drawCircle = function (x, y, r, style) {
            context.beginPath();
            context.arc(x, y, r, 0, PI_2, false);
            context.fillStyle = style;
            return context.fill();
        };

        xpos = 0.5;

        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
        })();

        Confetti = (function () {
            function Confetti() {
                this.style = COLORS[~~range(0, 5)];
                this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
                this.r = ~~range(2, 6);
                this.r2 = 2 * this.r;
                this.replace();
            }

            Confetti.prototype.replace = function () {
                this.opacity = 0;
                this.dop = 0.03 * range(1, 4);
                this.x = range(-this.r2, w - this.r2);
                this.y = range(-20, h - this.r2);
                this.xmax = w - this.r;
                this.ymax = h - this.r;
                this.vx = range(0, 2) + 8 * xpos - 5;
                return this.vy = 0.7 * this.r + range(-1, 1);
            };

            Confetti.prototype.draw = function () {
                var _ref;
                this.x += this.vx;
                this.y += this.vy;
                this.opacity += this.dop;
                if (this.opacity > 1) {
                    this.opacity = 1;
                    this.dop *= -1;
                }
                if (this.opacity < 0 || this.y > this.ymax) {
                    this.replace();
                }
                if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
                    this.x = (this.x + this.xmax) % this.xmax;
                }
                return drawCircle(~~this.x, ~~this.y, this.r, "" + this.rgb + "," + this.opacity + ")");
            };

            return Confetti;

        })();

        confetti = (function () {
            var _i, _results;
            _results = [];
            for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
                _results.push(new Confetti);
            }

            return _results;
        })();

        window.step = function () {
            var c, _i, _len, _results;
            requestAnimationFrame(step);
            context.clearRect(0, 0, w, h);
            _results = [];
            for (_i = 0, _len = confetti.length; _i < _len; _i++) {
                c = confetti[_i];
                _results.push(c.draw());
            }
            return _results;
        };

        step();

    };

    return {
        confetti: confetti
    }
})();