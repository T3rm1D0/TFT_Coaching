document.addEventListener('DOMContentLoaded', function() {
    const menuOpenButton = document.getElementById("menu-open-button");
    const menuCloseButton = document.getElementById("menu-close-button");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const body = document.body;

    function toggleMobileMenu() {
        body.classList.toggle("show-mobile-menu");
    }

    if (menuOpenButton && menuCloseButton) {
        menuOpenButton.addEventListener("click", toggleMobileMenu);
        menuCloseButton.addEventListener("click", toggleMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (body.classList.contains("show-mobile-menu")) {
                toggleMobileMenu();
            }
        });
    });

    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-btn");
    const orderForm = document.getElementById("orderForm");

    function openModal(title, description, productId) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";

        if (orderForm) {
            orderForm.dataset.productId = productId;
        }
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    document.querySelectorAll(".button_order_now").forEach((btn, index) => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const titles = [
                "LIVE COACHING",
                "VOD REVIEW",
                "LIVE COACHING 4X"
            ];
            const descriptions = [
                "Get one-on-one live coaching tailored to your skill level. Real-time feedback and personalized strategy planning.",
                "Submit your recorded gameplay and receive a detailed analysis with improvement tips and key insights.",
                "Book 4 full sessions of live coaching at a discounted bundle price. Ideal for consistent improvement over time."
            ];
            const productIds = [1, 2, 3];

            openModal(titles[index], descriptions[index], productIds[index]);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    if (orderForm) {
        orderForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const discord = document.getElementById("discord").value;
            const productId = orderForm.dataset.productId;

            if (!name || !email || !discord) {
                alert("Please fill in all fields!");
                return;
            }

            console.log("Order Data:", {
                name: name,
                email: email,
                discord: discord,
                productId: productId
            });

            modalDescription.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Order Successful!</h3>
                    <p>We've received your order for ${modalTitle.textContent}.</p>
                    <p>Our team will contact you shortly via Discord to schedule your session.</p>
                    <p>Join our Discord server for faster communication:</p>
                    <a href="https://discord.gg/example" class="discord-link" target="_blank">
                        <i class="fab fa-discord"></i> Join Discord
                    </a>
                </div>
            `;

            setTimeout(() => {
                orderForm.reset();
                closeModal();
            }, 5000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
