import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity("bankers")
export class Banker extends Person {
  @Column({ unique: true, length: 10 })
  employeeNumber: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
