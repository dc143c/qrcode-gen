import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  name: string;

  @Column()
  gitHub: string;

  @Column()
  linkedIn: string;
}
