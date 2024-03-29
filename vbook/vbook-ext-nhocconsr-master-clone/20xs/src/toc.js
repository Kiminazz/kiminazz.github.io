function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#list dd a")
        const data = [];
        for (let i = 12;i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: 'https://www.20xs.org'+e.attr("href"),
                host: "https://www.20xs.org"
            })
        }
        return Response.success(data);
    }
    return null;
}