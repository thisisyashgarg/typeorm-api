import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Person } from "./utils/Person";
import { Transaction } from "./Transaction";

@Entity("clients")
export class Client extends Person {
  @Column({ type: "varchar", length: 10 })
  cardNUmber: string;

  @Column({ type: "simple-json" })
  additionalInfo: {
    age: number;
  };

  @Column({ type: "simple-array" })
  hobbies: string[];

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];
}
