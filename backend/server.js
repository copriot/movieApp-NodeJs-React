const http = require("http");
const getRequest = require("./methods/get.js");
const postRequest = require("./methods/post.js");
const deleteRequest = require("./methods/delete.js");
//1)Server oluştur
const server = http.createServer((req, res) => {
    //frontende gönderilecek bütün cevaplara eklenecek ve cors hatasını engelleyecek header
    res.setHeader("Acces-Control-Allow-Origin")

    //istek atılan method türüne göre client 'a cevap vericek fonksiyonu belirledik.module yapısı sayesinde kod kalabalığı ılmaması için ayrı dosyalara tanımladık
    switch (req.method) {
        case "GET":
            return getRequest(req, res);
        case "POST":
            return postRequest(req, res);
        case "DELETE":
            return deleteRequest(req, res);

        default:
            //cevabın durum kodunu belirle
            res.statusCode = 404;

            //gönderilecek cevaba icerigin tipini headers olarak ekle
            res.setHeader("Content-Type", "application/json");
            //cevabın içerigini belirle
            res.write(JSON.stringify({
                message: "İstek yapılan adres tanımsız",
            }));

            //client'a cevabı gönder
            res.end();
    }



});

//2) Belirli porta gelen istekleri dinle
const port = 5005;
server.listen(port, () => {
    console.log(`Server ${port}'a gelen istekleri dinlemeye basladi`);
})