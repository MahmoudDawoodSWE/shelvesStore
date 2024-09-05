FROM node:latest

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV

RUN if [ "$NODE_ENV" != "production" ]; then \
        echo "Installing dependencies for non-production environment"; \
        npm install --legacy-peer-deps; \
    else \
        echo "Skipping dependencies installation for production"; \
    fi

COPY . ./  

RUN if [ "$NODE_ENV" = "production" ]; then npm install -g serve; fi
# RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; then serve -s build; else npm start; fi