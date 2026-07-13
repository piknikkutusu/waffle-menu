document.addEventListener("DOMContentLoaded", async () => {

    const menu = await loadMenu();

    console.log(menu);

    const waffleBtn = document.getElementById("waffleBtn");
    const drinkBtn = document.getElementById("drinkBtn");

    const waffleCount = menu.filter(x => x.kategori === "Waffle").length;
    const drinkCount = menu.filter(x => x.kategori === "İçecek").length;

    waffleBtn.querySelector("p").innerText =
        waffleCount + " ürün mevcut";

    drinkBtn.querySelector("p").innerText =
        drinkCount + " ürün mevcut";

    waffleBtn.onclick = () => {

        location.href =
            "mutfak.html?kategori=Waffle";

    };

    drinkBtn.onclick = () => {

        location.href =
            "mutfak.html?kategori=İçecek";

    };

});
