# jd_scripts
> * 删除脚本内inviteCodes
> * 剔除内置助力链接
> * 其他未修改，用法与原版相同

#使用方法
##将下面这个发给机器人，一次

> * /cmd ql repo https://github.com/LJMX996/jd.git "pull.sh" "" "" "aaron"

##去面板添加这三个任务

> * 名称:更新仓库
> * 定时:3,33 * * * *
> * 命令:task /ql/repo/LJMX996_jd_aaron/pull.sh

> * 名称:依赖安装
> * 定时: 10 13 * * * *
> * 命令:task /ql/repo/LJMX996_jd_aaron/yilai.sh
> * 只需要运行一次

> * 名称:2.8.1助力导出
> * 定时: 10 0-23/4 * * * *
> * 命令:task /ql/repo/LJMX996_jd_aaron/code.sh

###2.8.1自动互助提示
> * 编辑config下 → task_before.sh文件
> * 内容如下
> * #!/usr/bin/env bash

if [[ $(ls $dir_code) ]]; then
    latest_log=$(ls -r $dir_code | head -1)
    . $dir_code/$latest_log
fi


#ninja安装参考
机器人命令如下

> * 名称:启动ninja
> * 命令:nohup task /ql/repo/LJMX996_jd_aaron/install-ninja.sh

下面命令不要使用，本人自用
会增加我的推送二维码进去
> * 名称:更新ninja
> * 命令:nohup task /ql/repo/LJMX996_jd_aaron/update-ninja.sh


