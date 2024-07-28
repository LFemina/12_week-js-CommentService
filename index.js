function checkSpam(str) {
    return str.replace(/viagra|XXX/ig, '***');
}

const button = document.getElementById('btn');
        button.onclick = function () {
            const name = document.getElementById('name');
            const trimmedName = name.value.trim();
            const userName = document.getElementById('username');
            userName.textContent = trimmedName.charAt(0).toUpperCase() + trimmedName.substr(1).toLowerCase();
            name.value = '';


            const pict = document.getElementById('avatar');
            document.getElementById('img').src = pict.value;
            pict.value = '';

            const message = document.getElementById('message').value.trim();
            const result = checkSpam(message);
            document.getElementById('usercomment').textContent = result.charAt(0).toUpperCase() + result.substr(1).toLowerCase();
            document.getElementById('message').value = '';
        }