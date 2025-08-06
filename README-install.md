# README-install.md - VeganSport Pro

Ce guide vous explique comment installer et configurer votre projet VeganSport Pro en 3 étapes simples.

## 🚀 Étape 1 : Déploiement du Site sur Netlify

Votre site est un projet React. Le déploiement est automatisé via Netlify.

### Pré-requis :
- Un compte GitHub
- Un compte Netlify (connecté à GitHub)

### Instructions :
1.  **Clonez ce repository** sur votre machine locale.
2.  **Naviguez** dans le dossier `nutrition-vegan-blog`.
3.  **Poussez le code** sur votre propre repository GitHub (si ce n'est pas déjà fait) :
    ```bash
    git remote set-url origin https://github.com/VOTRE_NOM_UTILISATEUR/vegansport-pro-blog.git
    git push -u origin main
    ```
4.  **Sur Netlify** :
    - Connectez-vous à votre tableau de bord.
    - Cliquez sur "Add new site" -> "Import an existing project" -> "GitHub".
    - Sélectionnez votre repository `vegansport-pro-blog`.
    - **Configurez les paramètres de build :**
        - `Branch to deploy`: `main`
        - `Base directory`: (laissez vide)
        - `Build command`: `npm run build`
        - `Publish directory`: `dist`
    - Cliquez sur "Deploy site".

Votre site sera en ligne en quelques minutes à une adresse comme `https://votrenom.netlify.app`.

## 🤖 Étape 2 : Configuration du Bot AI Viral (Twitter/X)

Ce bot Python automatise la promotion de vos articles sur Twitter (X).

### Pré-requis :
- Un compte développeur Twitter (X) avec des clés API.
- Python 3 installé.
- `pip install tweepy`

### Instructions :
1.  **Ouvrez le fichier `bot/bot.py`** dans ce package.
2.  **Remplacez les placeholders** par vos propres clés API Twitter (X) :
    ```python
    CONSUMER_KEY = "VOTRE_CONSUMER_KEY"
    CONSUMER_SECRET = "VOTRE_CONSUMER_SECRET"
    ACCESS_TOKEN = "VOTRE_ACCESS_TOKEN"
    ACCESS_TOKEN_SECRET = "VOTRE_ACCESS_TOKEN_SECRET"
    ```
3.  **Testez le bot localement** (il publiera 1 tweet) :
    ```bash
    cd bot
    python bot.py
    ```
    *Confirmez qu'un tweet a été publié sur votre compte Twitter (X).* C'est la preuve que le bot fonctionne.
4.  **Pour une automatisation continue**, vous pouvez héberger ce script sur un service gratuit comme PythonAnywhere (pour des exécutions planifiées) ou un VPS.

## 🔗 Étape 3 : Automatisation Avancée avec n8n (ou Make.com)

Pour une automatisation complète (publication d'articles, newsletter, etc.), nous utiliserons n8n (open-source et auto-hébergeable) ou Make.com (freemium).

### Pré-requis :
- Un compte n8n (cloud ou auto-hébergé) ou Make.com.

### Instructions (Exemple pour n8n) :
1.  **Connectez-vous** à votre instance n8n.
2.  **Créez un nouveau workflow.**
3.  **Utilisez les nœuds suivants :**
    - **HTTP Request** : Pour interagir avec l'API de Kimi K2 (si disponible) ou un service de génération de texte.
    - **Code** : Pour formater le contenu généré.
    - **HTTP Request** : Pour publier l'article sur votre site Netlify (via une API si vous en développez une, ou en mettant à jour le contenu via GitHub et Netlify).
    - **Email Send** : Pour envoyer la newsletter via Mailchimp/Brevo.
    - **Twitter** : Pour publier sur Twitter (en complément du bot.py ou en remplacement).

**Exemple de workflow :**
- Déclencheur : Planifié (tous les lundis)
- Action 1 : Demander à Kimi K2 un article sur un sujet X
- Action 2 : Publier l'article sur votre blog (via GitHub API -> Netlify)
- Action 3 : Envoyer une newsletter avec le nouvel article
- Action 4 : Publier un tweet sur le nouvel article

--- 

**🎉 Votre business en ligne est prêt !**

Ce package contient tout le nécessaire pour lancer et automatiser votre blog VeganSport Pro. Suivez ce guide pas à pas pour mettre en place chaque composant.

**Bonne chance !**

--- 

**Contenu du ZIP :**
- `nutrition-vegan-blog/` : Le code source de votre site React.
- `e-books/` : Vos e-books PDF (`Guide_Nutrition_Vegan_Sport_Halal.pdf`, `Pack_Smoothies_Proteines_Halal.pdf`).
- `bot/` : Le script Python `bot.py` pour la promotion Twitter.
- `seo-files/` : Fichiers SEO (`schema-org.json`).
- `docs/` : Documentation (`backlinks-strategy.md`).
- `README-install.md` : Ce fichier.

**API Tokens à remplir :**
- Twitter (X) API keys dans `bot/bot.py`
- Mailchimp/Brevo API keys (pour n8n/Make.com, si vous utilisez ces plateformes pour la newsletter)
- Kimi K2 API key (si vous utilisez une API pour la génération de contenu directe, non incluse dans ce package car Kimi K2 est un modèle open-source)

