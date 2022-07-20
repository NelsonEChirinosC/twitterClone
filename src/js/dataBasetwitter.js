const usersTwitter = [
        {
            name: 'Nelson Chirinos',
            email: 'ezequieln_@hotmail.com',
            phone: '+584144188697',
            password: 'example#1',
            emailRecuperation: 'example@hotmail.com',
            dateOfBirth: {
                day: 4,
                month: 5,
                year: 1990
            },
            genre: 'Male',
            profileImg: '../../img/profileUser__nelson.jpg',
            description:'Ingeniero Mecánico y programador FrontEnd actualmente aprendiendo para desarrollar paginas web de gran calidad, con conocimientos de HTML, CSS y Javascript. Siendo fan de toda la inovación tecnologica, incluida',
            userName: '@ezequieln4590',
            interests: {
                1: 'Tecnología',
                2: 'Gaming',
                3: 'Negocios & finanzas'
            }

        },
        {
            name: 'Monica Pulgarin',
            email: 'monica@hotmail.com',
            phone: '+584148978678',
            password: 'example#2',
            emailRecuperation: 'example2@hotmail.com',
            dateOfBirth: {
                day: 12,
                month: 5,
                year: 1989
            },
            genre: 'Female',
            profileImg: '',
            description:'',
            userName: '',
            interests: {
                1: 'Moda',
                2: 'Deportes',
                3: 'Negocios & finanzas'
            }

        },
]

const errorMessageTwitter = {
    createAccount: {
        name:{
            empty: '¿Cómo te llamas?'
        },

        email:{

            longFail: `
                    <p> Tu nombre debe tener entre 6 y 30 caracteres de longitud. </p>
                    `,
            invalidCharacter: `
                    <p> Solo se permiten letras (a-z), números (0-9). </p>
                    `,
            alredyExits: `
                    <p> Este nombre de usuario ya está en uso. Elige otro. </p>
                    `,

            notSymbol: `
                    <p> No olvides incluir la "@". </p>
                    `,
            notOneSymbol:`
                    <p> Ingresa una dirección de correo electrónico con sólo una "@". </p>

                        `,
            notNameUser: `
                    <p> Ingresa un nombre de usuario antes de la "@". </p>
                    `,
            notDominion: `
                    <p> Ingresa un nombre de dominio después de la "@". </p>
                    `,

            notValidEmail: `
                    <p> Esta dirección de correo electrónico no es válida. </p>
                    `,
            
        },
        phone:{
            invalidNumber: 
                    `
                        Introduce un número de teléfono válido.
                    `
        },
        password:{
                invalidInput:`
                        <p> Por favor ingrese una contraseña que tenga 8 caracteres o más. </p>
                `
        }
    }
}