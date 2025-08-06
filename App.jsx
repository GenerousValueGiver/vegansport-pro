import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Heart, 
  Zap, 
  Users, 
  BookOpen, 
  Mail, 
  Star, 
  Clock, 
  ChefHat,
  Dumbbell,
  Leaf,
  ArrowRight,
  CheckCircle,
  Download,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'
import heroImage from './assets/hero-image.jpg'
import smoothieImage from './assets/smoothie-image.jpg'
import proteinSmoothie from './assets/protein-smoothie.jpg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [orderForm, setOrderForm] = useState({ name: '', email: '', product: '' })
  const [showOrderForm, setShowOrderForm] = useState(false)

  // Simulation d'articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "10 Recettes Post-Entraînement Sans Gluten pour Sportifs Vegan",
      excerpt: "Découvrez des recettes riches en protéines végétales, parfaites pour la récupération après l'effort, sans gluten ni lactose.",
      image: smoothieImage,
      readTime: "8 min",
      category: "Recettes",
      date: "2025-01-28"
    },
    {
      id: 2,
      title: "Guide Complet des Protéines Végétales pour l'Endurance",
      excerpt: "Tout ce que vous devez savoir sur les sources de protéines végétales pour optimiser vos performances d'endurance.",
      image: proteinSmoothie,
      readTime: "12 min",
      category: "Nutrition",
      date: "2025-01-27"
    },
    {
      id: 3,
      title: "Plan de Repas 7 Jours : Marathon Vegan Sans Allergènes",
      excerpt: "Un plan nutritionnel complet pour préparer votre marathon, adapté aux intolérances alimentaires.",
      image: heroImage,
      readTime: "15 min",
      category: "Plans",
      date: "2025-01-26"
    }
  ]

  // Produits numériques
  const digitalProducts = [
    {
      id: 1,
      title: "Guide Nutrition Vegan Sport",
      description: "50 recettes + plans de repas + conseils de récupération",
      price: "19,99€",
      features: ["50 recettes testées", "Plans de repas 7 jours", "Liste de courses", "Conseils récupération"]
    },
    {
      id: 2,
      title: "Pack Smoothies Protéinés",
      description: "25 recettes de smoothies riches en protéines végétales",
      price: "12,99€",
      features: ["25 recettes smoothies", "Calculs nutritionnels", "Variantes sans allergènes", "Guide des superaliments"]
    }
  ]

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Ici on intégrerait avec Mailchimp ou un service d'email
    }
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    // Ici on enverrait l'email avec les coordonnées bancaires N26
    alert(`Commande reçue ! Vous allez recevoir un email avec les coordonnées de virement pour ${orderForm.product}`)
    setShowOrderForm(false)
    setOrderForm({ name: '', email: '', product: '' })
  }

  const openOrderForm = (productTitle) => {
    setOrderForm({ ...orderForm, product: productTitle })
    setShowOrderForm(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">VeganSport Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors">Accueil</a>
              <a href="#articles" className="text-gray-700 hover:text-green-600 transition-colors">Articles</a>
              <a href="#produits" className="text-gray-700 hover:text-green-600 transition-colors">Guides</a>
              <a href="#newsletter" className="text-gray-700 hover:text-green-600 transition-colors">Newsletter</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Favoris
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Zap className="h-3 w-3 mr-1" />
                  Nutrition Optimisée
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Nutrition Végétalienne pour 
                  <span className="text-green-600"> Sportifs d'Endurance</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Découvrez des recettes et conseils nutritionnels spécialement conçus pour les sportifs vegan 
                  avec intolérances au gluten et lactose. Optimisez vos performances naturellement.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Découvrir les Recettes
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Guide Gratuit
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Recettes testées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10k+</div>
                  <div className="text-sm text-gray-600">Sportifs accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Nutrition végétalienne pour sportifs" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Dumbbell className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Performance +25%</div>
                    <div className="text-sm text-gray-600">Avec notre méthode</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles de Blog */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Derniers Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conseils nutritionnels, recettes et stratégies pour optimiser vos performances sportives 
              avec une alimentation 100% végétale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-green-50">
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Numériques */}
      <section id="produits" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Guides Nutritionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des guides complets pour transformer votre alimentation et booster vos performances sportives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {digitalProducts.map((product) => (
              <Card key={product.id} className="relative overflow-hidden border-0 shadow-xl bg-white">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-bl-lg">
                  <span className="font-bold">{product.price}</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-gray-900">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
                    onClick={() => openOrderForm(product.title)}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Commander Maintenant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
            <Mail className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Recevez nos meilleures recettes
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Chaque semaine, découvrez de nouvelles recettes et conseils nutritionnels 
              directement dans votre boîte mail.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-gray-900"
                  required
                />
                <Button type="submit" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  S'abonner
                </Button>
              </form>
            ) : (
              <div className="bg-white/20 rounded-lg p-6 max-w-md mx-auto">
                <CheckCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Merci pour votre inscription !</h3>
                <p className="opacity-90">Vous recevrez bientôt nos meilleures recettes.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <h3 className="text-xl font-bold">VeganSport Pro</h3>
              </div>
              <p className="text-gray-400">
                Votre guide pour une nutrition végétalienne optimisée pour le sport d'endurance.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#accueil" className="hover:text-green-400 transition-colors">Accueil</a></li>
                <li><a href="#articles" className="hover:text-green-400 transition-colors">Articles</a></li>
                <li><a href="#produits" className="hover:text-green-400 transition-colors">Guides</a></li>
                <li><a href="#newsletter" className="hover:text-green-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Catégories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">Recettes</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Nutrition</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Entraînement</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Récupération</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@vegansportpro.com</li>
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>CGV</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VeganSport Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modal de commande */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Commander {orderForm.product}</h3>
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <Input
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={orderForm.email}
                  onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  Après validation, vous recevrez un email avec les coordonnées de virement N26. 
                  Votre guide sera envoyé dès réception du paiement (1-2 jours).
                </p>
              </div>
              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                  Valider la commande
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1"
                >
                  Annuler
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

