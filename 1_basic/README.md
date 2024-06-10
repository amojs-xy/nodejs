### 什么是NodeJS
1. 运行在服务器上的JavaScript
2. 基于Chrome JavaScript的服务器程序运行时平台
3. 事件驱动I/O的服务端JavaScript环境
4. JS引擎使用Chrome V8引擎（运行速度快、效率高）

### 安装Node环境
1. 安装Node客户端
   - https://www.nodejs.com.cn/
   - 安装长期维护版
2. 终端执行node -v查看Node版本

### npm包管理工具
1. 安装Node客户端会自动安装npm包管理工具
2. 通过npm -v查看npm版本
3. 通过npm install / i xxx安装依赖
4. 通过npm uninstall xxx删除依赖
5. -S/--save用于安装开发和生产环境中需使用的依赖
6. -D/--save-dev用于安装开发环境中需使用的依赖
7. -G/--global用于安装全局使用的依赖

### npm初始化与package.json
1. 通过npm init初始化package.json
2. 认识package.json及相关内容请听之后的课程

### VSCode相关插件
1. terminal -> VSCode命令行工具
2. code runner -> 运行Node代码工具

### 运行NodeJS代码
1. 创建脚本文件并编写代码
2. 使用node index.js(脚本文件相对路径+名称)运行
3. 在脚本文件上右键Run Code运行

### 监听Node代码变化
1. npm install nodemon -G监听node代码变化的工具
2. npm init初始化生成package.json
3. scripts -> "dev": "nodemon ./index.js" 设置npm运行程序的命令
4. npm run dev 使用nodemon监听脚本文件变化

### Node环境中使用TypeScript
1. npm install typescript -G全局安装typescript依赖
2. tsc --init生成ts配置文件
3. npm install ts-node-dev -D安装ts代码变化监听工具
4. scripts -> "dev:ts": "ts-node-dev --respawn ./index.ts"

