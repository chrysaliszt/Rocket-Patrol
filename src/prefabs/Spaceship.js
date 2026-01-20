// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this)        // add to existing scene
        this.points = pointValue        // store point value
        this.moveSpeed = game.settings.spaceshipSpeed
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed

        // wrap edges
        if(this.x <= 0 - this.width) {
            this.reset()
        }
    }

    reset() {
        this.x = game.config.width
    }
}