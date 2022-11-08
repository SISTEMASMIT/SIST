import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Subscription } from "../../subscription/entities/subscription.entity";

@Entity()
export class PaymentSist extends BaseModel{
    @OneToOne(()=> Subscription)
    @JoinColumn()
    type_subscription:Subscription;

    @Column()
    start:Date;

    @Column()
    end:Date;
}
