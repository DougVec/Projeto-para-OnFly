import { ExecutionBaseError } from './abstract/execution-base.error';
export class ExecutionCancelledError extends ExecutionBaseError {
    constructor(executionId) {
        super('The execution was cancelled', {
            level: 'warning',
            extra: { executionId },
        });
    }
}
//# sourceMappingURL=execution-cancelled.error.js.map