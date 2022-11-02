# Apache Shiro

## 一、shiro架构

### 1. Subject

> 登录的当前用户。`Subject`绑定到`SecurityManager`，由`SecurityManager`进行统一管理。

### 2. SecurityManager

> 管理所有登录用户对象

2.1 shiro默认实现

- Authentication
- Authorization
- Session Management
- Cache Management
- [Realm](http://shiro.apache.org/realm.html) coordination
- Event propagation
- “Remember Me” Services
- Subject creation
- Logout and more.

### 3. Realms[Authenticator和Authorizer]

> 访问所有安全数据【包括角色、权限等】

 类似一个特定于安全的DAO，封装了数据源的连接细节，在需要时允许shiro使用这些数据，需要指定至少一个用于身份验证【`authentication`】或授权【`authorization`】的Realm，配置到SecurityManager

#### 3.1 Authenticator

> 负责执行和响应用户身份验证(登录)尝试的组件，授权

##### 3.1.1 Authentication Strategy【认证策略】

- 无状态组件【身份验证时需要4次交互】
  1. 在调用任何Realms之前
  2. 在调用单个Realm的getAuthenticationInfo方法之前
  3. 在调用单个Realm的getAuthenticationInfo方法之后
  4. 在所有的Realms被调用之后
- 自定义策略可继承`AbstractAuthenticationStrategy`

##### 3.1.2 Principals。登录账号标识属性【用户名、邮箱等】

##### 3.1.3 Credentials。登录账号密码

##### 3.1.4 流程

<img src=".\image\ShiroAuthenticationSequence.png"  />

- 收集登录账号

  `UsernamePasswordToken token = new UsernamePasswordToken(username, password);`

- 提交登录账号信息

  通过用户的主体和凭证构建`AuthenticationToken`实例

  ```java
  Subject currentUser = SecurityUtils.getSubject();
  currentUser.login(token);
  ```

  `ModularRealmAuthenticator`支持单个Realm

- 处理登录事件

  ```java
  try {
      currentUser.login(token);
  } catch ( UnknownAccountException uae ) { ...
  } catch ( IncorrectCredentialsException ice ) { ...
  } catch ( LockedAccountException lae ) { ...
  } catch ( ExcessiveAttemptsException eae ) { ...
  } ... catch your own ...
  } catch ( AuthenticationException ae ) {
      //unexpected error?
  }
  ```

- 退出登录事件【web应用在调用退出登录事件后，需跳转到新的页面来保证应用程序的安全性】

  `currentUser.logout()`

##### 3.1.5 参考资料

1. [authentication](http://shiro.apache.org/authentication.html)

#### 3.2 Authorizer

> 访问控制

##### 3.2.1 核心

1. 角色
2. 权限。资源和行为，权限只反应行为，不能指定谁可以这么做
3. 用户

##### 3.2.2 流程

![Authorization](.\image\ShiroAuthorizationSequence.png)

##### 3.2.3 参考资料

1. [permissions](http://shiro.apache.org/permissions.html)



### 4. SessionManager【会话管理】

> 管理session的生命周期

#### 4.1 SessionDAO

> 提供对session的CRUD功能

#### 4.2 持久化

1. `EnterpriseCacheSessionDAO`。

#### 4.3 参考资料

1. [shiro session文档](http://shiro.apache.org/session-management.html)

### 5. CacheManager【缓存管理】

> 为身份验证、角色权限、会话等提供缓存支持

### 6.Cryptography

> 用于对密码进行编解码处理

## 四、资料整理

1. [apache shiro](http://shiro.apache.org/architecture.html)

