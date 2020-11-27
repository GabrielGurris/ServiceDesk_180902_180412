module.exports = (sequelize, DataTypes) => {                    //objeto mandado para o banco
    const Account = sequelize.define('Account', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        naddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password_confirmation: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Account.associate = (models) => {
        Account.hasMany(models.Incident, {foreignKey: 'accountId'});
    }

    Account.associate = (models) => {
        Account.hasMany(models.Demand, {foreignKey: 'accountId'});
    }

    Account.prototype.toJSON = function () { //tem q ser uma function por causa do this, para ele apontar pro Account
        const values = { ...this.get() };
        delete values.password;     //nao retorna a senha no JSON
        delete values.password_confirmation;
        return values;
    }

    return Account;
}