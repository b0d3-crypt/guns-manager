import { Global, Module } from "@nestjs/common";
import { TransactionManager } from "./transaction.manager";

const tools = [
    TransactionManager
]

@Global()
@Module({
    providers: [...tools],
    exports: [...tools]
})
export class ToolsModule{}