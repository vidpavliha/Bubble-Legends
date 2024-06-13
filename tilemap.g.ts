// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "LvL1":
            case "level2":return tiles.createTilemap(hex`1e001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000600000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000000000000010101000000000000000006000000000000000000000000060000000000000000000000000000010101010000000000000200000001010100000000000000000000000000000000000000000000000000000000000000000000000000000101010100000000000000000000000600000000000001010100000000000000000000000000000000000000010101000000000000000000000600000006000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404040404040404040404040404040404040404040404040404040404050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
..............................
..............................
..............................
..........................222.
............222...............
.....................2222.....
.....222......................
................2222..........
........222...................
222...........................
..............................
..............................
..............................
..............................
..............................
..............................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile2,myTiles.tile3,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "SkyGrass":
            case "tile1":return tile1;
            case "spike":
            case "tile2":return tile2;
            case "support":
            case "tile3":return tile3;
            case "spawn":
            case "tile4":return tile4;
            case "finish":
            case "tile5":return tile5;
            case "myTile":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
