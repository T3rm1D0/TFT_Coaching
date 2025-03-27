const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");
const orderForm = document.getElementById("orderForm");

function openModal(title, description, productId) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "flex";
    orderForm.productId.value = productId;
}

document.querySelectorAll(".button_order_now").forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let titles = ["LIVE COACHING", "VOD REVIEW", "LIVE COACHING 4X"];
        let descriptions = [
            "Get one-on-one live coaching tailored to your skill level. Real-time feedback and personalized strategy planning.",
            "Submit your recorded gameplay and receive a detailed analysis with improvement tips and key insights.",
            "Book 4 full sessions of live coaching at a discounted bundle price. Ideal for consistent improvement over time."
        ];
        let productIds = [1, 2, 3];
        openModal(titles[index], descriptions[index], productIds[index]);
    });
});

closeBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const discord = document.getElementById("discord").value;
    const productId = orderForm.productId.value;

    if (!name || !email || !discord) {
        alert("Please fill in all fields!");
        return;
    }

    const orderData = {
        name: name,
        email: email,
        discord: discord,
        productId: productId,
    };


    fetch('/api/buyers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            modalDescription.innerHTML = "Order Successful! Join our Discord for more information: <a href='" + data.product.discordLink + "' target='_blank'>Discord Link</a>";
            orderForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error placing your order. Please try again.');
        });
});
