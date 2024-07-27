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

            const message = document.getElementById('message');
            const userComment = document.getElementById('usercomment');
            userComment.textContent = message.value;
            message.value = '';
        }