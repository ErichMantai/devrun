/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('developers')
class Developer {
    @PrimaryColumn()
    id?: string;

    @Column()
    nome: string;

    @Column({length: 1})
    sexo: string;
    
    @Column()
    idade: number;

    @Column()
    hobby: string;

    @CreateDateColumn()
    datanascimento: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Developer };
