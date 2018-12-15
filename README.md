# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

###创建一个控制器
```
adonis make:controller + '控制器名称‘
```

###创建一个视图
```
adonis make:view + '视图名称‘
```
###安装数据库
```
adonis install sqlite3
```
###创建数据表并生成
```
adonis make:migration + '数据表'
adonis migration:run
```

###打开命令交互模式
```
adonis repl
```

