<template>
  <div class="cv__container">

    <div class="cv__entete cv__bloc">
      <h2>Curriculum Vitæ</h2>
    </div>

    <div class="cv__experiences cv__bloc">
      <h3>Expériences professionelles</h3>
      <div class="cv__bloc__item">
        <div class="bloc__interne">
          <div class="cv__experience">
            <p class="cv__date">2016-2020</p>
            <p class="cv__experience__poste">Technicien en téléphonie mobile.</p>
            <ul>
              <li>Réparation et remise à neuf de téléphone mobiles (Apple, Samsung)</li>
              <li>Gestion du service SWAP Apple</li>
            </ul>
            <p class="cv__lieu">Telstore. Le Loroux Bottereau (44)</p>
          </div>
          <div class="cv__experience">
            <p class="cv__date">2015-2016</p>
            <p class="cv__experience__poste">Technicien codification en électronique.</p>
            <ul>
              <li>Gestion de la base de composants SAP</li>
              <li>Codifications des nouveaux produits clients</li>
              <li>Traitement des PCN (Product Change Notification)</li>
            </ul>
            <p class="cv__lieu">Lacroix Electronics. St Pierre Monlimart (49)</p>
          </div>
          <div class="cv__experience">
            <p class="cv__date">2012-2015</p>
            <p class="cv__experience__poste">Technicien en Télécommunications.</p>
            <ul>
              <li>Déploiement et maintenance de sites GSM, TNT et FM</li>
              <li>Maintenance pylônes</li>
              <li>Audits de sites, visites techniques</li>
            </ul>
            <p class="cv__lieu">ITAS Ouest. Thouaré-sur-loire (44).</p>
            <p class="cv__lieu">Groupe SNEF télécom. Cuincy (59).</p>
            <p class="cv__lieu">Groupe CIRCET. Arras (62).</p>
          </div>
        </div>

      </div>
    </div>

    <div class="cv__formation cv__bloc">
      <h3>Formation</h3>
      <div class="cv__bloc__item">
        <div class="bloc__interne">
          <div class="cv__diplome">
            <p class="cv__date">2021</p>
            <p class="cv__diplome__nom">Titre de développeur web</p>
            <p class="cv__lieu">Openclassrooms</p>
          </div>
          <div class="cv__diplome">
            <p class="cv__date">2008-2009</p>
            <p class="cv__diplome__nom">Licence professionnelle Technologies Avancées de l'Electronique des Communications</p>
            <p class="cv__lieu">Université du Littoral. CALAIS (62)</p>
          </div>
          <div class="cv__diplome">
            <p class="cv__date">2006-2008</p>
            <p class="cv__diplome__nom">Brevet de Technicien Supérieur Systèmes Electroniques.</p>
            <p class="cv__lieu">Lycée Blaise Pascal. LONGUENESSE (62)</p>
          </div>
          <div class="cv__diplome">
            <p class="cv__date">2005-2006</p>
            <p class="cv__diplome__nom">BAC Sciences et Techniques Industrielles Génie Electronique.</p>
            <p class="cv__lieu">Lycée Blaise Pascal. LONGUENESSE (62)</p>
          </div>
        </div>
      </div>      
    </div>

    <div class="cv__langue cv__bloc">
      <h3>Langues</h3>
      <div class="cv__bloc__item">
        <div class="bloc__interne">
          <div class="cv__language">
            <div class="cv__language__haut">
              <img class="cv__langue__flag" src="../assets/images/france.svg" alt="drapeau-france">
              <p class="cv__langue__francais">Français (langue maternelle)</p>
            </div>
            <div class="cv__langue__progressbar">
              <div class="progress__out">
                <div class="progress__in progress__in--fr">
                    100%
                </div>
              </div>
            </div>
          </div>
          <div class="cv__language">
            <div class="cv__language__haut">
              <img class="cv__langue__flag" src="../assets/images/royaume-uni.svg" alt="drapeau-royaume-uni">
              <p class="cv__langue__anglais">Anglais professionnel</p>
            </div>
            <div class="cv__langue__progressbar">
              <div class="progress__out">
                <div class="progress__in progress__in--en">
                    70%
                </div>
              </div>
            </div>
          </div>
          <div class="cv__language">
            <div class="cv__language__haut">
              <img class="cv__langue__flag" src="../assets/images/espagne.svg" alt="drapeau-espagne">
              <p class="cv__langue__espagnol">Espagnol (autodidacte depuis janvier 2020)</p>
            </div>
            <div class="cv__langue__progressbar">
              <div class="progress__out">
                <div class="progress__in progress__in--es">
                    60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cv__softskills cv__bloc">
      <h3>Soft-skills</h3>
      <div class="cv__bloc__item">
        <div class="bloc__interne">
          <ul>
            <li>Rigueur</li>
            <li>Autonomie</li>
            <li>Travail d'équipe</li>
            <li>Polyvalence</li>
            <li>Adaptabilitée</li>
          </ul>
        </div>
      </div>      
    </div>
    
    <div class="cv__competences cv__bloc">
      <h3>Compétences</h3>
      <div class="cv__bloc__item">
        <div class="bloc__interne bloc__competences">
          <div class="cv__techno">
            <svg class="competence__html">
              <circle cx="35" cy="35" r='35'></circle>
              <circle cx="35" cy="35" r='35'></circle>
            </svg>
            <div class="cv__techno__number">
                90<span>%</span>
            </div>
            <p>HTML</p>
          </div>

          <div class="cv__techno">
            <svg class="competence__css">
              <circle cx="35" cy="35" r='35'></circle>
              <circle cx="35" cy="35" r='35'></circle>
            </svg>
            <div class="cv__techno__number">
                80<span>%</span>
            </div>
            <p>CSS</p>
          </div>

          <div class="cv__techno">
            <svg class="competence__js">
              <circle cx="35" cy="35" r='35'></circle>
              <circle cx="35" cy="35" r='35'></circle>
            </svg>
            <div class="cv__techno__number">
                60<span>%</span>
            </div>
            <p>JavaScript</p>
          </div>

          <div class="cv__techno">
            <svg class="competence__vue">
              <circle cx="35" cy="35" r='35'></circle>
              <circle cx="35" cy="35" r='35'></circle>
            </svg>
            <div class="cv__techno__number">
                60<span>%</span>
            </div>
            <p>Vue JS</p>
          </div>

          <div class="cv__techno">
            <svg class="competence__nodejs">
              <circle cx="35" cy="35" r='35'></circle>
              <circle cx="35" cy="35" r='35'></circle>
            </svg>
            <div class="cv__techno__number">
                60<span>%</span>
            </div>
            <p>Node JS</p>
          </div>

        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'CV',
  components: {
    
  }
}
</script>