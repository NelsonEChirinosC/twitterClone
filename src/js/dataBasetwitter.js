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
        }
    }
}