import axios from "axios";

export default class PeopleAPI{
    static async getAllPeople(){
        const response = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
        return response.data.items
    }
    static async getPeopleById(id){
        const response = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
        let AllPeople = response.data.items
        return AllPeople.filter(i=>i.id.includes(id))[0]
    }
}

