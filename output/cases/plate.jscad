function leftcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[92,-159.5],[150,-159.5]]).appendArc([152,-161.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([152,-166.5]).appendArc([154,-168.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.9208076,-168.5]).appendPoint([192.6781879,-175.5694013]).appendPoint([208.5326208,-183.9993528]).appendArc([211.2374591,-183.1724009],{"radius":2,"clockwise":false,"large":false}).appendPoint([219.2654228,-168.073997]).appendArc([218.4384708,-165.3691586],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2348203,-155.690106]).appendPoint([200.3147132,-155.444221]).appendPoint([183.381966,-149.942438]).appendArc([182,-148.040325],{"radius":2,"clockwise":true,"large":false}).appendPoint([182,-73.5]).appendArc([180,-71.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([110,-71.5]).appendArc([108,-73.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([108,-89.5]).appendPoint([92,-89.5]).appendArc([90,-91.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([90,-102.5]).appendArc([88,-104.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([74,-104.5]).appendArc([72,-106.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([72,-138.5]).appendArc([74,-140.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([90,-140.5]).appendPoint([90,-157.5]).appendArc([92,-159.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[155,-166],[169,-166]]).appendPoint([169,-152]).appendPoint([155,-152]).appendPoint([155,-166]).close().innerToCAG()
.union(
    new CSG.Path2D([[75,-121],[89,-121]]).appendPoint([89,-107]).appendPoint([75,-107]).appendPoint([75,-121]).close().innerToCAG()
).union(
    new CSG.Path2D([[75,-138],[89,-138]]).appendPoint([89,-124]).appendPoint([75,-124]).appendPoint([75,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-96],[179,-96]]).appendPoint([179,-82]).appendPoint([165,-82]).appendPoint([165,-96]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-113],[179,-113]]).appendPoint([179,-99]).appendPoint([165,-99]).appendPoint([165,-113]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-130],[179,-130]]).appendPoint([179,-116]).appendPoint([165,-116]).appendPoint([165,-130]).close().innerToCAG()
).union(
    new CSG.Path2D([[165,-147],[179,-147]]).appendPoint([179,-133]).appendPoint([165,-133]).appendPoint([165,-147]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-94],[161,-94]]).appendPoint([161,-80]).appendPoint([147,-80]).appendPoint([147,-94]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-111],[161,-111]]).appendPoint([161,-97]).appendPoint([147,-97]).appendPoint([147,-111]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-128],[161,-128]]).appendPoint([161,-114]).appendPoint([147,-114]).appendPoint([147,-128]).close().innerToCAG()
).union(
    new CSG.Path2D([[147,-145],[161,-145]]).appendPoint([161,-131]).appendPoint([147,-131]).appendPoint([147,-145]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-88],[143,-88]]).appendPoint([143,-74]).appendPoint([129,-74]).appendPoint([129,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-105],[143,-105]]).appendPoint([143,-91]).appendPoint([129,-91]).appendPoint([129,-105]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-122],[143,-122]]).appendPoint([143,-108]).appendPoint([129,-108]).appendPoint([129,-122]).close().innerToCAG()
).union(
    new CSG.Path2D([[129,-139],[143,-139]]).appendPoint([143,-125]).appendPoint([129,-125]).appendPoint([129,-139]).close().innerToCAG()
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
    new CSG.Path2D([[196.4620858,-174.7499104],[208.8233521,-181.3225123]]).appendPoint([215.395954,-168.961246]).appendPoint([203.0346877,-162.3886441]).appendPoint([196.4620858,-174.7499104]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.3733165,-167.642972],[189.6881078,-171.9692099]]).appendPoint([194.0143457,-158.6544186]).appendPoint([180.6995544,-154.3281807]).appendPoint([176.3733165,-167.642972]).close().innerToCAG()
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

        