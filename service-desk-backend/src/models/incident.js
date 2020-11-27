module.exports = (sequelize, DataTypes) => {                    //objeto mandado para o banco
    const Incident = sequelize.define('Incident', {
        resumo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subcategoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        impacto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        urgencia: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
    Incident.associate = (models) => {
        Incident.belongsTo(models.Account, {foreignKey: 'accountId'});
    }

    return Incident;
}