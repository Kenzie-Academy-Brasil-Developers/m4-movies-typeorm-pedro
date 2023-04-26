import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true, length: 50 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column({ type: "integer" })
  duration: string;

  @Column({ type: "integer" })
  price: string;
}

export default Movie;
