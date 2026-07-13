document.addEventListener("DOMContentLoaded", async () => {

    const menu = await loadMenu();

    console.log(menu);

    const app = document.getElementById("app");

    app.innerHTML = "";

    // Kategorileri bul (Waffle, İçecek vb.)
    const kategoriler = [...new Set(menu.map(item => item.kategori))];

    kategoriler.forEach(kategori => {

        const urunSayisi = menu.filter(x => x.kategori === kategori).length;

        let icon = "🍽️";

        if (kategori === "Waffle") icon = "🧇";
        if (kategori === "İçecek") icon = "🥤";

        app.innerHTML += `
            <button class="menu-card" data-kategori="${kategori}">

                <div class="icon">
                    ${icon}
                </div>

                <div class="text">
                    <h2>${kategori}</h2>
                    <p>${urunSayisi} ürün</p>
                </div>

            </button>
        `;

    });

    // Butonlara tıklama olayı
    document.querySelectorAll(".menu-card").forEach(button => {

        button.addEventListener("click", () => {

            const kategori = button.dataset.kategori;

            location.href =
                `menu.html?kategori=${encodeURIComponent(kategori)}`;

        });

    });

});
