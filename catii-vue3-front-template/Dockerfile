# node
FROM node:14-alpine as build-stage
# 项目文件
COPY  ./ /app/front
# 构建dist
RUN cd /app/front \
    &&  npm install \
    &&  npm run build \
    && rm -rf ./node_modules

# nginx
FROM nginx:1.21.0-alpine as production-stage
# nginx配置
COPY ./env_conf/ /etc/nginx/conf.d/
# 部署文件
COPY --from=build-stage /app/front/dist /app/front/dist

# 端口
EXPOSE 80
# 启动
CMD ["nginx", "-g", "daemon off;"]