# Utiliser une image légère avec Node.js 18
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers package.json pour utiliser le cache Docker
COPY package*.json ./

# Installer toutes les dépendances (dev + prod)
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 5000
EXPOSE 3000

# Démarrer le serveur en mode développement
CMD ["npm", "run", "dev"]

