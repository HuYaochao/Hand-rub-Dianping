// 冲突的 JavaScript 操作：你的代码可能在 window.onload 事件中执行，而其他脚本可能也在 window.onload 事件中执行，导致冲突。
document.addEventListener('DOMContentLoaded', function () {
    var info = [
        {
            name: "泉溪温泉生活馆",
            url: 'https://p1.cncnimg.cn/jdpic/2/1991_m.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: './img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: './img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: './img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: './img/1.jpg',
        },
        {
            name: "泉溪温泉生活馆",
            url: './img/1.jpg',
        },
    ];

    var fileListUl = document.querySelector('.fileList'); // 使用唯一ID

    for (var i = 0; i < info.length; i++) {
        var li = document.createElement("li");
        li.style.display = "inline-block";
        li.style.margin = "10px";
        li.style.marginTop = "25px";
        var img = document.createElement("img");
        img.src = info[i].url;

        img.style.width = "175px"; // 设置图片宽度
        img.style.height = "160px"; // 设置图片高度
        var p = document.createElement("p");
        
        p.innerHTML = info[i].name;


        li.appendChild(img);
        li.appendChild(p);
        fileListUl.appendChild(li);
    }
});
