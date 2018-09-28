import { Column } from 'typeorm';

import { User } from './User';

export class TenantScope {
    @Column({nullable: true})
    public TenantId: number;
}
