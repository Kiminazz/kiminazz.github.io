function execute() {
    const doc = Http.get("https://lxhentai.com").html();
    const el = doc.select("#showTheLoai a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: 'https://lxhentai.com'+ e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}