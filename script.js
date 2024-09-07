function showTab(tabId) {
    
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

   
    document.getElementById(tabId).style.display = 'block';

    // Add active class to the selected tab button
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => showTab('home'));
