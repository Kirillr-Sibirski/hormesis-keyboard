function leftcutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[-7.1415781,-10.1610956],[68.5692191,-3.5372591]]).appendArc([70.7359199,-5.3553371],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.1716986,-10.3363105]).appendArc([73.3383994,-12.1543885],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.1948183,-10.6796429]).appendPoint([112.4855442,-15.8258625]).appendPoint([129.0143648,-22.8419306]).appendArc([131.6368366,-21.782383],{"radius":2,"clockwise":false,"large":false}).appendPoint([138.318339,-6.0417501]).appendArc([137.2587915,-3.4192782],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.2808266,4.63639]).appendPoint([118.3389852,4.8883025]).appendPoint([100.9911603,8.8933635]).appendArc([99.4486728,10.6677922],{"radius":2,"clockwise":true,"large":false}).appendPoint([97.2662648,35.6128311]).appendPoint([97.2226869,36.1109284]).appendPoint([95.7846172,52.548141]).appendPoint([95.7410393,53.0462383]).appendPoint([94.3029696,69.4834509]).appendPoint([94.2593917,69.9815482]).appendPoint([92.9520556,84.9244686]).appendArc([90.7853548,86.7425466],{"radius":2,"clockwise":false,"large":false}).appendPoint([21.0517259,80.6416447]).appendArc([19.2336479,78.4749439],{"radius":2,"clockwise":false,"large":false}).appendPoint([20.6281397,62.5358287]).appendPoint([-13.2424798,59.5725334]).appendArc([-15.0605578,57.4058326],{"radius":2,"clockwise":false,"large":false}).appendPoint([-9.3082789,-8.3430176]).appendArc([-7.1415781,-10.1610956],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[95.551884,-9.3506587],[109.1930649,-12.4999734]]).appendPoint([112.3423796,1.1412075]).appendPoint([98.7011987,4.2905222]).appendPoint([95.551884,-9.3506587]).close().innerToCAG()
.union(
    new CSG.Path2D([[77.9777499,61.0284404],[91.9244757,62.2486208]]).appendPoint([90.7042953,76.1953466]).appendPoint([76.7575695,74.9751662]).appendPoint([77.9777499,61.0284404]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.4593975,44.0931305],[93.4061233,45.3133109]]).appendPoint([92.1859429,59.2600367]).appendPoint([78.2392171,58.0398563]).appendPoint([79.4593975,44.0931305]).close().innerToCAG()
).union(
    new CSG.Path2D([[59.8719338,61.4520265],[73.8186596,62.6722069]]).appendPoint([72.5984792,76.6189327]).appendPoint([58.6517534,75.3987523]).appendPoint([59.8719338,61.4520265]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.835229,27.5814067],[76.7819548,28.8015871]]).appendPoint([75.5617744,42.7483129]).appendPoint([61.6150486,41.5281325]).appendPoint([62.835229,27.5814067]).close().innerToCAG()
).union(
    new CSG.Path2D([[41.4174948,65.8603913],[55.3642206,67.0805717]]).appendPoint([54.1440402,81.0272975]).appendPoint([40.1973144,79.8071171]).appendPoint([41.4174948,65.8603913]).close().innerToCAG()
).union(
    new CSG.Path2D([[44.38079,31.9897715],[58.3275158,33.2099519]]).appendPoint([57.1073354,47.1566777]).appendPoint([43.1606096,45.9364973]).appendPoint([44.38079,31.9897715]).close().innerToCAG()
).union(
    new CSG.Path2D([[24.0089247,58.3144197],[37.9556505,59.5346001]]).appendPoint([36.7354701,73.4813259]).appendPoint([22.7887443,72.2611455]).appendPoint([24.0089247,58.3144197]).close().innerToCAG()
).union(
    new CSG.Path2D([[26.9722199,24.4437999],[40.9189457,25.6639803]]).appendPoint([39.6987653,39.6107061]).appendPoint([25.7520395,38.3905257]).appendPoint([26.9722199,24.4437999]).close().innerToCAG()
).union(
    new CSG.Path2D([[28.4538675,7.50849],[42.4005933,8.7286704]]).appendPoint([41.1804129,22.6753962]).appendPoint([27.2336871,21.4552158]).appendPoint([28.4538675,7.50849]).close().innerToCAG()
).union(
    new CSG.Path2D([[7.1232891,44.79128],[21.0700149,46.0114604]]).appendPoint([19.8498345,59.9581862]).appendPoint([5.9031087,58.7380058]).appendPoint([7.1232891,44.79128]).close().innerToCAG()
).union(
    new CSG.Path2D([[-9.3265679,26.2871667],[4.6201579,27.5073471]]).appendPoint([3.3999775,41.4540729]).appendPoint([-10.5467483,40.2338925]).appendPoint([-9.3265679,26.2871667]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.1167048,-9.576746],[88.0634306,-8.3565656]]).appendPoint([86.8432502,5.5901602]).appendPoint([72.8965244,4.3699798]).appendPoint([74.1167048,-9.576746]).close().innerToCAG()
).union(
    new CSG.Path2D([[82.4226927,10.2225107],[96.3694185,11.4426911]]).appendPoint([95.1492381,25.3894169]).appendPoint([81.2025123,24.1692365]).appendPoint([82.4226927,10.2225107]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.3168766,10.6460968],[78.2636024,11.8662772]]).appendPoint([77.043422,25.813003]).appendPoint([63.0966962,24.5928226]).appendPoint([64.3168766,10.6460968]).close().innerToCAG()
).union(
    new CSG.Path2D([[45.8624376,15.0544616],[59.8091634,16.274642]]).appendPoint([58.588983,30.2213678]).appendPoint([44.6422572,29.0011874]).appendPoint([45.8624376,15.0544616]).close().innerToCAG()
).union(
    new CSG.Path2D([[10.0865843,10.9206602],[24.0333101,12.1408406]]).appendPoint([22.8131297,26.0875664]).appendPoint([8.8664039,24.867386]).appendPoint([10.0865843,10.9206602]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.5682319,-6.0146497],[25.5149577,-4.7944693]]).appendPoint([24.2947773,9.1522565]).appendPoint([10.3480515,7.9320761]).appendPoint([11.5682319,-6.0146497]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.8449203,9.3518568],[6.1018055,10.5720372]]).appendPoint([4.8816251,24.518763]).appendPoint([-9.0651007,23.2985826]).appendPoint([-7.8449203,9.3518568]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.3632727,-7.5834531],[7.5834531,-6.3632727]]).appendPoint([6.3632727,7.5834531]).appendPoint([-7.5834531,6.3632727]).appendPoint([-6.3632727,-7.5834531]).close().innerToCAG()
).union(
    new CSG.Path2D([[80.9410451,27.1578206],[94.8877709,28.378001]]).appendPoint([93.6675905,42.3247268]).appendPoint([79.7208647,41.1045464]).appendPoint([80.9410451,27.1578206]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.3535814,44.5167166],[75.3003072,45.736897]]).appendPoint([74.0801268,59.6836228]).appendPoint([60.133401,58.4634424]).appendPoint([61.3535814,44.5167166]).close().innerToCAG()
).union(
    new CSG.Path2D([[25.4905723,41.3791098],[39.4372981,42.5992902]]).appendPoint([38.2171177,56.546016]).appendPoint([24.2703919,55.3258356]).appendPoint([25.4905723,41.3791098]).close().innerToCAG()
).union(
    new CSG.Path2D([[8.6049367,27.8559701],[22.5516625,29.0761505]]).appendPoint([21.3314821,43.0228763]).appendPoint([7.3847563,41.8026959]).appendPoint([8.6049367,27.8559701]).close().innerToCAG()
).union(
    new CSG.Path2D([[-10.8082155,43.2224766],[3.1385103,44.442657]]).appendPoint([1.9183299,58.3893828]).appendPoint([-12.0283959,57.1692024]).appendPoint([-10.8082155,43.2224766]).close().innerToCAG()
).union(
    new CSG.Path2D([[42.8991424,48.9250814],[56.8458682,50.1452618]]).appendPoint([55.6256878,64.0919876]).appendPoint([41.678962,62.8718072]).appendPoint([42.8991424,48.9250814]).close().innerToCAG()
).union(
    new CSG.Path2D([[116.1836197,-14.6797015],[129.0706877,-20.1499373]]).appendPoint([134.5409235,-7.2628693]).appendPoint([121.6538555,-1.7926335]).appendPoint([116.1836197,-14.6797015]).close().innerToCAG()
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

        