// Logic for Hidden Navbar 

const bar = document.getElementById("bar");
const hidden_menu = document.getElementById("hidden_menu");
const closeIcon = document.getElementById('close_icon');

bar.addEventListener('click', () => {
    hidden_menu.classList.remove('hidden');
    hidden_menu.classList.add('flex');
});

closeIcon.addEventListener('click', () => {

    hidden_menu.classList.remove('flex');
    hidden_menu.classList.add('hidden');
});

// whatsapp 
const whatsapp = document.getElementById('whatsapp');
const chatIcon = document.getElementById('chat');

chatIcon.addEventListener('click', () => {
    whatsapp.classList.toggle('hidden');
}
)



