import { Injectable } from "@nestjs/common";
import { EntityManager } from "typeorm";

@Injectable()
export class TransactionManager {
    constructor(private readonly entityManager: EntityManager) {}

    async transaction<T>(work: (entityManager: EntityManager) => Promise<T>): Promise<T> {
        const connection = this.entityManager.connection;
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const result = await work(this.entityManager);
            await queryRunner.commitTransaction();
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            queryRunner.release();
            return;
        }
    }
}