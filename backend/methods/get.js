const fs = require("fs");

module.exports = async (req, res) => {
    // Yapılan isteğin temel adresi
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));
    // URL'in sonundaki id değerini bir değişkene aktar
    const id = req.url.split("/")[3];

    if (req.url === "/api/movies") {
        // 1) Durum kodu belirle
        res.statusCode = 200;

        // 2) Header'ları belirle
        res.setHeader("Content-Type", "application/json");

        // 3) JSON dosyasından bütün filmleri al
        const data = fs.readFileSync("./data/movies.json", "utf-8");

        // 4) Client'a cevap gönder
        return res.end(data);
    } else if (baseUrl === "/api/movies" && id) {
        // 1) Bütün filmleri al JS formatında
        const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

        // 2) URL'e eklenen id'ye karşılık gelen filmi dizide bul
        const movie = data.movies.find((movie) => movie.id === id);

        if (movie) {
            // 3) Eğer film bulunursa client'a gönder
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(movie));
        } else {
            // 4) Film bulunamazsa client'a hata gönder
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Geçersiz id");
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Yol bulunamadı");
    }
};