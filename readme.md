## 简介
dubbo nodejs 使用案例，注册中心使用 zookeeper。


### zookeeper docker 单机安装
```sh
docker run -d -e TZ="Asia/Shanghai" -p 2181:2181 -v $PWD/data:/data --name zookeeper --restart always zookeeper
```