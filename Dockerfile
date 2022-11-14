FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY syscalclient.jar syscalclient.jar
EXPOSE 4000
ENTRYPOINT exec java $JAVA_OPTS -jar syscalclient.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar syscalclient.jar
