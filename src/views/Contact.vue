<template>
  <div>
    <div class="cv__entete div__bloc">
      <h2>Contact</h2>
    </div>
    
    <div class="div__bloc">
      Bonjour,<br><br>
      Vous pouvez me contacter via ce petit formulaire, je vous répondrai par email le plus rapidement possible. Je peux aussi répondre par téléphone, dans ce cas laissez moi votre numéro dans le corps du message. Merci !<br><br>
      <span class="contact-texte--prenom">Mathieu</span>
    </div>
  
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Nom</label>
      <input class="input-style" v-model="name" type="text" name="user_name" required>
      <label>Email</label>
      <input class="input-style" v-model="email" type="email" name="user_email" required>
      <label>Message</label>
      <textarea name="message" v-model="message" rows="8" required></textarea>
      <input class="submit-button" type="submit" value="Envoyer">
    </form>
    <p v-if="emailSent" class="contact__success">
      Merci pour votre message. Je vous répondrai dès des possible.
    </p>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      emailSent: false
    }
  },
  methods: {
    sendEmail: function(e) {
      emailjs.sendForm('service_hci0lwc', 'template_zzcminq', e.target, 'user_FpGnVlCs4brXMucs0Xs5q', {
          user_name: this.name,
          user_email: this.email,
          message: this.message
      })
      .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.emailSent = true
            this.name = ''
            this.email = ''
            this.message = ''
      })
      .catch((error) => {
          console.log({error})
      })
    }
  }
}
</script>