var faker = require('faker')
var cpf = require('gerador-validador-cpf')
//1 - Comentário para teste de MERGE via VSCode
///massa de teste no format javascript
export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,  //'Luciano de Brito',
            cpf: cpf.generate(), //'12345678901',
            email: faker.internet.email(firstName),  //'luciano.brito@aol.com',
            whatsapp: '44999999999',
            address: {
                'postal_code':'87045000',
                'street':'Avenida Colombo',
                'number':'2775',
                'details':'Galpão 99',
                'district':'Vila Nova',
                'city_state':'Maringá/PR'
            },
            delivery_method:'Moto',                            
            cnh:'cnh-digital.jpg'       
        }

        return data

    }
}