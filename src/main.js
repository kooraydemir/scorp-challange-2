import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Localize from 'v-localize';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Localize);
Vue.use(IconsPlugin)
Vue.config.productionTip = false

let localize = Localize.config({
  default: 'en-US',
  available: ['en-US', 'tr-TR', {
    locale: 'en-US',
    orientation: 'rtl',
  }],
  fallback: '?',
  localizations: {
    "en-US": {
      header: {
      home: 'Home',
      name: 'Name',
      email: 'EMail',
      contactus: 'Contact Us',
      language: 'Language',
      login: 'Login',
      title: 'Title',
      copyright: 'Copyright © 2013 All rights reserved.',
      logout: 'Logout',
      number: 'Phone Number',
      text: 'Message',
      country: 'Country',
      submit : 'Submit',
      homePageText: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

      }
    },
    "tr-TR": {
      header: {
        home: 'Anasayfa',
        name: 'İsim',
        email: 'E Posta',
        contactus: 'Bize Ulaş',
        language: 'Dil',
        login: 'Giriş Yap',
        title: 'Başlık',
        copyright: 'Copyright © 2013 Tüm Hakları Saklıdır.',
        logout: 'Çıkış Yap',
        number: 'Telefon No',
        text: 'Mesajınız',
        country: 'Ülke',
        submit : 'Gönder',
        homePageText: "Lorem Ipsum Nedir? Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.Neden Kullanırız?Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir."
      }
    },
  }
});

new Vue({
  router,
  store,
  localize,
  render: h => h(App)
}).$mount('#app')
