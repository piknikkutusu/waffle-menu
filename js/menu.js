document.addEventListener("DOMContentLoaded", async () => {

    const app = document.getElementById("app");

    const menu = await loadMenu();

    const kategoriler = [...new Set(menu.map(x => x.kategori))];

    kategoriler.forEach(kategori => {

        let icon = "📦";

        if(kategori === "Waffle")
            icon = "🧇";

        if(kategori === "İçecek")
            icon = "🥤";

        const urunSayisi = menu.filter(x=>x.kategori===kategori).length;

        app.innerHTML += `

        <button class="menu-card" onclick="location.href='mutfak.html?kategori=${kategori}'">

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

    app.innerHTML += `

    <button class="small-card">
        📋 Siparişlerim
    </button>

    <button class="small-card">
        🔔 Garson Çağır
    </button>

    <button class="small-card">
        💳 Hesap İste
    </button>

    `;

});
