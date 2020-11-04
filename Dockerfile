FROM tomcat:8.5.50-jdk8-openjdk
COPY target/dashboard-1.0.war /usr/local/tomcat/webapps/ROOT.war
COPY target/dashboard-1.0.war /usr/local/tomcat/webapps/dashboard.war
CMD ["catalina.sh","run"]

