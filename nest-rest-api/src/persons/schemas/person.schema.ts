import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntitySchema } from 'typeorm';


@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uid: string;

    @Column()
    name: string;
    
    @Column()
    surname: string

    @Column()
    patronymic: string

    @Column()
    age: number

    @Column()
    phoneNumber: string

    @Column({
        nullable: true
    })
    company: string;

    @Column({
        nullable: true
    })
    position: string;

    @Column({
        nullable: true
    })
    department: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        nullable: true
    })
    birthday: string;

    @Column({
        nullable: true
    })
    description: string;

}


// export const UserSchema = new EntitySchema<Person>({
//   name: 'Person',
//   target: Person,
//   columns: {
//     id: {
//       type: Number,
//       primary: true,
//       generated: true,
//     },
//     name: {
//       type: String,
//     },
//     surname: {
//       type: String,
//     },
//     patronymic: {
//       type: String,
//     },
//     age :{
//         type: Number
//     },
//     phoneNumber: {
//         type: String
//     }
//   },
// });