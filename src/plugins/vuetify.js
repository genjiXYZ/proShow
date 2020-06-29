
// import Vue from 'vue'
// import Vuetify from 'vuetify/lib';


// import { Intersect } from 'vuetify/lib/directives' 

// Vue.use(

// Vuetify, 

// {

// directives: {  Intersect,  },

// })

// export default new Vuetify()




import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { Intersect } from 'vuetify/lib/directives' 

Vue.use(Vuetify)

const opts = {Intersect}

export default new Vuetify(opts)