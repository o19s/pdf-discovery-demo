FROM centos:7
RUN yum install -y epel-release && yum clean all
RUN yum update -y && yum clean all
RUN yum install -y yum-utils && yum clean all
RUN yum install -y wget && yum clean all

MAINTAINER OpenSource Connections <ops@opensourceconnections.com>

# Note the `yum clean all`. This clears caches and keeps the image small
RUN yum install -y nginx; yum clean all
#RUN rm /etc/nginx/conf.d/*

COPY nginx.conf /etc/nginx/nginx.conf

# Copy over a foreground nginx configuration
COPY vhost.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
EXPOSE 443

# Run nginx
CMD /usr/sbin/nginx -c /etc/nginx/nginx.conf
