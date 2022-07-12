const usersGoogle = [
{
    name: 'Nelson',
    lastName: 'Chirinos',
    email: 'ezequieln@gmail.com',
    phone: '+584144188697',
    password: 'todoNada#56',
    emailRecuperation: 'ezequiel7890@hotmail.com',
    dateOfBirth: {
        day: 4,
        month: 5,
        year: 1990
    },
    genre: 'Male'
},
{
    name: 'Monica',
    lastName: 'Pulgarin',
    email: 'mst0512@gmail.com',
    phone: '+814241164228',
    password: 'monicaGoogle%56',
    emailRecuperation: '',
    dateOfBirth: {
        day: 4,
        month: 5,
        year: 1990
    },
    genre: 'Female'
},
{
    name: 'Dairen',
    lastName: 'Cepeda',
    email: 'dairen89780@gmail.com',
    phone: '+574164568900',
    password: '89782#$ola',
    emailRecuperation: '',
    dateOfBirth: {
        day: 7,
        month: 1,
        year: 1963
    },
    genre: 'Female'
},
]

const errorMessageGoogle = {

    registerGoogle: {
        accessSection: {
            emailSection:{
                empty: `<i class="fa-solid fa-circle-exclamation"></i> 
                <p> Ingresa un correo electronico o numero de telefono </p>`,
                notFound: `<i class="fa-solid fa-circle-exclamation"></i> 
                <p> No pudimos encontrar tu Cuenta Google </p>`
            },
            passwordSection:{
                empty:`<i class="fa-solid fa-circle-exclamation"></i>  
                <p> Ingresa una contraseña </p>`,
                notFound:`<i class="fa-solid fa-circle-exclamation"></i> 
                <p>La contraseña es incorrecta. Vuelve a intentarlo o haz clic en "¿Olvidaste la contraseña?" para restablecerla.</p>`
            }
        },
        createUserGoogle:{
            emailAndPassword:{
                name:{
                    empty: `<i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingrese el nombre </p>
                            `,
                },
                lastName:{
                    empty: `<i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingrese el apellido </p>
                            `,
                },
                nameAndLastName:{
                    empty:`
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingresa el nombre y el apellido </p>
                        `,
                },
                email:{
                    empty: `<i class="fa-solid fa-circle-exclamation"></i>
                            <p> Elige una dirección de Gmail </p>
                            `,

                    longFail: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Tu nombre debe tener entre 6 y 30 caracteres de longitud. </p>
                            `,
                    invalidCharacter: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Solo se permiten letras (a-z), números (0-9). </p>
                            `,
                    alredyExits: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Este nombre de usuario ya está en uso. Elige otro. </p>
                            `,

                    notSymbol: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> No olvides incluir la "@". </p>
                            `,
                    notOneSymbol:`
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingresa una dirección de correo electrónico con sólo una "@". </p>

                                `,
                    notNameUser: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingresa un nombre de usuario antes de la "@". </p>
                            `,
                    notDominion: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingresa un nombre de dominio después de la "@". </p>
                            `,

                    notValidEmail: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Esta dirección de correo electrónico no es válida. </p>
                            `,
                    
                },
                password:{
                    empty: `<i class="fa-solid fa-circle-exclamation"></i>
                            <p> Ingrese una contraseña </p>
                            `,
                    invalidLong: `
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Usa 8 caracteres o más para tu contraseña </p>
                            `,
                    notCoincidence:`
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Las contraseñas no coinciden. Vuelve a intentarlo. </p>
                            `,
                    notCofirmed:`
                            <i class="fa-solid fa-circle-exclamation"></i>
                            <p> Confirma tu contraseña </p>
                            `
                }
            },
            phoneAndDate:{
                phone:{
                    invalidNumber: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Número invalido </p>
                    `,
                }, 
                date:{
                    empty: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Ingresa la fecha de nacimiento completa. </p>
                    `,
                    invalidDate: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Ingresa una fecha de nacimiento valida </p>
                    `,
                },
                genre:{
                    empty: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Selecciona un genero. </p>
                    `,
                    emptyNameGenre: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Indica el género con el que más te identificas. </p>
                    `,
                }, 
                pronoun:{
                    empty: `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p> Selecciona un pronombre. </p>
                    `,
                }
            }
        }
    }
}