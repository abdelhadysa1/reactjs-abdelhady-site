'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			Uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			Username: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			Email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			PasswordHash: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			LastVisit: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			IpAddress: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			Device: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			AvatarUrl: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			CreatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			UpdatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};