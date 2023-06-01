**Question 1 :** 
L'interopérabilité permet à des systèmes ou des technologies différents de communiquer et d'échanger des informations, en utilisant des protocoles et des formats de données communs, sans entraver ou altérer leur fonctionnement respectif.

**Question 2 :**
Le Web est un bon exemple d'interopérabilité car il permet aux utilisateurs d'accéder et d'échanger des informations à travers différentes plateformes, navigateurs et dispositifs, indépendamment des technologies sous-jacentes.

**Question 3 :** 
Les trois technologies de base du Web inventées en 1989 par Tim Berners-Lee sont : 
- HTTP (Hypertext Transfer Protocol) : C'est un protocole de communication qui permet le transfert de données entre un client et un serveur Web. Il est utilisé pour demander et recevoir des ressources telles que des pages Web, des images ou des fichiers. 
- HTML (Hypertext Markup Language) : c'est un langage de balisage utilisé pour structurer le contenu d'une page en utilisant des balises qui définissent la signification du texte et des éléments graphiques.
- URI/URL (Uniform Resource Identifier/Locator) : système d'identification et d'adressage des ressources en ligne.
Un URI est une chaîne de caractères utilisée pour identifier de manière unique une ressource sur un réseau, qui peut être utilisé pour identifier différents types de ressources. Un URI peut prendre différentes formes, comme les URL. Quant à une URL, c'est un type spécifique d'URI qui indique l'emplacement d'une ressource sur un réseau. Elles sont composées de plusieurs parties :  
    * Protocole qui spécifie la méthode utilisée pour accéder à la ressource (HTTP, HTTPS, FTP).
    * Nom d'hôte : l'adresse du serveur où se trouve la ressource.
    * Chemin : le chemin d'accès spécifique à la ressource sur le serveur.
    * Paramètres : des informations supplémentaires qui peuvent être passées à la ressource.
    * Fragment : une partie spécifique de la ressource à afficher.

**Question 4 :** 
Deux approximations ou mauvaises pratiques relatives à la RFC HTTP dans la documentation du service web fictif "mymarmiton", ainsi que les corrections correspondantes : Utilisation incorrecte de la méthode GET : Selon la RFC HTTP, l'utilisation de la méthode GET dans une requête ne devrait pas modifier l'état du serveur. Cependant, dans le cas présent, la requête GET est utilisée pour obtenir la liste des ingrédients d'un plat identifié par son ID. Une meilleure pratique serait d'utiliser la méthode HTTP appropriée pour récupérer des données sans modifier l'état du serveur, telle que : GET /recipe/{id_recipe}/ingredients. Mauvaise utilisation des paramètres de requête : La documentation indique l'utilisation du paramètre "format" dans l'URL pour spécifier le format de la réponse : JSON. Selon la RFC HTTP, les paramètres de requête ne doivent pas influencer le comportement du serveur lors de la récupération des ressources. Une correction serait d'utiliser les en têtes HTTP pour spécifier le format de la réponse, par exemple en utilisant l'en-tête "Accept: application/json" dans la requête GET /recipe/{id_recipe}/ingredients. 
Correction proposée : GET /recipe/{id_recipe}/ingredients Accept: application/json 

**Question 5 :**
Méthode HTTP : GET URL : /actors/{actor_id}/movies 
Cette route permettra de récupérer la liste des films associés à un acteur spécifié par son ID. L'ID de l'acteur sera passé en tant que paramètre dans l'URL. Par exemple, pour récupérer les films de l'acteur avec l'ID 123, l'URL serait /actors/123/movies. La réponse de cette requête devrait contenir les détails des films associés à l'acteur, tels que leur titre, date de sortie, genre, etc., au format JSON. En mettant en place cette route conformément à cette spécification, je pourrai obtenir la liste des films d'un acteur spécifique dans le cadre du développement du client web du service MyIMDB.

**Question 6 :** 
La négociation de contenu server-driven est un processus par lequel un serveur web et un client communiquent pour déterminer la meilleure représentation du contenu à envoyer en réponse à une requête. Le client indique ses préférences et capacités, puis le serveur choisit la version de la ressource qui convient le mieux. Cela permet d'adapter la réponse aux besoins du client, comme le format ou la langue.