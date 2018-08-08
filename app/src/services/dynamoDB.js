import AWS from 'aws-sdk';
AWS.config.update({region: 'us-east-2'});

export default {
    docClient: null,
    /**
    *
    */
    init() {
        const ACCESS_KEY = 'AKIAIBZQRVYDSSF57IBQ';
        const SECRET_ACCESS_KEY = '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';
        const credentials = new AWS.Credentials({accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_ACCESS_KEY});
        this.docClient = new AWS.DynamoDB.DocumentClient({credentials: credentials});
    },
    /**
    *
    */
    async get(playerId) {
        const params = {
            TableName: 'together-quest',
            Key: { playerId: playerId }
        };

        try {
            return new Promise((resolve, reject) => {
                this.docClient.get(params, (err, data) => {
                    if (err) { return reject(err); };

                    resolve(data);
                });
            })
        } catch(err) {
            console.error(err);
        }
    },
    /**
    *
    */
    async create(playerId) {
        const params = {
            TableName: 'together-quest',
            Key: { playerId: playerId },
            Item: {
                playerId: playerId,
                name: 'Blinks',
                title: 'Pants',
                stats: {
                    strength: 3,
                    agility: 4,
                    wisdom: 5,
                    charisma: 4,
                    magic: 1,
                },
                stuff: [
                    '20 catnip coins',
                ],
                honors: [
                    'Meerhuman Champion',
                ],
                traits: [
                    'magic sensitivity',
                ],
            }
        };

        try {
            return new Promise((resolve, reject) => {
                this.docClient.put(params, (err, data) => {
                    if (err) { return reject(err); };

                    resolve(data);
                });
            })
        } catch(err) {
            console.error(err);
        }
    },
}
