// [rule: 外卖]
// [rule: 饿了么]
// [cron: 0 7,11,17 * * *]
var ele = "https://github.com/LJMX996/jd/raw/aaron/tmp/elm.png";
//图文消息
var content = image(ele) + "\n到饭点啦，微信扫码领饿了么20元无门槛饭票！！！";
var imType = ImType();
if (imType == "fake") {
    var groups = [{
        imType: "wx",
        groupCode: 25331963676,
    }]
    for (var i = 0; i < groups.length; i++) {
        groups[i]["content"] = content
        push(groups[i])
    }
} else {
    sendImage(ele)
}