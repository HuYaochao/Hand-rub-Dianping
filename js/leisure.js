window.onload = function () {
    var info = [
        {
            name: "泉溪温泉生活馆",
            url: 'https://images.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%B8%A9%E6%B3%89%E9%A6%86&step_word=&hs=0&pn=2&spn=0&di=7360350738721013761&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3452839270%2C2400994419&os=906742160%2C490857617&simid=3452839270%2C2400994419&adpicid=0&lpn=0&ln=1766&fr=&fmq=1719307554974_R&fm=index&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=300&height=200&face=undefined&ist=&jit=&cg=&bdtype=15&oriquery=&objurl=https%3A%2F%2Fp1.cncnimg.cn%2Fjdpic%2F2%2F1991_m.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3F3twg24jg_z%26e3Bvgvg_z%26e3Bv54AzdH3Fri5p5AzdH3F&gsm=5a&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&lid=8700394107719404732',
        },
        {
            name: "泉溪温泉生活馆",
            url: '../img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: '../img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: '../img/1.jpg',
        },
    ];

    var fileListUl = document.querySelector('.fileList');

    for (var i = 0; i < info.length; i++) {
        var li = document.createElement("li");
        li.style.display = "inline-block";
        li.style.margin = "5px";
        var img = document.createElement("img");
        var p = document.createElement("p");
        img.src = info[i].url;
        p.innerHTML = info[i].name;


        li.appendChild(img);
        li.appendChild(p);
        fileListUl.appendChild(li);
    }
}