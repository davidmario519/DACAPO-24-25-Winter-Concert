// setlist.js
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".setlist-table tbody tr");
    const details = document.getElementById("details");
    const songDetails = document.getElementById("songDetails");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            const info = row.getAttribute("data-info");
            songDetails.textContent = `연주 정보: ${info}`;
            details.classList.remove("hidden");
        });
    });
});