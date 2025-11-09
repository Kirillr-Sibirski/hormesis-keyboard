function leftcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[92,-159.5],[150,-159.5]]).appendArc([152,-161.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([152,-168.5]).appendArc([154,-170.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.9208076,-170.5]).appendPoint([192.6781879,-177.5694013]).appendPoint([208.5326208,-185.9993528]).appendArc([211.2374591,-185.1724009],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.3593171,-169.8974074]).appendPoint([199.670009,-159.4284166]).appendPoint([199.7275809,-159.2512284]).appendPoint([198.7226969,-158.9247218]).appendPoint([198.1685749,-158.6300899]).appendPoint([198.1166233,-158.7277966]).appendPoint([183.381966,-153.9402162]).appendArc([182,-152.0381032],{"radius":2,"clockwise":true,"large":false}).appendPoint([182,-75.5]).appendArc([180,-73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([74,-73.5]).appendArc([72,-75.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([72,-140.5]).appendArc([74,-142.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([88,-142.5]).appendArc([90,-144.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([90,-157.5]).appendArc([92,-159.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[155,-168],[169,-168]]).appendPoint([169,-154]).appendPoint([155,-154]).appendPoint([155,-168]).close().innerToCAG()
.union(
    new CSG.Path2D([[75,-123],[89,-123]]).appendPoint([89,-109]).appendPoint([75,-109]).appendPoint([75,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[75,-140],[89,-140]]).appendPoint([89,-126]).appendPoint([75,-126]).appendPoint([75,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-100],[179,-100]]).appendPoint([179,-86]).appendPoint([165,-86]).appendPoint([165,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-117],[179,-117]]).appendPoint([179,-103]).appendPoint([165,-103]).appendPoint([165,-117]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-134],[179,-134]]).appendPoint([179,-120]).appendPoint([165,-120]).appendPoint([165,-134]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-151],[179,-151]]).appendPoint([179,-137]).appendPoint([165,-137]).appendPoint([165,-151]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-98],[161,-98]]).appendPoint([161,-84]).appendPoint([147,-84]).appendPoint([147,-98]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-115],[161,-115]]).appendPoint([161,-101]).appendPoint([147,-101]).appendPoint([147,-115]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-132],[161,-132]]).appendPoint([161,-118]).appendPoint([147,-118]).appendPoint([147,-132]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-149],[161,-149]]).appendPoint([161,-135]).appendPoint([147,-135]).appendPoint([147,-149]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-90],[143,-90]]).appendPoint([143,-76]).appendPoint([129,-76]).appendPoint([129,-90]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-107],[143,-107]]).appendPoint([143,-93]).appendPoint([129,-93]).appendPoint([129,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-124],[143,-124]]).appendPoint([143,-110]).appendPoint([129,-110]).appendPoint([129,-124]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-141],[143,-141]]).appendPoint([143,-127]).appendPoint([129,-127]).appendPoint([129,-141]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-94],[125,-94]]).appendPoint([125,-80]).appendPoint([111,-80]).appendPoint([111,-94]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-111],[125,-111]]).appendPoint([125,-97]).appendPoint([111,-97]).appendPoint([111,-111]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-128],[125,-128]]).appendPoint([125,-114]).appendPoint([111,-114]).appendPoint([111,-128]).close().innerToCAG()
).union(
    new CSG.Path2D([[111,-145],[125,-145]]).appendPoint([125,-131]).appendPoint([111,-131]).appendPoint([111,-145]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-106],[107,-106]]).appendPoint([107,-92]).appendPoint([93,-92]).appendPoint([93,-106]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-123],[107,-123]]).appendPoint([107,-109]).appendPoint([93,-109]).appendPoint([93,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-140],[107,-140]]).appendPoint([107,-126]).appendPoint([93,-126]).appendPoint([93,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-157],[107,-157]]).appendPoint([107,-143]).appendPoint([93,-143]).appendPoint([93,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.4620858,-176.7499104],[208.8233521,-183.3225123]]).appendPoint([215.395954,-170.961246]).appendPoint([203.0346877,-164.3886441]).appendPoint([196.4620858,-176.7499104]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.3733165,-169.642972],[189.6881078,-173.9692099]]).appendPoint([194.0143457,-160.6544186]).appendPoint([180.6995544,-156.3281807]).appendPoint([176.3733165,-169.642972]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = leftcutout_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        