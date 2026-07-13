document.addEventListener("DOMContentLoaded", async () => {

    const kategori =
        new URLSearchParams(location.search)
        .get("kategori");

    document.getElementById("pageTitle").innerText = kategori;

    const menu = await loadMenu();

    const urunler =
        menu.filter(x => x.kategori === kategori);

    const alan =
        document.getElementById("menuList");

    alan.innerHTML = "";

    urunler.forEach(item => {

        alan.innerHTML += `
        
        <div class="menu-card">

            <div style="font-size:40px">
                ${item.resim || "🍴"}
            </div>

            <div style="flex:1">

                <h2>${item.urun}</h2>

                <p>${item.aciklama || ""}</p>

            </div>

            <h2>${item.fiyat} ₺</h2>

        </div>

        `;

    });

});
