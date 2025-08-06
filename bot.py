import tweepy
import time
import random

# --- Configuration (à remplir par l'utilisateur) ---
# Clés d'API Twitter (X)
CONSUMER_KEY = "VOTRE_CONSUMER_KEY"
CONSUMER_SECRET = "VOTRE_CONSUMER_SECRET"
ACCESS_TOKEN = "VOTRE_ACCESS_TOKEN"
ACCESS_TOKEN_SECRET = "VOTRE_ACCESS_TOKEN_SECRET"

# Proxies (optionnel, pour éviter les blocages IP)
# Format: user:pass@ip:port
PROXIES = [
    # "user1:pass1@192.168.1.1:8080",
    # "user2:pass2@192.168.1.2:8080",
]

# --- Prompts pour Kimi K2 (exemples) ---
# Ces prompts seront utilisés pour générer des réponses ou des articles courts
KIMI_K2_PROMPTS = [
    "Génère un tweet engageant sur les bienfaits des protéines végétales pour les sportifs d'endurance, sans gluten ni lactose. Inclure un appel à l'action doux vers notre blog.",
    "Rédige un court paragraphe sur l'importance de l'hydratation post-entraînement pour les athlètes vegan. Termine par une question pour engager la conversation.",
    "Crée une recette rapide de smoothie protéiné vegan et halal, avec une liste d'ingrédients et un lien vers notre guide complet.",
    "Explique pourquoi les dattes sont un excellent carburant pour les sportifs d'endurance vegan. Mentionne notre blog pour plus de conseils."
]

# --- Mots-clés cibles pour les hashtags ---
TARGET_KEYWORDS = [
    "#veganprotein",
    "#plantbasedgains",
    "#vegantrail",
    "#nutritionvegan",
    "#sportvegan",
    "#sansgluten",
    "#sanslactose",
    "#halalnutrition",
    "#recettevegan",
    "#endurance"
]

# --- URL de votre blog ---
BLOG_URL = "https://vegansport-pro.netlify.app/"

# --- Fonctions du Bot ---

def get_random_proxy():
    if PROXIES:
        return {"http": random.choice(PROXIES), "https": random.choice(PROXIES)}
    return None

def get_kimi_k2_response(prompt):
    # Cette fonction simule une réponse de Kimi K2.
    # En réalité, vous intégreriez ici l'API de Kimi K2.
    # Pour le test local, nous utilisons une réponse pré-définie.
    responses = {
        KIMI_K2_PROMPTS[0]: f"Boostez votre endurance avec les protéines végétales ! 💪 Découvrez nos recettes sans gluten ni lactose pour des performances optimales. Plus de conseils sur {BLOG_URL} #veganprotein #plantbasedgains",
        KIMI_K2_PROMPTS[1]: f"L'hydratation post-entraînement est clé pour les athlètes vegan ! 💧 Comment optimisez-vous votre récupération après l'effort ? #nutritionvegan #sportvegan",
        KIMI_K2_PROMPTS[2]: f"Smoothie protéiné vegan & halal express ! 🍌 Ingrédients: banane, protéine de pois halal, lait d'amande, beurre de cacahuète. Recette complète sur {BLOG_URL} #recettevegan #halalnutrition",
        KIMI_K2_PROMPTS[3]: f"Les dattes, le secret d'énergie des sportifs vegan ! 🚀 Source naturelle de glucides pour l'endurance. Plus de conseils sur {BLOG_URL} #vegantrail #endurance"
    }
    return responses.get(prompt, "Contenu généré par Kimi K2. Visitez notre blog pour plus d'infos !")

def post_tweet(api, content):
    try:
        api.update_status(content)
        print(f"Tweet publié avec succès : {content}")
        return True
    except tweepy.TweepyException as e:
        print(f"Erreur lors de la publication du tweet : {e}")
        return False

def run_bot():
    print("Démarrage du bot viral...")

    # Authentification Twitter
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

    # Utilisation du proxy si configuré
    # api = tweepy.API(auth, proxy=get_random_proxy() if PROXIES else None)
    api = tweepy.API(auth) # Pour le test local, sans proxy

    # Test de la connexion
    try:
        api.verify_credentials()
        print("Authentification Twitter réussie !")
    except tweepy.TweepyException as e:
        print(f"Erreur d'authentification Twitter : {e}")
        print("Veuillez vérifier vos clés d'API.")
        return

    tweets_sent = 0
    max_tweets_per_day = 50
    interval_seconds = 60 # 1 minute entre chaque tweet

    while tweets_sent < max_tweets_per_day:
        prompt = random.choice(KIMI_K2_PROMPTS)
        tweet_content = get_kimi_k2_response(prompt)
        
        # Ajout d'un hashtag aléatoire si le tweet n'en contient pas déjà assez
        if sum(1 for char in tweet_content if char == '#') < 2:
            tweet_content += " " + random.choice(TARGET_KEYWORDS)

        if post_tweet(api, tweet_content):
            tweets_sent += 1
            print(f"Tweets envoyés aujourd'hui : {tweets_sent}/{max_tweets_per_day}")
        
        if tweets_sent < max_tweets_per_day:
            time.sleep(interval_seconds)

    print("Limite de tweets atteinte pour aujourd'hui. Le bot s'arrête.")

if __name__ == "__main__":
    run_bot()


