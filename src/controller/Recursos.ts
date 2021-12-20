import { Get, Route, Tags } from 'tsoa';
import axios from 'axios';
@Route('/recursos')
@Tags("Recursos")

export default class RecursosController{
    @Get('/')
    public async getUsers(){
        const data = await axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos');
        return data.data;
    }
}