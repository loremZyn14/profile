
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
            others : [ 
                   [
                        { image : './assets/html.png', text: 'HTML 5'},
                        { image : './assets/css.png', text: 'CSS 3'},
                        { image : './assets/js.png', text: 'JS'},
                        { image : './assets/jquery.png', text: 'JQUERY'},
                    ],
               

                [
                        { image : './assets/java.png', text: 'JAVA'},
                        { image : './assets/angular.png',text:'Angular'},
                        { image : './assets/nodejs.png' ,text:'NodeJs'},
                        { image : './assets/mongodb.png' ,text:'MongoDb'},
                    ]
                 
            ]
        }
    },
})