function replace(page) {
    let body = document.body;

    body.classList.add("fade-out");

    setTimeout(() => {
        if (page === 'hey') {
            document.body.innerHTML = `
                <div class="imagehey">
                    <img src="mat/heyhey.PNG">
                </div>
                <h1 class="hetext">𝒸𝒶𝓂</h1>
            `;

            document.title = "𝒽𝑒𝓎";
            let icon = document.querySelector("link[rel='icon']");
            if (!icon) {
                icon = document.createElement("link");
                icon.rel = "icon";
                icon.type = "image/png";
                document.head.appendChild(icon);
            }
            icon.href = "mat/hey.jpg";

            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "hey.css";
            document.head.appendChild(link);

        } else if (page === 'loveword') {
            document.body.innerHTML = `
                <div class="papercard"></div>
                <h1 class="signa">он не был создан нейросетью..</h1>
                <p class="stich"> Звезда упавшая я с небес Ты тот самый человек </p>
                <p class="stich2"> Как чудо высшее из занавес Что объединило нас тогда Я не забуду никогда </p>
                <p class="stich3"> И хоть и долго нам судьба Встречаться нам не допускала Уж не могла противостоять она Пред нашим большим потенциалом </p>
                <p class="stich4"> И не могу признаться в том Что я не в состоянии сказать Какова моя бы жизнь Была бы без тебя </p>
            `;

            document.title = "words4u";
            let icon = document.querySelector("link[rel='icon']");
            if (!icon) {
                icon = document.createElement("link");
                icon.rel = "icon";
                icon.type = "image/png";
                document.head.appendChild(icon);
            }
            icon.href = "mat/ryker.jpg";

            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "loveword.css";
            document.head.appendChild(link);
        }

        let existingScript = document.querySelector("script[src='script.js']");
        if (existingScript) {
            existingScript.remove();
        }

        let script = document.createElement("script");
        script.src = "script.js";
        document.body.appendChild(script);

        setTimeout(() => {
            body.classList.remove("fade-out");
            body.classList.add("fade-in");
        }, 10);

    }, 500);
}
