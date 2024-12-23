import { ConfigService } from '@nestjs/config';
export declare class DatabaseService {
    private configService;
    private readonly sql;
    constructor(configService: ConfigService);
}
