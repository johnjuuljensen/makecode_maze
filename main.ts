tiles.setCurrentTilemap(maze.generateTilemap(MazeAlgorithm.Ellers, 8, 8, sprites.dungeon.floorDark0, sprites.castle.tileGrass2, 2, 0))
let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let value of tilesExt.getRandomTilesByType(sprites.castle.tileGrass2, 10)) {
    tiles.setTileAt(value, sprites.dungeon.chestClosed)
}
for (let value of tilesExt.line(LineType.Covering, tiles.getTileLocation(0, 0), tiles.getTileLocation(5, 5))) {
    tiles.setTileAt(value, sprites.builtin.brick)
}
