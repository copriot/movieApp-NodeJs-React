const fs = require("fs");



module.exports = async (req, res) => {
    //istek atılan temel adres
    const baseUrl = req.url.substring(0, req.url.lastIndexOf("/"));



    //urlnin sonundaki id i al
    const id = req.url.split("/")[3];



    if (baseUrl === "/api/movies" && id) {
        //bütün filmleri al
        const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));



        //idli film dizide var mı ?
        const isFound = data.movies.find((i) => i.id === id);
        //console.log(id);

        //dizide eleman yoksa hata fırlat

        if (!isFound) {
            res.writeHead(404);
            return res.end("Id yok")
        }



        //dizide eleman varsa diziden idsini bulduğun elemanı kaldır

        const filtered = data.movies.filter((item) => item.id !== id);


        //json dosyasını güncelle yeni diziyi aktar
        fs.writeFileSync("./data/movies.json", JSON.stringify({ movies: filtered }));



        //client e cevap gönder
        res.writeHead(204, { "Content-Type": "application/json" });
        res.end();

    } else {
        res.writeHead(404);
        return res.end("Yol Bulamadık🤪")
    }
    return res.end("Delete isteginden gönderilen cevap");
};