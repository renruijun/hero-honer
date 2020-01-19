// 下载文件
let fs = require('fs');
let url = require('url');
let http = require('http');
 
// 王者荣耀英雄资料库
// 所有英雄
let hero_url = `http://pvp.qq.com/web201605/js/herolist.json`;
// 装备
let equip_url = `http://pvp.qq.com/web201605/js/item.json`;
// 铭文
let ming_url = `http://pvp.qq.com/web201605/js/ming.json`;
// 召唤师技能
let summoner_url = `http://pvp.qq.com/web201605/js/summoner.json`;
 
// 自定义下载位置
// 前提是有这个文件夹，不然会报错
let download_path = `./public`;
 
function http_get_file(file_path) {
    let options = {
        host: url.parse(file_path).host,
        port: 80,       // 默认端口是80，当然也可以自己修改
        path: url.parse(file_path).pathname
    };
 
    let file_name = url.parse(file_path).pathname.split('/').pop();
    let file = fs.createWriteStream(download_path + file_name);
 
    http.get(options, function (res) {
        res.on('data', function (data) {
            file.write(data);
        });
        res.on('end', function () {
            file.end();
            console.log(`${file_name} downloaded to ${download_path}`);
        })
    })
}
 
exports.http_get_file = http_get_file;
 
// 测试
http_get_file(hero_url);
http_get_file(equip_url);
http_get_file(ming_url);
http_get_file(summoner_url);