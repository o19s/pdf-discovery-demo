FROM nginx:stable

COPY nginx.conf /etc/nginx/nginx.conf

# Copy over a foreground nginx configuration
COPY vhost.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
EXPOSE 443
