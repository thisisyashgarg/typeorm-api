import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;

  @Column({ type: "varchar", unique: true })
  email: string;
}
