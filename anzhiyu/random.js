var posts=["2023/06/29/EngStudyPlan/","2022/09/30/My first Blog/","2022/10/15/aboutMyC/","2022/10/03/TEST/","2021/10/08/hole for me/","2023/07/09/iPadCase/","2023/09/14/iPadUse/","2022/10/12/nightsky/","2022/11/08/myLife/","2021/09/02/setting blog/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};