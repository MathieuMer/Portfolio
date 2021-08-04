<template>
  <div>
    <p class="contact-texte"><span class="contact-texte--verybig">Un projet en tête ?</span><br><span class="contact-texte--big">Besoin de renseignements ?</span><br><br>Dans tout les cas, n'hésitez pas à me contacter via ce petit formulaire.<br><br>
      Je vous répondrai par email le plus rapidement possible. Si vous préférez par téléphone, laissez moi votre numéro dans le corps du message. Merci !<br><br>
      <span class="contact-texte--prenom">Mathieu</span>
    </p>
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