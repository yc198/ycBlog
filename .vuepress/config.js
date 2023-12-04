module.exports = {
  "title": "yc",
  "description": "",
  "dest": "public",
  "locales": {
    "/" : {
      lang : "zh-CN"
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    subSidebar: 'auto',
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "其他链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        // {
        //   title: '一些文件',    // 标题信息
        //   collapsable: true,   // 是否可折叠
        //   children: [        // 该块内容对应的所有链接
        //     "",    
        //     "theme",  
        //     "plugin", 
        //     "api"    
        //   ]
        // }
        "",    
        "theme",  
        "plugin", 
        "api"    
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "本博客由vuepress-theme-reco驱动",
        "link": "https://vuepress-theme-reco.recoluan.com/"
      },
      {
        "title": "sundaycloud",
        "desc": "sundaycloud",
        "link": "https://sundaycloud.top/"
      },
      {
        "title": "XiaoFang",
        "desc": "XiaoFang",
        "link": "http://47.120.49.133/"
      }
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "yc",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2023"
  },
  "markdown": {
    "lineNumbers": true
  }
  
}