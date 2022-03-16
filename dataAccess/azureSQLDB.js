var azureSQLDBConnection = require('./azureSQLDBConnection');
const logger = require('../logger');

module.exports.retrieveItemsFromDB = async (storedProcedure, parameters) => {
    try {
        // Initialize SQL Server Connection
        let connection = await azureSQLDBConnection.init();
        // Retrieve Records From SQL Server DB
        await connection.connect();
        let request = connection.request();

        parameters.forEach(param => {
            if (param.type !== undefined) {
                if (param.output == true) {
                    request.output(param.name, param.type, param.value);
                }
                else {
                    request.input(param.name, param.type, param.value);
                }
            }
        });

        let result = await request.execute(`dbo.${storedProcedure}`);
        logger.feedLogger.info(`Result Object : ${JSON.stringify(result)}`);

        let response = result.recordset
        
        return response;

    }
    catch (error) {
        console.log('error occurred while fetching items from database - ', error);
        throw error;
    }
}