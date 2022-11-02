# 基于tomcat脚本

## 一、编译

```bash
# build.sh
DATE=`date "+%Y-%m-%d-%H-%M-%S"`
PROJECT=xxxx
echo "----------svn checkout ------------"+$DATE
cd $svn/$PROJECT
rm -rf trunk
git clone -b feature-xxx http://用户名:密码@ip/$PROJECT.git trunk
echo "----------mvn build ------------"
cd ./trunk
mvn clean install -Dmaven.test.skip=true -U
echo "----------shut down tomcat------------"
cd $tomcat/apache-tomcat-$PROJECT/bin
./shutdown.sh
tomcatID=`ps -ef | grep 'tomcat'  | grep 'gam' | grep -v 'grep' | awk '{print $2}'`
if [ -n "$tomcatID" ];then
echo 'current tomcat pid is:'$tomcatID
kill -9 $tomcatID
else
echo "cuurent application  not start"
fi
cd ../webapps
cp $PROJECT.war $PROJECT.war.$DATE
rm -rf $PROJECT.war
rm -rf $PROJECT
cp $svn/$PROJECT/trunk/$PROJECT.web/target/$PROJECT.war $tomcat/apache-tomcat-$PROJECT/webapps
cd $tomcat/apache-tomcat-$PROJECT/bin
echo "----------startup tomcat------------"
./startup.sh &

```

## 二、重启

```bash
# restart.sh
PROG_NAME=tomcat
PROG_START=startup.sh
DATE=`date "+%Y-%m-%d-%H-%M-%S"`
PROJECT=XXXX
PROG_NAME=tomcat
PROG_START=startup
echo "------------------auto start tomcat-------------"+$DATE
while true
 do
 echo "---------------query tomcatId-------------"
 PROG_NUM=`ps -ef | grep $PROG_NAME| grep 'gam' | grep -v grep | wc -l`
 echo "------output tomcat----"+$PROG_NUM
  if [ $PROG_NUM -lt 1 ]; then
    /usr/local/XXXX/build.sh 
    echo "start success"
  fi
  sleep 5
done
```

