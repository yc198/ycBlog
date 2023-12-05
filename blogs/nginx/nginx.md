---
title: ngnix配置与安装
date: 2023-12-5
sidebar: 'auto'
tags:
 - nginx
# categories 文章所属类别，这个是一个数组，必填项
categories:   
 -  nginx
---

## 1. 基本配置
> 登录服务器时，请使用匹配的密钥进行登录。

## 2. 常用方法
1. `ls`: 查看当前目录下的所有文件
2. `cd ~`: 进入用户目录
3. `cd ..`: 返回上一级目录
4. `mkdir [文件夹名]`: 创建新文件夹
5. `cd nginx`: 进入nginx目录
6. `wget [链接]`: 使用wget下载文件
7. `tar -zxvf [文件名]`: 解压tar.gz文件
8. 进入解压后的nginx目录

## 3. 安装与运行
```sh
apt update # 更新软件源
```
1. 安装 PCRE 库

```sh
apt-get install libpcre3 libpcre3-dev
```

2. 安装 zlib 压缩和解压缩依赖

```sh
apt-get install zlib1g zlib1g-dev
```

3. 安装 SSL（安全的加密的套接字协议层）依赖

```sh
apt-get install openssl openssl
```

4. 安装 SSL 开发库

```sh
apt-get install libssl-dev
```

5. 创建临时目录

```sh
mkdir /var/temp/nginx -p
```

6. 进入nginx目录，并进行配置
```sh
./configure \
--prefix=/usr/local/nginx \
--pid-path=/var/run/nginx/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi

```

```sh
- `--prefix=/usr/local/nginx`: 指定nginx的安装路径为`/usr/local/nginx`，这是nginx的默认安装路径，你可以根据需要修改。
- `--pid-path=/var/run/nginx/nginx.pid`: 指定nginx主进程的PID文件路径，用于存储nginx主进程的进程ID。
- `--lock-path=/var/lock/nginx.lock`: 指定nginx用于实现进程间互斥锁的文件路径，用于避免多个nginx实例同时修改共享资源。
- `--error-log-path=/var/log/nginx/error.log`: 指定nginx的错误日志文件路径，记录nginx的运行时错误信息。
- `--http-log-path=/var/log/nginx/access.log`: 指定nginx的访问日志文件路径，记录请求的访问信息。
- `--with-http_gzip_static_module`: 启用nginx的gzip_static模块，用于提供预压缩的静态文件，提高传输效率。
- `--http-client-body-temp-path=/var/temp/nginx/client`: 指定存放客户端请求体临时文件的路径，用于存储客户端上传的临时数据。
- `--http-proxy-temp-path=/var/temp/nginx/proxy`: 指定nginx代理模块使用的临时文件路径，存储代理模块的临时数据。
- `--http-fastcgi-temp-path=/var/temp/nginx/fastcgi`: 指定FastCGI模块使用的临时文件路径，存储FastCGI模块的临时数据。
- `--http-uwsgi-temp-path=/var/temp/nginx/uwsgi`: 指定uWSGI模块使用的临时文件路径，存储uWSGI模块的临时数据。
- `--http-scgi-temp-path=/var/temp/nginx/scgi`: 指定SCGI模块使用的临时文件路径，存储SCGI模块的临时数据。
```
>这些参数的配置主要是为了优化nginx的性能和功能，确保nginx能够正确地处理各种请求和数据。这样的配置是根据实际使用场景和需求来定制的，可以根据具体情况进行调整。

7. 编译并安装

```sh
make && make install
```

8. 启动nginx服务

```sh
./nginx      # 启动
./nginx -s stop     # 停止
./nginx -s reload   # 重新加载
```

> 使用 `vim` 编辑 `nginx/conf/nginx.conf` 文件。在编辑模式下（按 `i` 或 `a` 键），对于Vue项目的`history`模式，确保在`location`部分添加以下配置：

```nginx
location / {
    root /usr/local/nginx/html/public; # 设置根路径，根据实际情况调整
    index index.html index.htm;
    try_files $uri $uri/ /index.html;
}
```
同时，确保安全组已放行相关端口。

## 4. 打包发行 修改 nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/local/nginx/html/public; # 根据实际情况调整

    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 额外的配置
    # charset koi8-r;  # 如果不需要字符集转换，可以注释掉
    # access_log  /var/log/nginx/host.access.log main;  # 根据需要调整路径
}
```

## 5. 额外补充

确保安全组已放行相关端口（通常是80端口），以确保正常访问nginx服务。
### 5.1.理解与完善

配置nginx需要细心确保路径和命令的准确性。每个步骤都很重要：

- **路径设置**：在配置nginx时，路径非常关键。确保路径设置准确，指向正确的目录以确保nginx能找到文件和日志。
- **命令操作**：编译和安装nginx需要一系列命令操作。确保按照指南中的命令逐步执行，不要忽略任何步骤。
- **配置文件调整**：修改`nginx.conf`时，`location`部分的设置特别重要。针对特定项目（例如Vue的`history`模式），确保正确的`try_files`指令可以使URL正常解析。
- **安全设置**：确保在使用nginx时，安全组已经放行相关端口，这样才能让用户访问你的服务。
