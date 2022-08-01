function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get('https://9txs.org/library/0_'+url+'_0_'+page+'.html').html();

    var next = doc.select(".page").select("em + a").text();

    const el = doc.select("ul.library li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);

        data.push({
            name: e.select("a.bookname").first().text(),
            link: e.select("a.bookname").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".author").text(),
            host: 'https://9txs.org',
        })
    }

    return Response.success(data, next)
}