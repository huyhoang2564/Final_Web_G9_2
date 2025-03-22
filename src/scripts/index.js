// Load Navbar
fetch('/src/html/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
        attachNavListeners(); 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Load Footer
fetch('/src/html/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-place-holder').innerHTML = data; 
        attachNavListeners(); 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Load Modal
fetch('/src/html/components/modal.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modal-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

// Load Booking Form
function loadBookForm() {
    fetch('/src/html/components/book-form.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('book-form-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Load Call to Action
fetch('/src/html/components/call-action.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('call-action-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });


// Load the Contact-Map
function loadContactMap() {
    fetch('/src/html/components/contact-map.html') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contact-map-placeholder').innerHTML = data;
            console.log('Contact map loaded successfully.');
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


// Load content based on the current page
function loadContent(url) {
    // Map clean URLs to actual file paths
    const pathMap = {
        '/': '/src/html/home.html',
        '/intro': '/src/html/intro.html',
        '/service': '/src/html/service.html',
        '/course': '/src/html/course.html',
        '/blog': '/src/html/blog.html',
        '/news': '/src/html/news.html',
    };

    // Get the actual file path based on the clean URL
    const filePath = pathMap[url] || '/src/html/404.html'; 

    //Load with conditions
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-area').innerHTML = data; 
            
            // Update the URL in the address bar
            history.pushState(null, '', url); 
            
            // Check if the loaded content is one of the pages that should show the contact map
            if (url === '/' || url === '/intro' || url === '/course' || url === 'blog') {
                loadContactMap(); 
                loadBookForm();
            } else {
                document.getElementById('contact-map-placeholder').innerHTML = ''; 
                document.getElementById('book-form-placeholder').innerHTML = ''; 
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function attachNavListeners() {
    const links = document.querySelectorAll('.nav-menu a, .footer-nav a'); 
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            const url = this.getAttribute('href'); 
            loadContent(url); 
        });
    });
}

// Load the correct content based on the current URL when the page loads
window.addEventListener('load', function() {
    loadContent(window.location.pathname);
});

// Listen for popstate events to handle back/forward navigation
window.addEventListener('popstate', function(event) {
    // Load the current URL from the address bar
    loadContent(window.location.pathname);
});