document.addEventListener('DOMContentLoaded', () => {
    
    let slideIndex = 0;
    const slidesContainer = document.querySelector('.slides-container');
    const images = slidesContainer.querySelectorAll('img');

    function showSlides(n) {
        slideIndex += n;
        if (slideIndex >= images.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = images.length - 1;
        }
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    
    window.plusSlides = function(n) {
        showSlides(n);
    };



    const welcomeMessageElement = document.getElementById('welcomeMessage');
    const userNameInput = document.getElementById('userNameInput');
    const setUserNameBtn = document.getElementById('setUserNameBtn');

    function updateWelcomeMessage(name) {
        welcomeMessageElement.textContent = `Hi ${name || 'User'}, Welcome To My Portfolio`;
    }

    setUserNameBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        updateWelcomeMessage(userName);
     userNameInput.value = ''; 
       
    });

    
    updateWelcomeMessage(''); 


  
    function updateCurrentTime() {
        const currentTimeElement = document.getElementById('currentTime');
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
            hour12: false 
        };
        currentTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); 


    
    const messageForm = document.getElementById('messageForm');
    const displayNama = document.getElementById('displayNama');
    const displayTanggalLahir = document.getElementById('displayTanggalLahir');
    const displayJenisKelamin = document.getElementById('displayJenisKelamin');
 const displayPesan = document.getElementById('displayPesan');

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const gender = genderElement ? genderElement.value : 'N/A';
        const message = document.getElementById('message').value;

        displayNama.textContent = name || 'N/A';
        displayTanggalLahir.textContent = dob || 'N/A';
        displayJenisKelamin.textContent = gender;
        displayPesan.textContent = message || 'N/A';

        
        messageForm.reset();
    });

   
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                
                const headerOffset = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; 

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" 
                });
            }
        });
    });
});
