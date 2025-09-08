---
title: 使用Edgeone Pages搭建Fuwari静态博客教程
published: 2025-07-28
updated: 2025-09-07
description: 分享本小窝的静态博客部署教程，使用Edgeone Pages搭建简洁流畅的Fuwari静态博客
image: ./images/eofuwari.png
tags: [Pages,Github,Blog]
category: 教程
---

# 准备材料

一个Github账号，Edgeone在本文有教最新获取方式，如果已经拥有Edgeone可以跳过获取教程

## 获取Edgeone

获取Edgeone本教程采用的国际站目前最简单的方式，您也可以在官方Discord服务器每工作日11/12/15/18/21整点会发送兑换码每天500个，并且兑换码可以用到中国站，下面开始教程

![图一](./images/Image_1753704377766.png)
首先访问[测速分享，解锁更多 EdgeOne 免费套餐](https://edgeone.ai/zh/get-free-plan)注册登录，登录以后点击*测速赢免费套餐*，等待一分钟

![图二](./images/Image_1753704375913.png)
测速完成就能看到这个页面，点击分享到X以及Facebook跳转再回来就能获取(可以不分享)


![图三](./images/Image_1753704373443.png)
到这个页面就获取成功了，可以放那里先进入下一段教程

## 创建模版仓库
![图四](./images/Image_1753704364746.png)
我们到Github上[Fuwari](https://github.com/saicaca/fuwari)的官方仓库，使用此仓库模版，[创建新仓库](https://github.com/new?template_name=fuwari&template_owner=saicaca)

![图五](./images/Image_1753704353167.png)
Repository name那里自定义一个喜欢的仓库名，描述选填、保持公共仓库，然后Create repository等待一会儿跳转

![图六](./images/Image_1753704355398.png)
如果你有赛博强迫症可以等待仓库 *lnitial commit √* 没有就当我没说qwq

## 部署Fuwari

![图七](./images/Image_1753704350919.png)
返回edgeone官网，进入右上角的*控制台*来到此页面，点击Pages*创建项目*的*通过导入Git仓库创建*

![图八](./images/Image_1753704348812.png)
点击Github，跳转授权

![图九](./images/Image_1753704346840.png)
到授权页面后可选，我这里就默认所有仓库了，然后点击*Save*就授权好了

![图十](./images/Image_1753704344825.png)
点击你刚创建模版的仓库名，然后可以进入下一段教程

![图十一](./images/Image_1753704327107.png)
Pages名称自动用了仓库名，如果你的域名进行了*ICP备案*就选*全球可用区(含中国大陆)*反之就选不含中国大陆，不影响使用

![图十二](./images/retouch_2025072820193516.png)
确保框架预设是Astro，命令从*npm*改为*pnpm*，然后就可以开始部署

![图十三](./images/Image_1753704324020.png)
当放礼花🎉后，构建部署那里完成就好啦

## 自定义域名(可选)
如果想要自定义域名，点击*项目设置*就能找到，如果你选的不含中国大陆可以直接绑定域名，如果选的含中国大陆需要[ICP备案](https://cloud.tencent.cn/document/product/243/97668)添加域名

> 到此本教程结束，希望这个喂饭级教程，能够帮助到您