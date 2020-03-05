import { CoinStatus } from "../status.enum";
import { BadRequestException, PipeTransform } from "@nestjs/common";


export class ValidateCoinStatus implements PipeTransform<any>{
    readonly allowedStatus = [...Object.values(CoinStatus)]

    transform(value: any){

        if (!this.isValid(value)){
            throw new BadRequestException(`${value} is an invalid id`)
        } else {
            return value
        }
    }

    private isValid(value: any){
        const idx = this.allowedStatus.indexOf(value)
        return idx !== -1
    }
}