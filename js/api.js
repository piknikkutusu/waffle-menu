const SHEET_ID = "1DhYJ-1ShgiETe5LbUEO3WPleqrDBf3ZsuHe8kJh34hM";

const MENU_URL =
`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=MENU`;

async function loadMenu(){

    const response = await fetch(MENU_URL);

    const text = await response.text();

    const json = JSON.parse(
        text.substring(47).slice(0,-2)
    );

    return json.table.rows.map(row=>{

        return{

            id:row.c[0]?.v,

            kategori:row.c[1]?.v,

            altKategori:row.c[2]?.v,

            secim:row.c[3]?.v,

            urun:row.c[4]?.v,

            aciklama:row.c[5]?.v,

            fiyat:row.c[6]?.v,

            resim:row.c[7]?.v,

            aktif:row.c[8]?.v,

            zorunlu:row.c[9]?.v,

            maksimum:row.c[10]?.v,

            stok:row.c[11]?.v,

            sira:row.c[12]?.v,

            gorunum:row.c[13]?.v

        }

    });

}
