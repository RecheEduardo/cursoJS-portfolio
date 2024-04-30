document.addEventListener("DOMContentLoaded", function() {
    const titleElement = document.getElementById("top-title");
    const cursor = document.getElementById("cursor");
    const text = "${Olá, seja bem vindo ao\nmeu portfólio de\nJavaScript!}";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            let char = text.charAt(index);
            if (char === '\n') {
                titleElement.insertBefore(document.createElement('br'), cursor);
            } else {
                const newChar = document.createTextNode(char);
                titleElement.insertBefore(newChar, cursor);
            }
            index++;
            setTimeout(typeWriter, 130);
        }
    }

    typeWriter();
});



