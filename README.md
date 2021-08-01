# jd_scripts
> * 删除脚本内inviteCodes
> * 剔除内置助力链接
> * 其他未修改，用法与原版相同

#使用方法
##将下面这个发给机器人，一次

> * /cmd ql repo https://github.com/LJMX996/jd.git "pull.sh" "" "" "aaron"

##去面板添加这两个任务

> * 名称:更新仓库
> * 定时:3,33 * * * *
> * 命令:bash /ql/repo/LJMX996_jd_aaron/pull.sh

> * 名称:依赖安装
> * 定时: 10 13 * * * *
> * 命令:bash /ql/repo/LJMX996_jd_aaron/yilai.sh
> * 只需要运行一次
