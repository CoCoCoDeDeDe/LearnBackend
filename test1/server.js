const express = require('express');

// 引入 express 模块
// 创建 express 应用实例
const app = express();
// 定义服务器端口
const port = 8989;


app.get('/', (req, res) => {
  // 当客户端请求 / 时，返回一个 JSON 对象，包含客户端发来的请求的方法、URL、请求头和查询参数等信息，并将其作为响应体发送给客户端。
  const requestInfo = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query
  };

  /**
   * res.json()类似于res.send(),都会将对象转换为JSON字符串并设置响应头。
   *  但是，res.json()还会设置响应头Content-Type为application/json,
   *  而res.send()则不会设置响应头Content-Type。
   *  因此，在使用res.json()时，客户端会自动将响应体解析为JSON对象，
   *  而在使用res.send()时，客户端需要手动解析响应体为JSON对象。
   */
  res.json(
    {
      "code": 0,
      "msg": "success",
      "data": requestInfo
    }
  );
});

// 定义 /user 路径的路由，当访问 /user 路径时返回 "User Info"
app.get('/user', (req, res) => {
  res.send('User Info');
});

app.get('/start', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>Start Button</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #000;
        }

        button {
          background-color: #00ffcc;
          border: none;
          border-radius: 8px;
          color: #000;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          padding: 16px 32px;
          position: relative;
          transition: all 0.2s ease;
          box-shadow: 0 0 20px #00ffcc, 0 0 40px #00ffcc, 0 0 60px #00ffcc;
        }

        button:hover {
          background-color: #00ccaa;
          box-shadow: 0 0 30px #00ccaa, 0 0 50px #00ccaa, 0 0 70px #00ccaa;
        }

        button:active {
          transform: translateY(4px);
          box-shadow: 0 0 10px #00ccaa, 0 0 20px #00ccaa, 0 0 30px #00ccaa;
        }
      </style>
    </head>
    <body>
      <a href="/" style="text-decoration: none;"><button>start</button></a>
    </body>
    </html>
  `);
});

// 启动服务器并监听指定端口
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});




