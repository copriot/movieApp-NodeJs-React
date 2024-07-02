const http = require("http");
const getRequest = require("./methods/get.js");
const postRequest = require("./methods/post.js");
const deleteRequest = require("./methods/delete.js");
//1)Server oluştur
const server = http.createServer((req, res) => {
    //frontende gönderilecek bütün cevaplara eklenecek ve cors hatasını engelleyecek header
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(res, "😀")
    //istek atılan method türüne göre client 'a cevap vericek fonksiyonu belirledik.module yapısı sayesinde kod kalabalığı ılmaması için ayrı dosyalara tanımladık
    switch (req.method) {
        // frontend'den bir post/put/patch/delete isteği atılığı zaman tarayıcı öncelikle server'ın bu istek tiplerini kabul ettiğini kontrol etmek amacıyla options methoduyla istek atıyor. Eğer options isteği gelince cevap göndermezssek diğer isteği hiç atmıyor ama option gelince doğru header'lar ile cevap verirsek options'ın ardından asıl isteği gönderiyor


        case "OPTIONS":
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, DELETE, PUT, PATCH, OPTIONS"
            );
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");

            res.end();
            break;

        case "GET":
            getRequest(req, res);
            break;

        case "POST":
            postRequest(req, res);
            break;

        case "DELETE":
            deleteRequest(req, res);
            break;

        default:
            // cevab'ın durum kodunu belirle
            res.statusCode = 404;

            // gönderlicek cevaba içeirğin tipini headers olarak ekle
            res.setHeader("Content-Type", "application/json");

            // cevab'ın içeirğini belirleme
            res.write(
                JSON.stringify({
                    message: "İstek yapılan adres tanımsız.",
                })
            );

            // client'a cevabı gönders
            res.end();
    }
});

//2) Belirli porta gelen istekleri dinle
const port = 5005;
server.listen(port, () => {
    console.log(`Server ${port}'a gelen istekleri dinlemeye basladi`);
});