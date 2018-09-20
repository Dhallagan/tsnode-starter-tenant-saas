import { Column } from 'typeorm';

import { User } from './User';

export class TenantScope {
    @Column()
    public TenantId: number;
}
