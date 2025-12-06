
import TeamService from './services/teamService.js';

// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', async function() {
    // Load team data
    try {
        const teamData = await TeamService.getTeamData();
        console.log('Team data loaded:', teamData);
        
        // Example DOM manipulation with team data
        if (teamData.roster && document.getElementById('team-roster')) {
            const rosterContainer = document.getElementById('team-roster');
            rosterContainer.innerHTML = teamData.roster.map(player => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="${player.image}" alt="${player.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold">${player.name}</h3>
                        <p class="text-gray-600">${player.position}</p>
                        <p class="text-sm text-gray-500">${player.yearsExperience} years experience</p>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Failed to load team data:', error);
    }

const faqItems = document.querySelectorAll('.border.border-gray-200.rounded-lg');
    if(faqItems.length > 0) {
        faqItems.forEach(item => {
            const button = item.querySelector('button');
            const content = item.querySelector('.hidden');
            const icon = item.querySelector('i');
            
            button.addEventListener('click', () => {
                content.classList.toggle('hidden');
                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
            });
        });
    }

    // Form submission handling
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your application! We will review it and get back to you soon.');
            form.reset();
        });
    }
    
    // Feather icons replacement
    feather.replace();
});
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active'); // Toggle the menu
    });
});
async function fetchData() {
    try {
        const response = await fetch('data.json'); // Adjust path as necessary
        if (!response.ok) throw new Error('Network response was not okay');
        const data = await response.json();
        populateTestimonials(data.testimonials);
        populateFAQs(data.faq);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTestimonials(testimonials) {
    const testimonialsContainer = document.getElementById('testimonials');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
        testimonialElement.innerHTML = `
            <h3 class="text-xl font-semibold">${testimonial.name}</h3>
            <p class="text-red-500">${testimonial.role}</p>
            <p class="text-gray-600 italic">"${testimonial.text}"</p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
}

function populateFAQs(faqs) {
    const faqContainer = document.getElementById('faq');
    faqs.forEach((faq, index) => {
        const faqElement = document.createElement('div');
        faqElement.classList.add('border', 'border-gray-200', 'rounded-lg', 'overflow-hidden');
        faqElement.innerHTML = `
            <button class="w-full flex justify-between items-center p-4" onclick="toggleFAQ(${index})">
                <span class="font-semibold">${faq.question}</span>
                <i data-feather="chevron-down" class="text-red-500"></i>
            </button>
            <div class="px-4 pb-4 hidden">
                <p class="text-gray-600">${faq.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    feather.replace();
});