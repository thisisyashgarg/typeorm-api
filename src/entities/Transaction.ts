import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { Client } from "./Client";

export enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transactions")
export class Transaction extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: "enum", enum: TransactionType })
  type: TransactionType;

  @Column({ type: "numeric" })
  amount: number;

  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({ name: "clientId" })
  client: Client;
}
