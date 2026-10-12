
function loadNotices() {

    let http = new XMLHttpRequest();

    http.open("GET", "./notices.json", true);

    document.getElementById("method").textContent = "GET";
    document.getElementById("source").textContent = "notices.json";
    document.getElementById("status").textContent = "Loading Notices...";


    http.onreadystatechange = function () {

        document.getElementById("readyState").textContent = http.readyState;


        if (http.readyState == 4) {

            let notices = JSON.parse(http.responseText);

            displayNotices(notices);

            document.getElementById("status").textContent =
                "Notices Loaded Successfully";
        }

    };


    http.send();

}



function displayNotices(notices) {

    let container = document.getElementById("noticeContainer");

    container.innerHTML = "";


    for (let i = 0; i < notices.length; i++) {

        let card = document.createElement("div");

        card.className = "notice-card";


        card.innerHTML = `
            <h3>NOTICE #${notices[i].id}</h3>

            <h4>${notices[i].title}</h4>

            <p>Category : ${notices[i].category}</p>

            <p>Date : ${notices[i].date}</p>

            <button onclick="viewNotice(${i})">
                VIEW NOTICE
            </button>
        `;


        container.appendChild(card);

    }

}


let selectedNotice = null;


function viewNotice(index) {

    let http = new XMLHttpRequest();

    http.open("GET", "./notices.json", true);


    http.onreadystatechange = function () {

        document.getElementById("readyState").textContent =
            http.readyState;


        if (http.readyState == 4) {

            let notices = JSON.parse(http.responseText);

            selectedNotice = notices[index];


            document.getElementById("noticeTitle").textContent =
                selectedNotice.title;

            document.getElementById("noticeDate").textContent =
                selectedNotice.date;

            document.getElementById("noticeCategory").textContent =
                selectedNotice.category;


            document.getElementById("method").textContent = "GET";

            document.getElementById("source").textContent =
                "notices.json";

            document.getElementById("status").textContent =
                "Notice Selected";

        }

    };


    http.send();

}


function loadFullNotice() {

    let http = new XMLHttpRequest();

    http.open("GET", "./notice.txt", true);


    document.getElementById("method").textContent = "GET";

    document.getElementById("source").textContent =
        "notice.txt";

    document.getElementById("status").textContent =
        "Loading Notice...";


    http.onreadystatechange = function () {

        document.getElementById("readyState").textContent =
            http.readyState;


        if (http.readyState == 4) {

            document.getElementById("noticeContent").textContent =
                http.responseText;

            document.getElementById("status").textContent =
                "Notice Loaded Successfully";

        }

    };


    http.send();

}


document.getElementById("loadNotice").onclick = function () {

    loadFullNotice();

};


loadNotices();





